/**
 * Cloudflare Pages Function — /api/contact
 *
 * Receives form submissions from the contact page, verifies Cloudflare
 * Turnstile anti-bot token, assembles an email, and delivers it to the
 * business mailbox via Resend email API.
 *
 * Required environment variables (set in Cloudflare Pages dashboard >
 * Settings > Environment variables):
 *   - TURNSTILE_SECRET       : Cloudflare Turnstile secret key
 *   - RESEND_API_KEY         : Resend.com API key
 *   - MAIL_TO                : Business email to receive inquiries (info@nixiafabric.com)
 *   - MAIL_FROM              : Verified sender address (no-reply@nixiafabric.com)
 *
 * Local dev note: This function only runs on Cloudflare Pages deployment.
 * `npm run dev` will return 404 for /api/contact — that is expected.
 */

const RESEND_API_URL = "https://api.resend.com/emails";
const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  "https://nixiafabric.com",
  "https://www.nixiafabric.com",
];

export async function onRequestPost(context) {
  // Defensive: Cloudflare Pages Functions pass a single context object,
  // but we guard against unexpected shapes to avoid runtime throws.
  const request = context && context.request ? context.request : null;
  const env = context && context.env ? context.env : {};

  const origin = request && request.headers ? (request.headers.get("Origin") || "") : "";
  const corsHeaders = {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // CORS preflight
  if (request && request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Outer safety net — any unhandled error becomes a JSON response instead of
  // letting Cloudflare render the generic "Bad gateway" HTML page.
  try {
    if (!request) {
      return jsonResponse(
        { success: false, error: "Invalid request context." },
        400,
        corsHeaders
      );
    }
    return await handlePost(request, env, corsHeaders);
  } catch (err) {
    const message = err && typeof err.message === "string" ? err.message : "Unknown error";
    const stack = err && typeof err.stack === "string" ? err.stack : "No stack";
    console.error("UNHANDLED ERROR in /api/contact:", message);
    console.error("STACK:", stack);

    try {
      return jsonResponse(
        { success: false, error: "Internal server error. Please try again or contact us at info@nixiafabric.com." },
        500,
        corsHeaders
      );
    } catch (responseErr) {
      return new Response("Internal server error", { status: 500 });
    }
  }
}

async function handlePost(request, env, corsHeaders) {
  // ---- Parse JSON body ----
  let body;
  try {
    body = await request.json();
  } catch (parseErr) {
    console.error("JSON parse error:", parseErr && parseErr.message ? parseErr.message : parseErr);
    return jsonResponse(
      { success: false, error: "Invalid request format. Please refresh the page and try again." },
      400,
      corsHeaders
    );
  }

  const name = String(body && body.name || "").trim();
  const company = String(body && body.company || "").trim();
  const email = String(body && body.email || "").trim();
  const subject = String(body && body.subject || "").trim();
  const message = String(body && body.message || "").trim();
  const turnstileToken = String(body && body["cf-turnstile-response"] || "").trim();

  // ---- Validate required fields ----
  const missing = [];
  if (!name) missing.push("Name");
  if (!email) missing.push("Email");
  if (!subject) missing.push("Subject");
  if (!message) missing.push("Message");
  if (missing.length > 0) {
    return jsonResponse(
      { success: false, error: `Missing required fields: ${missing.join(", ")}.` },
      400,
      corsHeaders
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return jsonResponse(
      { success: false, error: "Please provide a valid email address." },
      400,
      corsHeaders
    );
  }

  // ---- Turnstile token ----
  if (!turnstileToken) {
    return jsonResponse(
      { success: false, error: "Anti-bot verification is required. Please complete the verification." },
      400,
      corsHeaders
    );
  }

  const turnstileSecret = String(env.TURNSTILE_SECRET || "").trim();
  if (!turnstileSecret) {
    console.error("TURNSTILE_SECRET environment variable is not set.");
    return jsonResponse(
      { success: false, error: "Server configuration error (TURNSTILE_SECRET). Please contact us at info@nixiafabric.com." },
      500,
      corsHeaders
    );
  }

  // ---- Verify Cloudflare Turnstile token ----
  let turnstileData;
  try {
    const ip = request.headers.get("CF-Connecting-IP") || "";
    const turnstileRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: ip,
      }),
    });

    turnstileData = await turnstileRes.json();
  } catch (turnstileErr) {
    console.error("Turnstile verification request failed:", turnstileErr && turnstileErr.message ? turnstileErr.message : turnstileErr);
    return jsonResponse(
      { success: false, error: "Anti-bot verification service is temporarily unavailable. Please try again in a moment." },
      502,
      corsHeaders
    );
  }

  if (!turnstileData || !turnstileData.success) {
    const errorCodes = turnstileData && Array.isArray(turnstileData["error-codes"]) ? turnstileData["error-codes"] : [];
    console.error("Turnstile verification failed:", errorCodes.join(", "));
    return jsonResponse(
      { success: false, error: "Anti-bot verification failed. Please refresh the page and try again." },
      403,
      corsHeaders
    );
  }

  // ---- Assemble email ----
  const toEmail = String(env.MAIL_TO || "info@nixiafabric.com").trim();
  const fromEmail = String(env.MAIL_FROM || "no-reply@nixiafabric.com").trim();

  if (!toEmail.includes("@") || !fromEmail.includes("@")) {
    console.error("Invalid MAIL_TO or MAIL_FROM:", toEmail, fromEmail);
    return jsonResponse(
      { success: false, error: "Email service is misconfigured. Please contact us at info@nixiafabric.com." },
      500,
      corsHeaders
    );
  }

  const emailSubject = `[Website Inquiry] ${subject}`;
  let emailHtml;
  let emailText;
  try {
    emailHtml = buildEmailHtml({ name, company, email, subject, message });
    emailText = buildEmailText({ name, company, email, subject, message });
  } catch (templateErr) {
    console.error("Email template error:", templateErr && templateErr.message ? templateErr.message : templateErr);
    return jsonResponse(
      { success: false, error: "Failed to prepare email. Please try again." },
      500,
      corsHeaders
    );
  }

  // ---- Resend API key ----
  const resendKey = String(env.RESEND_API_KEY || "").trim();
  if (!resendKey) {
    console.error("RESEND_API_KEY environment variable is not set.");
    return jsonResponse(
      { success: false, error: "Email service is not configured. Please contact us at info@nixiafabric.com." },
      500,
      corsHeaders
    );
  }

  // ---- Send email via Resend ----
  let sendRes;
  try {
    sendRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Nixia Fabric Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      }),
    });
  } catch (sendErr) {
    console.error("Resend API network error:", sendErr && sendErr.message ? sendErr.message : sendErr);
    return jsonResponse(
      { success: false, error: "Email delivery service is temporarily unavailable. Please try again or contact us at info@nixiafabric.com." },
      502,
      corsHeaders
    );
  }

  // ---- Parse Resend response ----
  let resendData;
  try {
    resendData = await sendRes.json();
  } catch {
    resendData = {};
  }

  if (!sendRes.ok) {
    const errDetail = resendData && resendData.message ? resendData.message : `HTTP ${sendRes.status}`;
    console.error("Resend API error:", sendRes.status, errDetail);
    return jsonResponse(
      { success: false, error: `Email delivery failed (${sendRes.status}: ${errDetail}). Please try again or contact us at info@nixiafabric.com.` },
      502,
      corsHeaders
    );
  }

  // Confirm we got an email ID back
  const emailId = resendData && resendData.id ? resendData.id : (resendData && resendData.data && resendData.data.id ? resendData.data.id : null);
  if (!emailId) {
    console.error("Resend returned ok but no email ID:", JSON.stringify(resendData));
    return jsonResponse(
      { success: false, error: "Email delivery may have failed. Please try again or contact us at info@nixiafabric.com." },
      502,
      corsHeaders
    );
  }

  return jsonResponse(
    { success: true, message: "Your inquiry has been sent. We will get back to you within 24 hours." },
    200,
    corsHeaders
  );
}

// Handle non-POST requests
export async function onRequestGet() {
  return jsonResponse(
    { success: false, error: "Method not allowed. Use POST." },
    405
  );
}

// ---- Helpers ----

function jsonResponse(data, status, extraHeaders) {
  const headers = { "Content-Type": "application/json" };
  if (extraHeaders && typeof extraHeaders === "object") {
    Object.keys(extraHeaders).forEach((key) => {
      headers[key] = extraHeaders[key];
    });
  }
  return new Response(JSON.stringify(data), { status, headers });
}

function escapeHtml(str) {
  if (str === null || str === undefined) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml({ name, company, email, subject, message }) {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: #16294d; padding: 20px 24px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #ffffff; font-size: 18px; margin: 0;">New Website Inquiry</h1>
    <p style="color: rgba(255,255,255,0.7); font-size: 13px; margin: 4px 0 0;">Nixia Fabric — Contact Form</p>
  </div>
  <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; padding: 24px;">
    <table style="width: 100%; font-size: 14px; line-height: 1.6;">
      <tr><td style="font-weight: 600; color: #475569; width: 100px; vertical-align: top;">Name:</td><td style="color: #1e293b;">${escapeHtml(name)}</td></tr>
      <tr><td style="font-weight: 600; color: #475569; vertical-align: top;">Company:</td><td style="color: #1e293b;">${escapeHtml(company) || "—"}</td></tr>
      <tr><td style="font-weight: 600; color: #475569; vertical-align: top;">Email:</td><td style="color: #1e293b;"><a href="mailto:${escapeHtml(email)}" style="color: #c4a035;">${escapeHtml(email)}</a></td></tr>
      <tr><td style="font-weight: 600; color: #475569; vertical-align: top;">Subject:</td><td style="color: #1e293b;">${escapeHtml(subject)}</td></tr>
    </table>
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;">
    <p style="font-weight: 600; color: #475569; font-size: 13px; margin: 0 0 8px;">Message:</p>
    <div style="background: #f8fafc; border-radius: 6px; padding: 16px; color: #1e293b; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(message)}</div>
  </div>
  <p style="font-size: 12px; color: #94a3b8; text-align: center; margin-top: 16px;">
    This inquiry was submitted from nixiafabric.com/contact
  </p>
</body>
</html>`;
}

function buildEmailText({ name, company, email, subject, message }) {
  return [
    "New Website Inquiry — Nixia Fabric",
    "==================================",
    "",
    `Name:    ${name}`,
    `Company: ${company || "—"}`,
    `Email:   ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    "--------",
    message,
    "",
    "---",
    "This inquiry was submitted from nixiafabric.com/contact",
  ].join("\n");
}

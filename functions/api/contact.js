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
 *   - RESEND_API_KEY        : Resend.com API key
 *   - CONTACT_TO_EMAIL      : Business email to receive inquiries (e.g. info@nixiafabric.com)
 *   - CONTACT_FROM_EMAIL    : Verified sender email (e.g. noreply@nixiafabric.com)
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

export async function onRequestPost({ request, env }) {
  const origin = request.headers.get("Origin") || "";

  // CORS headers
  const corsHeaders = {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const body = await request.json();

    const { name, company, email, subject, message, "cf-turnstile-response": turnstileToken } = body;

    // ---- Validate required fields ----
    if (!name || !email || !subject || !message) {
      return jsonResponse(
        { success: false, error: "Missing required fields. Please fill in all required fields." },
        400,
        corsHeaders
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return jsonResponse(
        { success: false, error: "Please provide a valid email address." },
        400,
        corsHeaders
      );
    }

    // ---- Verify Cloudflare Turnstile token ----
    const turnstileSecret = env.TURNSTILE_SECRET;
    if (!turnstileToken) {
      return jsonResponse(
        { success: false, error: "Anti-bot verification is required. Please complete the verification." },
        400,
        corsHeaders
      );
    }

    const turnstileRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: request.headers.get("CF-Connecting-IP") || "",
      }),
    });

    const turnstileData = await turnstileRes.json();

    if (!turnstileData.success) {
      return jsonResponse(
        { success: false, error: "Anti-bot verification failed. Please try again." },
        403,
        corsHeaders
      );
    }

    // ---- Assemble email content ----
    const toEmail = env.CONTACT_TO_EMAIL || "info@nixiafabric.com";
    const fromEmail = env.CONTACT_FROM_EMAIL || "noreply@nixiafabric.com";

    const emailSubject = `[Website Inquiry] ${subject}`;
    const emailHtml = buildEmailHtml({ name, company, email, subject, message });
    const emailText = buildEmailText({ name, company, email, subject, message });

    // ---- Send email via Resend API ----
    const resendKey = env.RESEND_API_KEY;
    if (!resendKey) {
      console.error("RESEND_API_KEY environment variable is not set.");
      return jsonResponse(
        { success: false, error: "Email service is not configured. Please contact us directly at info@nixiafabric.com." },
        500,
        corsHeaders
      );
    }

    const sendRes = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Nixia Fabric Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: `${name} <${email}>`,
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!sendRes.ok) {
      const errBody = await sendRes.text();
      console.error("Resend API error:", sendRes.status, errBody);
      return jsonResponse(
        { success: false, error: "Failed to send your inquiry. Please try again or contact us at info@nixiafabric.com." },
        502,
        corsHeaders
      );
    }

    return jsonResponse(
      { success: true, message: "Your inquiry has been sent. We will get back to you within 24 hours." },
      200,
      corsHeaders
    );
  } catch (err) {
    console.error("Contact form error:", err);
    return jsonResponse(
      { success: false, error: "An unexpected error occurred. Please try again or contact us at info@nixiafabric.com." },
      500,
      corsHeaders
    );
  }
}

// Handle non-POST requests
export async function onRequestGet() {
  return jsonResponse({ error: "Method not allowed. Use POST." }, 405);
}

// ---- Helpers ----

function jsonResponse(data, status, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
    },
  });
}

function escapeHtml(str) {
  if (!str) return "";
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

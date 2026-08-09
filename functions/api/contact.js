/**
 * /api/contact — Cloudflare Pages Function
 * POST only. Receives contact inquiry, sends email via Resend.
 *
 * Deploy then test:
 *   S1: curl -X POST .../api/contact -H "X-Debug-Step: ping" -d '{}'
 *   S2: curl -X POST .../api/contact -H "Content-Type: application/json" -d '{"name":"Test","company":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
 *   S3: Submit form from browser on nixiafabric.com
 */

export async function onRequestPost(context) {
  try {
    return await handlePost(context);
  } catch (e) {
    return json({
      success: false,
      error: "Internal server error: " + (e && e.message ? e.message : "unknown"),
      code: "INTERNAL_ERROR",
    }, 500);
  }
}

async function handlePost(context) {
  var request = context && context.request ? context.request : null;
  var env     = context && context.env     ? context.env     : {};

  var origin = "";
  try { origin = request.headers.get("Origin") || ""; } catch (_) {}
  var allowedOrigin = (origin.indexOf("nixiafabric.com") > -1) ? origin : "https://nixiafabric.com";

  if (request && request.method === "OPTIONS") {
    return cors(null, 204, allowedOrigin);
  }

  var step;
  try { step = request.headers.get("X-Debug-Step") || ""; } catch (_) {}
  if (step === "ping") {
    return cors({ ok: true, step: "ping", time: Date.now() }, 200, allowedOrigin);
  }

  if (!request) {
    return cors({ success: false, error: "Invalid request context.", code: "NO_REQUEST" }, 400, allowedOrigin);
  }

  var body;
  try { body = await request.json(); } catch (_) {
    return cors({ success: false, error: "Invalid JSON body.", code: "BAD_JSON" }, 400, allowedOrigin);
  }

  var name    = String(body && body.name    || "").trim();
  var company = String(body && body.company || "").trim();
  var email   = String(body && body.email   || "").trim();
  var subject = String(body && body.subject || "").trim();
  var message = String(body && body.message || "").trim();

  if (!name || !company || !email || !subject || !message) {
    return cors({ success: false, error: "Missing required fields.", code: "MISSING_FIELDS" }, 400, allowedOrigin);
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return cors({ success: false, error: "Please provide a valid email address.", code: "INVALID_EMAIL" }, 400, allowedOrigin);
  }

  // ---- send email via Resend ----
  var resendKey = String(env.RESEND_API_KEY || "").trim();
  var toEmail   = String(env.MAIL_TO || "info@nixiafabric.com").trim();
  var fromEmail = String(env.MAIL_FROM || "no-reply@nixiafabric.com").trim();

  if (!resendKey) {
    return cors({ success: false, error: "Email service not configured (RESEND_API_KEY).", code: "NO_RESEND_KEY" }, 500, allowedOrigin);
  }

  var res, resendData;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + resendKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Nixia Fabric Website <" + fromEmail + ">",
        to: [toEmail],
        reply_to: email,
        subject: "[Website Inquiry] " + subject,
        html: buildEmailHtml(name, company, email, subject, message),
      }),
    });
    resendData = await res.json();
  } catch (e) {
    return cors({ success: false, error: "Email delivery unavailable: " + (e && e.message ? e.message : "network error"), code: "RESEND_FETCH_FAIL" }, 502, allowedOrigin);
  }

  if (!res.ok) {
    var detail = (resendData && resendData.message) ? resendData.message : ("HTTP " + res.status);
    return cors({ success: false, error: "Email delivery failed: " + detail, code: "RESEND_API_FAIL" }, 502, allowedOrigin);
  }

  return cors({ success: true, message: "Your inquiry has been sent. We'll reply within 24 hours." }, 200, allowedOrigin);
}

function cors(data, status, allowedOrigin) {
  var headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": allowedOrigin || "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  return new Response(data ? JSON.stringify(data) : null, { status: status, headers: headers });
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function buildEmailHtml(name, company, email, subject, message) {
  return "<!DOCTYPE html><html><body><h1>New Inquiry</h1>" +
    "<p><b>Name:</b> " + escapeHtml(name) + "</p>" +
    "<p><b>Company:</b> " + escapeHtml(company) + "</p>" +
    "<p><b>Email:</b> " + escapeHtml(email) + "</p>" +
    "<p><b>Subject:</b> " + escapeHtml(subject) + "</p>" +
    "<p><b>Message:</b> " + escapeHtml(message) + "</p>" +
    "</body></html>";
}

export async function onRequestGet() {
  return json({ error: "Use POST" }, 405);
}

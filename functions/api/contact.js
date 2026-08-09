/**
 * /api/contact — Cloudflare Pages Function (stepwise debug version)
 *
 * Deploy then test in order:
 *   S0: curl .../api/contact -X POST -H "X-Debug-Step: ping" -d '{}'
 *   S1: curl .../api/contact -X POST -d '{}'
 *   S2: curl .../api/contact -X POST -H "Content-Type: application/json" -d '{"name":"T","company":"C","email":"e@e.com","subject":"S","message":"M"}'
 */

// ---- shared helpers ----

var ALLOWED_ORIGIN = "https://nixiafabric.com";

function okResp(data) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

function errResp(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 500,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    },
  });
}

// ---- entry points ----

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function onRequestPost(context) {
  // outer safety net — must catch EVERYTHING
  try {
    return await handle(context);
  } catch (e) {
    var msg = "INTERNAL: ";
    try { msg += e.message || String(e); } catch (_) { msg += "unknown"; }
    return errResp({ success: false, error: msg, code: "CRASH" }, 500);
  }
}

async function handle(context) {
  // ---- options preflight ----
  if (context && context.request && context.request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: { "Access-Control-Allow-Origin": ALLOWED_ORIGIN } });
  }

  // ---- S0: ping (no parsing, no env) ----
  var step = "";
  try { step = (context && context.request && context.request.headers.get("X-Debug-Step")) || ""; } catch (_) {}
  if (step === "ping") {
    return okResp({ ok: true, step: "ping", time: Date.now() });
  }

  // ---- S1: just parse body ----
  var bodyText = "";
  try { bodyText = await context.request.text(); } catch (e) {
    return errResp({ success: false, error: "Cannot read body: " + (e.message || "?"), code: "BODY_READ_FAIL" }, 400);
  }

  var body = {};
  try { body = JSON.parse(bodyText); } catch (e) {
    return errResp({ success: false, error: "Invalid JSON: " + (e.message || "?"), code: "JSON_PARSE_FAIL" }, 400);
  }

  if (step === "parse") {
    return okResp({ ok: true, step: "parse", parsed: body });
  }

  // ---- S2: validate fields ----
  var name    = String(body.name    || "").trim();
  var company = String(body.company || "").trim();
  var email   = String(body.email   || "").trim();
  var subject = String(body.subject || "").trim();
  var message = String(body.message || "").trim();

  if (!name || !company || !email || !subject || !message) {
    return errResp({ success: false, error: "Missing required fields.", code: "MISSING_FIELDS" }, 400);
  }

  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return errResp({ success: false, error: "Invalid email format.", code: "INVALID_EMAIL" }, 400);
  }

  // ---- S3: read env vars safely ----
  var env = {};
  try { env = context.env || {}; } catch (_) {}

  var resendKey = "";
  try { resendKey = String(env.RESEND_API_KEY || "").trim(); } catch (_) {}

  if (step === "env-check") {
    return okResp({ ok: true, step: "env-check", hasKey: !!resendKey });
  }

  if (!resendKey) {
    return errResp({ success: false, error: "Email service not configured (missing RESEND_API_KEY).", code: "NO_RESEND_KEY" }, 500);
  }

  var toEmail   = "";
  var fromEmail = "";
  try {
    toEmail   = String(env.MAIL_TO   || "info@nixiafabric.com").trim();
    fromEmail = String(env.MAIL_FROM || "no-reply@nixiafabric.com").trim();
  } catch (_) {}

  // ---- S4: send email via Resend ----
  var emailHtml = "<!DOCTYPE html><html><body>" +
    "<h1>New Inquiry</h1>" +
    "<p><b>Name:</b> " + esc(name) + "</p>" +
    "<p><b>Company:</b> " + esc(company) + "</p>" +
    "<p><b>Email:</b> " + esc(email) + "</p>" +
    "<p><b>Subject:</b> " + esc(subject) + "</p>" +
    "<p><b>Message:</b> " + esc(message) + "</p>" +
    "</body></html>";

  var res;
  try {
    res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + resendKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Nixia Fabric <" + fromEmail + ">",
        to: [toEmail],
        reply_to: email,
        subject: "[Inquiry] " + subject,
        html: emailHtml,
      }),
    });
  } catch (e) {
    return errResp({ success: false, error: "Resend unreachable: " + (e.message || "network"), code: "RESEND_FETCH_FAIL" }, 502);
  }

  if (!res.ok) {
    var resendBody = "";
    try { resendBody = await res.text(); } catch (_) {}
    return errResp({ success: false, error: "Resend HTTP " + res.status + ": " + resendBody.slice(0, 200), code: "RESEND_API_FAIL" }, 502);
  }

  return okResp({ success: true, message: "Your inquiry has been sent. We'll reply within 24 hours." });
}

function esc(s) {
  if (!s) return "";
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// fallback for non-POST
export async function onRequestGet() {
  return errResp({ error: "Use POST" }, 405);
}

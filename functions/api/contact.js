/**
 * /api/contact — Cloudflare Pages Function
 * POST only. Validates Turnstile token, sends inquiry email via Resend.
 *
 * Deploy then test step by step:
 *   S1: curl -X POST .../api/contact -H "X-Debug-Step: ping" -d '{}'
 *   S2: curl -X POST .../api/contact -H "Content-Type: application/json" -d '{...no token...}'
 *   S3: Submit form from browser (with Turnstile token) on nixiafabric.com
 */

export async function onRequestPost(context) {
  try {
    return await handlePost(context);
  } catch (e) {
    // Global catch-all: any uncaught exception becomes a readable JSON error
    return json({
      success: false,
      error: "Internal server error: " + (e && e.message ? e.message : "unknown"),
      code: "INTERNAL_ERROR",
    }, 500);
  }
}

async function handlePost(context) {
  // ---- parse context ----
  var request = context && context.request ? context.request : null;
  var env     = context && context.env     ? context.env     : {};

  var origin = "";
  try { origin = request.headers.get("Origin") || ""; } catch (_) {}
  var allowedOrigin = (origin.indexOf("nixiafabric.com") > -1) ? origin : "https://nixiafabric.com";

  // ---- CORS preflight ----
  if (request && request.method === "OPTIONS") {
    return cors(null, 204, allowedOrigin);
  }

  // ---- S1: ping (diagnostic) ----
  var step;
  try { step = request.headers.get("X-Debug-Step") || ""; } catch (_) {}
  if (step === "ping") {
    return cors({ ok: true, step: "ping", time: Date.now() }, 200, allowedOrigin);
  }

  if (!request) {
    return cors({ success: false, error: "Invalid request context.", code: "NO_REQUEST" }, 400, allowedOrigin);
  }

  // ---- S2: parse body ----
  var body;
  try { body = await request.json(); } catch (_) {
    return cors({ success: false, error: "Invalid JSON body.", code: "BAD_JSON" }, 400, allowedOrigin);
  }

  var name    = String(body && body.name    || "").trim();
  var email   = String(body && body.email   || "").trim();
  var subject = String(body && body.subject || "").trim();
  var message = String(body && body.message || "").trim();
  var token   = String(body && body["cf-turnstile-response"] || "").trim();

  if (!name || !email || !subject || !message) {
    return cors({ success: false, error: "Missing required fields.", code: "MISSING_FIELDS" }, 400, allowedOrigin);
  }

  // ---- S3: require turnstile token ----
  if (!token) {
    return cors({ success: false, error: "Anti-bot verification is required. Please complete the verification.", code: "NO_TOKEN" }, 400, allowedOrigin);
  }

  // ---- S4: verify turnstile ----
  var turnstileSecret = String(env.TURNSTILE_SECRET || "").trim();
  if (!turnstileSecret) {
    return cors({ success: false, error: "Server configuration error (TURNSTILE_SECRET).", code: "NO_TURNSTILE_SECRET" }, 500, allowedOrigin);
  }

  var turnstileRes, turnstileData;
  try {
    turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "secret=" + encodeURIComponent(turnstileSecret) + "&response=" + encodeURIComponent(token),
    });
    turnstileData = await turnstileRes.json();
  } catch (e) {
    return cors({ success: false, error: "Turnstile verification unavailable: " + (e && e.message ? e.message : "network error"), code: "TURNSTILE_FETCH_FAIL" }, 502, allowedOrigin);
  }

  if (!turnstileData || !turnstileData.success) {
    var codes = (turnstileData && turnstileData["error-codes"]) ? turnstileData["error-codes"].join(", ") : "unknown";
    return cors({ success: false, error: "Anti-bot verification failed (" + codes + "). Please refresh and try again.", code: "TURNSTILE_FAIL" }, 403, allowedOrigin);
  }

  // ---- S5: send email via Resend ----
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
        html: buildEmailHtml(name, email, subject, message),
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

  // ---- success ----
  return cors({ success: true, message: "Your inquiry has been sent. We'll reply within 24 hours." }, 200, allowedOrigin);
}

// ---- helpers ----

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

function buildEmailHtml(name, email, subject, message) {
  return "<!DOCTYPE html><html><body><h1>New Inquiry</h1>" +
    "<p><b>Name:</b> " + escapeHtml(name) + "</p>" +
    "<p><b>Email:</b> " + escapeHtml(email) + "</p>" +
    "<p><b>Subject:</b> " + escapeHtml(subject) + "</p>" +
    "<p><b>Message:</b> " + escapeHtml(message) + "</p>" +
    "</body></html>";
}

// ---- reject GET ----
export async function onRequestGet() {
  return json({ error: "Use POST" }, 405);
}

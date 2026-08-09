/**
 * DIAGNOSTIC — Minimal /api/contact to verify Functions deployment.
 * If this returns 200, the function routing is correct.
 * If this still returns 502, Functions are not being deployed/executed.
 *
 * STEP 1: Deploy this file. Then POST to /api/contact with:
 *   curl -X POST https://nixiafabric.com/api/contact \
 *     -H "Content-Type: application/json" \
 *     -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test"}'
 *
 * Expected: { "success": false, "error": "Anti-bot verification is required. ..." }
 *
 * If you still see 502 here, the issue is NOT in our code — it's in Cloudflare
 * Pages configuration. Check:
 *   1. Cloudflare Pages dashboard > your project > Settings > Functions >
 *      "Functions" is enabled
 *   2. "Compatibility date" is set to at least 2023-01-01
 *   3. Redeploy (not just git push — manually trigger a new deployment)
 */

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function onRequestPost(context) {
  const request = context && context.request ? context.request : null;
  const env = context && context.env ? context.env : {};

  const origin = request && request.headers ? (request.headers.get("Origin") || "") : "";
  const allowedOrigin = origin.startsWith("https://nixiafabric.com") ? origin : "https://nixiafabric.com";

  // S1: Return a raw 200 to prove the function is reachable at all
  const step = request && request.headers.get("X-Debug-Step");
  if (step === "ping") {
    return new Response(JSON.stringify({ ok: true, step: "ping", time: Date.now() }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": allowedOrigin,
      },
    });
  }

  if (request && request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: { "Access-Control-Allow-Origin": allowedOrigin, "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" },
    });
  }

  if (!request) {
    return new Response(JSON.stringify({ success: false, error: "Invalid request context." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // S2: Parse body
  let body;
  try { body = await request.json(); } catch (e) {
    return json({ success: false, error: "Invalid JSON body." }, 400);
  }

  const name = String(body && body.name || "").trim();
  const email = String(body && body.email || "").trim();
  const subject = String(body && body.subject || "").trim();
  const message = String(body && body.message || "").trim();
  const token = String(body && body["cf-turnstile-response"] || "").trim();

  if (!name || !email || !subject || !message) {
    return json({ success: false, error: "Missing required fields." }, 400);
  }

  // S3: Check Turnstile token exists
  if (!token) {
    return json({ success: false, error: "Anti-bot verification is required. Please complete the verification." }, 400);
  }

  // S4: Verify Turnstile
  const turnstileSecret = String(env.TURNSTILE_SECRET || "").trim();
  if (!turnstileSecret) {
    return json({ success: false, error: "Server configuration error. Please contact us at info@nixiafabric.com." }, 500);
  }

  try {
    const turnstileRes = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: "secret=" + encodeURIComponent(turnstileSecret) + "&response=" + encodeURIComponent(token),
    });
    const turnstileData = await turnstileRes.json();
    if (!turnstileData || !turnstileData.success) {
      return json({ success: false, error: "Anti-bot verification failed. Please refresh and try again." }, 403);
    }
  } catch (e) {
    return json({ success: false, error: "Verification service unavailable. Please try again." }, 502);
  }

  // S5: Send email via Resend
  const resendKey = String(env.RESEND_API_KEY || "").trim();
  const toEmail = String(env.MAIL_TO || "info@nixiafabric.com").trim();
  const fromEmail = String(env.MAIL_FROM || "no-reply@nixiafabric.com").trim();

  if (!resendKey) {
    return json({ success: false, error: "Email service not configured. Please contact us at info@nixiafabric.com." }, 500);
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
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

    const resendData = await res.json();
    if (!res.ok) {
      const detail = resendData && resendData.message ? resendData.message : ("HTTP " + res.status);
      return json({ success: false, error: "Email delivery failed: " + detail + ". Please contact us at info@nixiafabric.com." }, 502);
    }
  } catch (e) {
    return json({ success: false, error: "Email delivery unavailable. Please try again or contact us at info@nixiafabric.com." }, 502);
  }

  return json({ success: true, message: "Your inquiry has been sent. We'll reply within 24 hours." }, 200);
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status: status,
    headers: { "Content-Type": "application/json" },
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

export async function onRequestGet() {
  return new Response(JSON.stringify({ error: "Use POST" }), {
    status: 405,
    headers: { "Content-Type": "application/json" },
  });
}

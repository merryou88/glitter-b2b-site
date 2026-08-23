/**
 * ============================================================
 * Nixia Fabric — Inquiry Worker
 * ============================================================
 * Single Cloudflare Worker serving TWO inquiry routes:
 *   POST /api/inquiry/contact  → general contact form
 *   POST /api/inquiry/rfq      → fabric RFQ form
 *
 * Email delivery uses Cloudflare's native send_email binding
 * (env.EMAIL.send). No third-party email provider.
 *
 * Business logic (validation + email templates) is isolated in
 * pure functions so it can be ported to a self-hosted runtime
 * later without touching request/response payload shapes.
 * ============================================================
 */

export interface Env {
  /** Cloudflare native send_email binding */
  EMAIL: {
    send(message: EmailMessage): Promise<unknown>;
  };
  /** Turnstile secret (set via `wrangler secret put TURNSTILE_SECRET`) */
  TURNSTILE_SECRET: string;
  /** Recipient inbox for all inquiry notifications */
  RECIPIENT_EMAIL: string;
  /** Comma-separated allowed CORS origins */
  ALLOWED_ORIGINS?: string;
  /** Reserved: future Service Binding transport (self-host migration) */
  INQUIRY_API?: Fetcher;
}

export interface EmailMessage {
  from: string;
  to: string;
  subject: string;
  html?: string;
  text?: string;
  headers?: Record<string, string>;
}

/** Unified API response shape — kept fixed for frontend compatibility */
interface ApiResponse {
  success: boolean;
  message?: string;
}

/* ------------------------------------------------------------------
 * Business logic — pure, Cloudflare-runtime-independent.
 * Kept in one place so a self-hosted migration only swaps the
 * transport layer (the fetch handler) not these functions.
 * ------------------------------------------------------------------ */

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function notEmpty(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function validEmail(value: unknown): boolean {
  if (typeof value !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/** Shared HTML email shell */
function emailShell(bodyHtml: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Nixia Fabric Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#f4f5f7;font-family:Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:24px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:640px;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e4e7ec;">
          <tr>
            <td style="background:#16294d;padding:20px 28px;">
              <span style="color:#c4a035;font-size:14px;font-weight:700;letter-spacing:2px;">NIXIA FABRIC</span>
              <h2 style="color:#ffffff;margin:4px 0 0;font-size:18px;">New Inquiry Notification</h2>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px;border-top:1px solid #e4e7ec;color:#8a9098;font-size:12px;">
              Sent via nixiafabric.com inquiry form &middot; Nixia Fabric Co.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Simple key/value table for email body */
function kvTable(rows: Array<[string, unknown]>): string {
  const body = rows
    .map(([label, value]) => {
      const val = escapeHtml(value);
      return `<tr>
        <td style="padding:8px 12px;background:#f7f8fa;color:#5d6470;font-size:13px;font-weight:600;width:180px;border:1px solid #e4e7ec;">${label}</td>
        <td style="padding:8px 12px;color:#1a1f36;font-size:13px;border:1px solid #e4e7ec;">${val}</td>
      </tr>`;
    })
    .join("\n");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:20px;">${body}</table>`;
}

/** Contact form email template */
export function buildContactEmail(payload: Record<string, unknown>): EmailMessage {
  const rows: Array<[string, unknown]> = [
    ["Name", payload.name],
    ["Company", payload.company],
    ["Email", payload.email],
    ["Subject", payload.subject],
    ["Message", payload.message],
  ];
  return {
    from: "info@nixiafabric.com",
    to: "",
    subject: "New Contact Inquiry From NixiaFabric",
    html: emailShell(`
      <p style="margin:0 0 16px;color:#1a1f36;font-size:14px;">
        A new contact inquiry was submitted through the NixiaFabric website.
      </p>
      ${kvTable(rows)}
    `),
  };
}

/** RFQ form email template */
export function buildRfqEmail(payload: Record<string, unknown>): EmailMessage {
  const company = payload.company ? String(payload.company).trim() : "";
  const rows: Array<[string, unknown]> = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Company", company || "(not provided)"],
    ["Destination Country", payload.destinationCountry],
    ["Product SKU / Fabric Code", payload.productSku],
    ["Buyer Identity", payload.buyerIdentity],
    ["Estimated Quantity", payload.estimatedQuantity],
    ["Logo Artwork", payload.logoArtwork],
    ["Packaging", payload.packaging],
    ["Target Timeline", payload.targetTimeline],
    ["Message", payload.message],
  ];
  return {
    from: "info@nixiafabric.com",
    to: "",
    subject: "New RFQ Inquiry From NixiaFabric",
    html: emailShell(`
      <p style="margin:0 0 16px;color:#1a1f36;font-size:14px;">
        A new RFQ (Request for Quotation) was submitted through the NixiaFabric website.
      </p>
      ${kvTable(rows)}
    `),
  };
}

/* ------------------------------------------------------------------
 * Transport — Cloudflare runtime adapter.
 * This is the ONLY layer that talks to CF APIs (fetch, ctx, env.EMAIL).
 * Swapping to a self-hosted HTTP server only requires reimplementing
 * the handleRequest function below.
 * ------------------------------------------------------------------ */

function corsHeaders(origin: string): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function isAllowedOrigin(origin: string | null, env: Env): string | null {
  if (!origin) return null;
  const allowed = (env.ALLOWED_ORIGINS ?? "https://nixiafabric.com")
    .split(",")
    .map((o) => o.trim())
    .filter(Boolean);
  if (allowed.includes(origin)) return origin;
  return null;
}

/** Cloudflare Turnstile server-side verification */
async function verifyTurnstile(token: string, secret: string): Promise<boolean> {
  if (!token || !secret) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

/** Validate contact payload. Returns error string or null when valid. */
function validateContact(payload: Record<string, unknown>): string | null {
  if (!notEmpty(payload.name)) return "Name is required.";
  if (!notEmpty(payload.company)) return "Company is required.";
  if (!notEmpty(payload.email)) return "Email is required.";
  if (!validEmail(payload.email)) return "A valid email address is required.";
  if (!notEmpty(payload.subject)) return "Subject is required.";
  if (!notEmpty(payload.message)) return "Message is required.";
  return null;
}

/** Validate RFQ payload. Returns error string or null when valid. */
function validateRfq(payload: Record<string, unknown>): string | null {
  if (!notEmpty(payload.name)) return "Name is required.";
  if (!notEmpty(payload.email)) return "Email is required.";
  if (!validEmail(payload.email)) return "A valid email address is required.";
  if (!notEmpty(payload.message)) return "Message is required.";
  return null;
}

const ROUTE_CONTACT = "/api/contact";
const ROUTE_RFQ = "/api/rfq";

async function handleRequest(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url = new URL(request.url);
  const origin = isAllowedOrigin(request.headers.get("Origin"), env);

  // DEBUG: print route matching info
  console.log("实际pathname:", JSON.stringify(url.pathname));
  console.log("ROUTE_CONTACT值:", JSON.stringify(ROUTE_CONTACT));
  console.log("ROUTE_RFQ值:", JSON.stringify(ROUTE_RFQ));

  // CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: origin ? corsHeaders(origin) : { "Access-Control-Allow-Origin": "null" },
    });
  }

  if (request.method !== "POST") {
    return json(405, { success: false, message: "Method not allowed." }, origin);
  }

  // Reject cross-origin requests from non-allowed origins
  if (!origin && request.headers.get("Origin")) {
    return json(403, { success: false, message: "Origin not allowed." }, null);
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json(400, { success: false, message: "Invalid JSON payload." }, origin);
  }

  if (typeof payload !== "object" || payload === null || Array.isArray(payload)) {
    return json(400, { success: false, message: "Invalid payload." }, origin);
  }

  // Route dispatch
  let email: EmailMessage | null = null;
  let validationError: string | null = null;

  if (url.pathname === ROUTE_CONTACT) {
    validationError = validateContact(payload);
    if (!validationError) email = buildContactEmail(payload);
  } else if (url.pathname === ROUTE_RFQ) {
    if (!payload.company) payload.company = "";
    validationError = validateRfq(payload);
    if (!validationError) email = buildRfqEmail(payload);
  } else {
    return json(404, { success: false, message: "Route not found." }, origin);
  }

  if (validationError || !email) {
    return json(400, { success: false, message: validationError ?? "Invalid payload." }, origin);
  }

  // Turnstile verification — both Contact and RFQ forms
  const captchaToken = typeof payload["captcha"] === "string" ? payload["captcha"] : "";
  const turnstileOk = await verifyTurnstile(captchaToken, env.TURNSTILE_SECRET);
  if (!turnstileOk) {
    return json(403, { success: false, message: "Human verification failed. Please try again." }, origin);
  }

  // Finalize email recipient
  email.to = env.RECIPIENT_EMAIL || "info@nixiafabric.com";

  // Return response FIRST, then fire-and-forget email.
  // This guarantees the client always gets a JSON response quickly,
  // even if the email send hangs or fails.
  const successResponse = json(200, { success: true }, origin);

  ctx.waitUntil(
    (async () => {
      try {
        await sendEmailWithTimeout(env, email, 10_000);
      } catch (err) {
        console.error("[inquiry-worker] email send failed:", err);
      }
    })()
  );

  return successResponse;
}

/**
 * Email transport abstraction with timeout guard.
 * Prevents the Worker from hanging if EMAIL.send never resolves.
 */
async function sendEmailWithTimeout(env: Env, email: EmailMessage, ms: number): Promise<void> {
  const result = await Promise.race([
    env.EMAIL.send(email).then(() => "ok" as const),
    new Promise<"timeout">((resolve) => setTimeout(() => resolve("timeout"), ms)),
  ]);
  if (result === "timeout") {
    console.error("[inquiry-worker] email send timed out after", ms, "ms");
  }
}

/** Legacy wrapper — kept for Contact route compatibility */
async function sendEmail(env: Env, email: EmailMessage): Promise<void> {
  try {
    await env.EMAIL.send(email);
  } catch (err) {
    console.error("[inquiry-worker] email send failed:", err);
  }
}

function json(status: number, body: ApiResponse, origin: string | null): Response {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (origin) Object.assign(headers, corsHeaders(origin));
  return new Response(JSON.stringify(body), { status, headers });
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      return await handleRequest(request, env, ctx);
    } catch (err) {
      console.error("[inquiry-worker] unhandled error:", err);
      return json(500, { success: false, message: "Internal server error. Please try again later." }, null);
    }
  },
};

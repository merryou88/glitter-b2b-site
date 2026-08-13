import type { APIRoute } from "astro";

const RESEND_API_URL = "https://api.resend.com/emails";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json().catch(() => null);
    if (!data || typeof data !== "object") {
      return new Response(JSON.stringify({ success: false, error: "Invalid request." }), { status: 400 });
    }

    if (String((data as Record<string, unknown>).company_website || "").trim()) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    const fabricCode = String((data as Record<string, unknown>).fabricCode || "").trim();
    const application = String((data as Record<string, unknown>).application || "").trim();
    const quantityOrderType = String((data as Record<string, unknown>).quantityOrderType || "").trim();
    const colorBacking = String((data as Record<string, unknown>).colorBacking || "").trim();
    const additionalNotes = String((data as Record<string, unknown>).additionalNotes || "").trim();

    if (!fabricCode || !application || !quantityOrderType || !colorBacking || !additionalNotes) {
      return new Response(JSON.stringify({ success: false, error: "Please complete all required fields." }), { status: 400 });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    const fromEmail = import.meta.env.RFQ_FROM_EMAIL || "noreply@nixiafabric.com";
    const toEmail = import.meta.env.RFQ_TO_EMAIL;

    if (!apiKey || !toEmail) {
      return new Response(JSON.stringify({ success: false, error: "RFQ email configuration is missing." }), { status: 500 });
    }

    const body = {
      from: fromEmail,
      to: [toEmail],
      subject: `Fabric RFQ Request: ${fabricCode}`,
      text: [
        `Fabric / Material Code: ${fabricCode}`,
        `Target Application: ${application}`,
        `Quantity & Order Type: ${quantityOrderType}`,
        `Color & Backing Requirements: ${colorBacking}`,
        `Additional Notes: ${additionalNotes}`,
      ].join("\n"),
    };

    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const message = await response.text();
      return new Response(JSON.stringify({ success: false, error: message || "Failed to send RFQ." }), { status: 502 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Unable to submit RFQ right now." }), { status: 500 });
  }
};

# Nixia Fabric — Glitter B2B Site

China glitter / foil-printed synthetic leather manufacturer website built with **Astro 4** and deployed on **Cloudflare Pages**.

Contact & RFQ inquiry forms are powered by a **single Cloudflare Worker** (`rfq-worker/`) that sends emails using Cloudflare's **native `send_email` binding** — no third-party email provider (no Resend, no FormSubmit).

---

## Repository layout

```
glitter-b2b-site/
├─ rfq-worker/                 # Cloudflare Worker (contact + RFQ forms)
│  ├─ wrangler.toml
│  └─ src/index.ts
├─ functions/api/              # Legacy Pages Functions (kept, NOT used for new forms)
├─ src/
│  ├─ components/
│  │  ├─ ContactForm.astro     # Contact form → Worker /api/inquiry/contact
│  │  └─ RfqQuoteForm.astro    # RFQ form     → Worker /api/inquiry/rfq
│  └─ pages/
│     ├─ contact.astro         # Uses <ContactForm />
│     └─ thank-you.astro       # Success landing page
```

---

## Worker — routes

| Method | Route | Payload |
|--------|-------|---------|
| POST | `/api/inquiry/contact` | `name`, `company`, `email`, `subject`, `message`, `cf-turnstile-response` |
| POST | `/api/inquiry/rfq` | `company`, `destinationCountry`, `productSku`, `buyerIdentity`, `estimatedQuantity`, `logoArtwork`, `packaging`, `targetTimeline`, `message`, `cf-turnstile-response` |

Response format (fixed):
```json
{ "success": true }
{ "success": false, "message": "error text" }
```

## Worker — local development

```bash
cd rfq-worker
npm install
cp .dev.vars.example .dev.vars   # fill TURNSTILE_SECRET + RECIPIENT_EMAIL
wrangler dev                     # serves at http://localhost:8787
```

> Local `wrangler dev` **cannot** deliver real email through the `send_email` binding in all cases — real delivery happens in the deployed Worker. Use `wrangler dev --test-scheduled` / local emulation for routing, or deploy to test end-to-end.

## Worker — deployment

```bash
cd rfq-worker
wrangler secret put TURNSTILE_SECRET   # enter secret value
wrangler secret put RECIPIENT_EMAIL    # enter recipient inbox
wrangler deploy
```

**Important:** `git push` only triggers the Astro Pages build. The Worker must be deployed manually with `wrangler deploy` after any change. Worker source is committed for version control.

### Worker environment

Set in Cloudflare dashboard (or `.dev.vars` for local):

| Key | Description |
|-----|-------------|
| `TURNSTILE_SECRET` | Cloudflare Turnstile server-side secret |
| `RECIPIENT_EMAIL` | Inbox that receives all inquiry notifications (must be verified in Email Routing) |
| `ALLOWED_ORIGINS` | Comma-separated allowed CORS origins (default `https://nixiafabric.com`) |

The `[[send_email]]` binding named `EMAIL` in `wrangler.toml` delivers email natively.

### Reserved: Service Binding migration

The Worker code is structured so the transport layer is isolated (`sendEmail()` + `handleRequest()`). To later move from a public Worker URL to an internal service binding:

1. Expose this Worker under a service name in Cloudflare.
2. Add to the consumer's `wrangler.toml`:
   ```toml
   [services]
   api-service = { binding = "INQUIRY_API", service = "nixia-fabric-inquiry" }
   ```
3. Point the Astro `WORKER_URL` env var to the internal service route.

No business-logic changes are required — payloads and response shapes stay identical.

---

## Astro site — setup

```bash
npm install
cp .env.example .env            # local dev values
npm run dev
```

### Environment variables (Astro)

| Key | Dev value | Production value |
|-----|-----------|------------------|
| `WORKER_URL` | `http://localhost:8787` | your deployed Worker URL |
| `TURNSTILE_SITE_KEY` | Turnstile test key | real Turnstile site key |

Changing the backend endpoint only edits the env value — no component source changes needed.

**Build** (used by Cloudflare Pages):

```bash
cp .env.example .env.production
# edit .env.production with production values
npm run build
```

---

## Design system

- Deep navy `#16294d` + champagne gold `#c4a035`, muted warm accents only.
- Body text `line-height: 1.5–1.6`, short sentences for overseas readability.
- Click targets ≥ 44px desktop / ≥ 48px mobile.
- All product images served as WebP with lazy-loading for fast overseas access.
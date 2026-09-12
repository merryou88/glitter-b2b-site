# 需求路由表

| 业务模块 | 当前需求文档 | 需求编号 | 最近变更 | 相关代码 |
|---|---|---|---|---|
| 站点壳 / SEO | `current/site-shell.md` | `REQ-SHELL-001~008` | CHG-20260912-019-home-remove-applications | `src/layouts/Layout.astro`、`src/components/Header.astro`、`src/components/Footer.astro`、`src/components/HeroCarousel.astro`、`src/pages/index.astro` |
| 内容数据 | `current/content-data.md` | `REQ-DATA-001~003` | CHG-20260912-018-public-copy-alignment | `src/data/allProducts.js`、`src/data/blogArticles.js`、`src/data/products.json` |
| 产品目录 | `current/product-catalog.md` | `REQ-PRODUCT-001~013` | CHG-20260912-018-public-copy-alignment | `src/pages/products.astro`、`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro` |
| 博客知识中心 | `current/blog.md` | `REQ-BLOG-001~004` | CHG-20260912-018-public-copy-alignment | `src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`、`src/data/blogArticles.js` |
| 联系 / RFQ 表单 | `current/inquiry-forms.md` | `REQ-FORM-001~003` | 待确认 | `src/components/ContactForm.astro`、`src/components/RfqQuoteForm.astro`、`src/components/RFQQuoteModal.astro` |
| Cloudflare Worker | `current/cloudflare-worker.md` | `REQ-WORKER-001~004` | 待确认 | `rfq-worker/src/index.ts`、`rfq-worker/wrangler.toml` |
| 公司 / 政策页 | `current/company-pages.md` | `REQ-COMPANY-001~007` | CHG-20260912-018-public-copy-alignment | `src/pages/about.astro`、`src/pages/factory.astro`、`src/pages/certifications.astro`、`src/pages/sample-policy.astro`、`src/pages/privacy.astro`、`src/pages/thank-you.astro`、`src/pages/404.astro` |
| 旧 Resend 端点 | `current/legacy-resend-api.md` | `REQ-LEGACY-001~002` | 待确认 | `src/pages/api/rfq-submit.ts` |

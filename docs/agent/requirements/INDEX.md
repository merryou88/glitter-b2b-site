# 需求路由表

| 业务模块 | 当前需求文档 | 需求编号 | 最近变更 | 相关代码 |
|---|---|---|---|---|
| 站点壳 / SEO | `current/site-shell.md` | `REQ-SHELL-001~012` | CHG-20260920-001-us-search-baseline-seo-focus | `src/layouts/Layout.astro`、`src/components/Header.astro`、`src/components/Footer.astro`、`src/components/HeroCarousel.astro`、`src/pages/index.astro`、`src/pages/products.astro`、`src/pages/applications/index.astro`、`src/pages/applications/[slug].astro` |
| 内容数据 | `current/content-data.md` | `REQ-DATA-001~006` | CHG-20260920-002-h2013060104-product-detail | `src/data/allProducts.js`、`src/data/blogArticles.js`、`src/data/products.json`、`public/images/**`、`products-data/original-images/**`、`products-data/original-videos/**` |
| 产品目录 | `current/product-catalog.md` | `REQ-PRODUCT-001~027` | CHG-20260920-002-h2013060104-product-detail | `src/data/allProducts.js`、`src/pages/products.astro`、`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`、`src/components/ProductSchema.astro`、`workflows/next-product-candidate-plan.md` |
| 博客知识中心 | `current/blog.md` | `REQ-BLOG-001~007` | CHG-20260918-003-blog-content-seo-internal-links | `src/pages/blog/index.astro`、`src/pages/blog/[slug].astro`、`src/data/blogArticles.js` |
| 联系 / RFQ 表单 | `current/inquiry-forms.md` | `REQ-FORM-001~004` | CHG-20260916-008-contact-page-no-rfq-autoopen | `src/components/ContactForm.astro`、`src/components/RfqQuoteForm.astro`、`src/components/RFQQuoteModal.astro` |
| Cloudflare Worker | `current/cloudflare-worker.md` | `REQ-WORKER-001~004` | 待确认 | `rfq-worker/src/index.ts`、`rfq-worker/wrangler.toml` |
| 公司 / 政策页 | `current/company-pages.md` | `REQ-COMPANY-001~011` | CHG-20260919-003-factory-procurement-workflow | `src/pages/about.astro`、`src/pages/factory.astro`、`src/pages/certifications.astro`、`src/pages/sample-policy.astro`、`src/pages/privacy.astro`、`src/pages/thank-you.astro`、`src/pages/404.astro` |
| 旧 Resend 端点 | `current/legacy-resend-api.md` | `REQ-LEGACY-001~002` | 待确认 | `src/pages/api/rfq-submit.ts` |

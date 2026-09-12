# 架构

## 项目定位
Nixia Fabric 是一个面向 B2B 的静态站点，主站是 Astro，内容围绕产品目录、应用场景、工厂能力、博客知识和询盘表单展开。当前站点输出是静态站，部署目标是 Cloudflare Pages。

## 实际技术栈
- Astro `4.16.19`
- Vite `5.4.21`（由 Astro 依赖带入）
- `@astrojs/sitemap` `3.4.0`
- JavaScript + TypeScript 混用；页面/组件主要是 `.astro`，少量 `.ts` 端点和 `src/env.d.ts`
- 包管理器：npm（根目录和 `rfq-worker/` 都是 `package-lock.json`）
- Worker 侧：`wrangler` `3.114.17`，`@cloudflare/workers-types` `4.20260702.1`
- 当前仓库未发现 Tailwind 配置或 Tailwind 依赖

## 目录职责
- `src/pages/`：站点路由。首页、产品、博客、关于、工厂、认证、样品政策、隐私、感谢页、404、以及 `src/pages/api/rfq-submit.ts`
- `src/components/`：可复用 UI。`Header`、`Footer`、`HeroCarousel`、`ContactForm`、`RfqQuoteForm`、`RFQQuoteModal`、`ProductDetail`、`FloatingContact`、`CTAButton`
- `src/layouts/`：全站壳与 SEO 入口，当前只有 `Layout.astro`
- `src/data/`：静态业务数据。`allProducts.js`、`blogArticles.js`、`products.json`
- `src/styles/`：全局样式与设计 token。当前只有 `global.css`
- `public/`：静态资源、`_headers`、`_redirects`、`_routes.json`、图片、robots、sitemap 相关文件
- `rfq-worker/`：独立 Cloudflare Worker，处理联系与询盘邮件

## 页面与组件组织
`Layout.astro` 负责公共 `<head>`、结构化数据、`Header`、`Footer`、`RFQQuoteModal`、`FloatingContact` 和全局样式。
页面大多是静态 `.astro` 文件，少量页面通过 `getStaticPaths()` 生成动态静态页，如 `src/pages/products/[slug].astro` 和 `src/pages/blog/[slug].astro`。
列表页和详情页尽量共享同一份数据源，而不是在页面里复制内容。

## 浏览器端与 Worker 的边界
前端表单不直接发邮件。`ContactForm.astro` 和 `RfqQuoteForm.astro` 只负责收集字段并 `fetch()` 到 `WORKER_URL`。
真正的询盘处理在 `rfq-worker/src/index.ts`，包括校验、CORS、honeypot、邮件发送。
仓库里没有 `functions/` 目录；唯一的 API 源文件是 `src/pages/api/rfq-submit.ts`，它走 Resend，属于单独的旧端点。

## 构建与部署入口
- 开发：`npm run dev`
- 构建：`npm run build` = `astro build` + `npm run validate:products`
- 预览：`npm run preview`
- Worker 开发：`cd rfq-worker && npm run dev`
- Worker 部署：`cd rfq-worker && npm run deploy`

## 主要依赖关系
- `src/pages/index.astro` → `HeroCarousel`、`CTAButton`、`allProducts`
- `src/pages/products.astro` / `src/pages/products/[slug].astro` → `allProducts`、`ProductDetail`
- `src/pages/blog/**` → `blogArticles`、`allProducts`
- `src/pages/contact.astro` → `ContactForm`
- `RFQQuoteModal` → `RfqQuoteForm`、`allProducts`
- `rfq-worker` → Cloudflare `send_email` binding

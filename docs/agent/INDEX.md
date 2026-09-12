# 入口路由

| 任务关键词 | 必读文档 | 可能追加读取 | 需求文档 | 主要代码路径 |
|---|---|---|---|---|
| 新增/修改页面 | `architecture.md`、`modules/site-shell.md` | `modules/company-pages.md`、`modules/product-catalog.md`、`modules/blog-knowledge.md` | `requirements/current/site-shell.md`、相关业务页需求 | `src/pages/**` |
| Layout / Header / Footer | `modules/site-shell.md` | `workflows/page-rendering.md` | `requirements/current/site-shell.md` | `src/layouts/Layout.astro`、`src/components/Header.astro`、`src/components/Footer.astro` |
| Astro 组件 | `architecture.md`、`conventions.md` | 对应模块文档 | 对应 current 需求 | `src/components/**` |
| Tailwind / 全局样式 | `conventions.md`、`modules/site-shell.md` | `workflows/page-rendering.md` | `requirements/current/site-shell.md` | `src/styles/global.css` |
| 响应式问题 | `conventions.md`、相关模块文档 | `modules/site-shell.md`、`modules/product-catalog.md`、`modules/inquiry-forms.md` | 相关 current 需求 | 相关页面与组件 |
| 图片 / 静态资源 | `modules/content-data.md` | `modules/product-catalog.md`、`modules/blog-knowledge.md` | `requirements/current/content-data.md` | `public/**`、`src/data/**` |
| 联系表单 | `modules/inquiry-forms.md` | `workflows/contact-form-submit.md`、`workflows/worker-request-flow.md` | `requirements/current/inquiry-forms.md`、`requirements/current/cloudflare-worker.md` | `src/components/ContactForm.astro`、`src/pages/contact.astro` |
| Cloudflare Functions / Worker | `modules/cloudflare-worker.md` | `workflows/worker-request-flow.md` | `requirements/current/cloudflare-worker.md` | `rfq-worker/src/index.ts`、`rfq-worker/wrangler.toml` |
| Resend 邮件 | `modules/legacy-resend-api.md` | `workflows/legacy-resend-flow.md` | `requirements/current/legacy-resend-api.md` | `src/pages/api/rfq-submit.ts` |
| SEO / Meta / Schema | `modules/site-shell.md` | `workflows/seo-metadata.md` | `requirements/current/site-shell.md` | `src/layouts/Layout.astro`、相关页面 frontmatter |
| 构建 / 部署 | `architecture.md` | `workflows/build-deploy.md` | `requirements/current/content-data.md`、`requirements/current/cloudflare-worker.md` | `package.json`、`rfq-worker/package.json` |
| 测试 / 线上故障 | `conventions.md` | 相关 workflow 与模块文档 | 相关 current 需求 | 根目录脚本与目标代码 |
| 需求新增 / 需求变更 | `requirements/INDEX.md`、`requirements/CHANGE_TEMPLATE.md` | 对应模块文档 | 对应 current 需求 | 相关代码路径 |

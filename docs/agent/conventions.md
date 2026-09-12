# 约定

## Astro / JS / TS
- 页面放在 `src/pages/`，组件放在 `src/components/`
- 动态静态页用 `getStaticPaths()`，例如产品与博客详情
- `.astro` 文件里可写 TypeScript 前置脚本，但 `define:vars` 的 `<script>` 片段按纯 JavaScript 处理
- 当前代码以 JavaScript 数据文件为主，`src/env.d.ts` 只做环境类型声明

## 命名
- 组件文件使用 PascalCase：`Header.astro`、`RfqQuoteForm.astro`
- 页面路由使用小写和连字符：`about.astro`、`sample-policy.astro`
- 产品 slug、博客 slug 由数据文件控制，页面路径与数据 slug 必须一致

## 样式
- 当前仓库未配置 Tailwind；样式来自 `src/styles/global.css`、组件内 `<style>` 和少量页面内样式
- 全站设计 token 在 `src/styles/global.css`，包括颜色、字号、间距、圆角、层级和断点相关变量
- 响应式主要靠 CSS Grid/Flex、`picture`、媒体查询和固定容器宽度，而不是视口字体缩放

## 可访问性
- 已有 `skip-link`、`aria-label`、`aria-current`、`aria-expanded`、`aria-hidden`、`role="dialog"` 等用法
- 交互组件需要保留按钮语义、表单标签和错误提示区域
- 隐藏反垃圾字段用 honeypot，不要改成可见输入

## 环境变量与敏感信息
- 前端环境：`WORKER_URL`、`TURNSTILE_SITE_KEY`
- Worker 环境：`TURNSTILE_SECRET`、`RECIPIENT_EMAIL`、`ALLOWED_ORIGINS`
- Resend 旧端点：`RESEND_API_KEY`、`RFQ_FROM_EMAIL`、`RFQ_TO_EMAIL`
- 真实值不要写入仓库；示例只放在 `.env.example` 和 `rfq-worker/.dev.vars.example`

## 修改范围
- 改页面优先只动对应页面 + 直接依赖组件/数据文件
- 改产品/博客内容先改数据文件，再看页面是否需要跟进
- 改询盘流程时要同时检查前端表单、Worker、旧 Resend 端点是否仍应保留

## 验证
- 站点变更：`npm run build`
- 产品数据变更：`npm run validate:products`
- Worker 变更：`cd rfq-worker && npm run deploy:dry-run` 或 `wrangler dev`
- 仓库里未发现 `tests/` 或 `.github/workflows/`，所以当前没有可依赖的自动化测试入口

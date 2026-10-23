---
module: site-shell
paths:
  - src/layouts/Layout.astro
  - src/components/Header.astro
  - src/components/Footer.astro
  - src/components/FloatingContact.astro
  - src/components/RFQQuoteModal.astro
  - src/styles/global.css
  - scripts/validate-seo.mjs
triggers:
  - layout
  - header
  - footer
  - navigation
  - modal
  - canonical
  - schema
depends_on:
  - content-data
  - inquiry-forms
requirement_docs:
  - requirements/current/site-shell.md
---

# site-shell

## 职责
全站壳层。负责公共 head、Header、Footer、RFQ 弹窗、浮动联系入口、skip link 和全局样式 token。

## 不负责的范围
不负责产品/博客/表单业务内容本身，也不负责邮件发送或数据源维护。

## 代码入口
- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/FloatingContact.astro`
- `src/components/RFQQuoteModal.astro`
- `src/styles/global.css`

## 关键调用关系
- `Layout` 包住所有页面
- `Layout` 注入站点级 JSON-LD、canonical、robots 和预加载图片
- `Header` 依据 `Astro.url.pathname` 标记当前导航
- `RFQQuoteModal` 在全站挂载，内部再用 `RfqQuoteForm`

## 数据与状态
- `siteUrl` 固定为 `https://nixiafabric.com`
- 默认 `description`、`keywords`、`og:image`、`robots`
- 首页会预加载首屏 hero 图；生产构建通过 `scripts/inline-home-styles.mjs` 内联全部静态 HTML 本地样式。页头/页脚 Logo 和 favicon 由 Astro 生成适配尺寸。首页、应用/文章页和指定产品画廊使用匹配的响应式首图预加载；scripts/audit-performance.mjs 记录全站桌面分数，并严格区分线上站点与本地构建。Analytics 无交互时在 load 后等待至少 10 秒再调度。Layout 还通过事件委托为全站行动按钮发送 `cta_click`，并保留已有业务细分事件。
- 移动菜单和桌面菜单共享同一组路由语义

## 外部依赖
- `astro.config.mjs` 的 `site`、`trailingSlash` 和 `@astrojs/sitemap`
- 浏览器原生 DOM/CSS

## 修改约束
- 改 head 相关内容时同步检查所有页面的 `Layout` props
- 改导航时同时检查桌面与移动菜单
- 改全局 token 优先动 `src/styles/global.css`

## 验证方式
- `npm run build`
- `npm run validate:seo`
- 手动检查首页、产品页、博客页、联系页的头尾一致性

## 常见问题
- 重复 title 或漏掉 trailing slash
- 移动菜单与桌面菜单不一致
- 新页面忘记传 `structuredData`

## 性能检测边界
全站验收目标见 REQ-SHELL-032。Google 在线结果、本机 Lighthouse 检查线上地址、本机 Lighthouse 检查 dist 三者分开保存；429/超时明确保留。404 短恢复区不使用通用延迟渲染占位。

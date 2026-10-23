---
change_id: CHG-20261023-009-site-performance-audit
date: 2026-10-23
status: implemented
requirements:
  - REQ-SHELL-029
  - REQ-SHELL-032
  - REQ-PRODUCT-057
modules:
  - site-shell
  - product-catalog
  - blog-knowledge
  - company-pages
---

# 全站桌面性能检测与低分页优化

## 变更原因
用户要求使用 Google PageSpeed 检查全站，Performance 低于 93 分的页面均优化；所给报告明确指定 desktop。

## 变更前
59 个静态 HTML 仅 4 页内联 CSS。所有页头使用 278,596 字节的 512px PNG Logo。大部分产品缩略图仍加载完整主图，应用/文章首图没有响应式候选。404 短内容区沿用 720px 延迟渲染占位，引起可见页脚跳动。

## 变更后
- 全部静态 HTML 内联本地 Astro CSS。
- 页头/页脚使用 104/152px WebP，favicon 使用 48px PNG；原 Logo、品牌内容与 schema 保留。
- 首页桌面首图、应用/文章首图生成响应式 WebP，首图预加载与候选一致。
- 对 7 个低分产品新增响应式画廊和 160px 缩略图，保留此前 2 个产品的优化。
- 404 短内容区立即布局，避免不准确占位影响 CLS。
- 增加可续跑的逐页官方 Lighthouse 13.5.0 desktop 检测脚本，隔离安装工具依赖，不增加生产依赖。

## 验收条件
清单覆盖全部生成 HTML；每页有实测或明确失败状态；低分页优化后逐页复测，目标 ≥93。询盘、菜单、图片顺序、SEO、统计逻辑保留。线上 PageSpeed 验收须在发布和 Google 服务可用后完成。

## 影响范围与实现位置
`src/components/Header.astro`、`Footer.astro`、`HeroCarousel.astro`、`src/layouts/Layout.astro`、`src/pages/products/[slug].astro`、`applications/[slug].astro`、`blog/[slug].astro`、`404.astro`、`src/lib/responsive-image.ts`、`scripts/inline-home-styles.mjs`、`scripts/audit-performance.mjs`。

## 兼容性
保留手机首页独立图片、产品原始资产、OG/schema 图、轮播与图库交互。Google 统计和 RFQ 提交不改动；不封禁第三方请求来提高检测分数。

## 验证结果
构建、18 个产品数据、59 个 HTML、56 个 sitemap URL 和内部链接校验通过。线上站点本机 Lighthouse 基线 59 页：14 页低于 93，最低 66。Google 原报告已失效，新建报告后端返回 HTTP 429，API 请求超时；这些是检测服务限制，不能据此判断网站 DNS 故障。

逐页本地复测完成：59/59 页达到 94–100 分，无评分失败；404 修复后 CLS 为 0、100 分。390px/1350px 的九个图库共 18 组逐张切换、首页轮播、手机菜单、RFQ 开关、首屏图片和溢出/缺失资源检查通过，代表截图已检查。最终构建仅 404 HTML 相对首轮复测产物发生变化，已单独补测；`git diff --check` 通过。完整结果见 `docs/agent/audits/2026-10-23-performance-summary.md`。本地构建通过不代表 Google 线上评分通过；尚未提交或发布。

## 来源
用户提供的 PageSpeed desktop 报告链接与“每个页面低于93分都优化”的要求。

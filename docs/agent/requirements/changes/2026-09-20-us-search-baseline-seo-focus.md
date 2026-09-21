---
change_id: CHG-20260920-001-us-search-baseline-seo-focus
date: 2026-09-20
status: implemented
requirements:
  - REQ-SHELL-012
  - REQ-PRODUCT-005
modules:
  - site-shell
  - product-catalog
---

# 美国搜索基线后的 SEO 聚焦调整

## 变更原因
Google Search Console 最近 28 天美国数据只显示少量曝光，且查询仍偏历史 `glitter` / `leather` 方向；当前业务不再主推 glitter，需要让 Google 更清楚识别站点的 foil、holographic、iridescent、dancewear 和 performance costume 方向。

## 变更前
- `/products/` 已有 foil/performance 文案，但采购意图词不够集中。
- `/applications/` 以应用指南表达为主，对 performance costume 与 dancewear 的入口语义还可加强。
- `plain-iridescent-laser-spandex-4-way-stretch` 产品页使用 `Iridescent Laser Foil 4-Way Stretch Fabric`，未显式承接 `iridescent spandex fabric` 潜力词。

## 变更后
- `/products/` 标题、描述、H1 和首屏文案聚焦 `Foil Fabric Supplier for Dancewear & Performance Costumes`，并新增到 holographic、dancewear 和 sample/MOQ 页的采购型内链。
- `/applications/` 标题、描述、H1 和 schema 聚焦 `Performance Costume & Dancewear Fabric Applications`。
- `holographic-fabric-wholesale` 与 `dancewear-fabric-supplier` 应用页强化 wholesale、supplier、samples、MOQ 与 iridescent spandex 相关语义。
- `plain-iridescent-laser-spandex-4-way-stretch` 产品页标题和描述改为 `Iridescent Spandex Laser Foil 4-Way Stretch Fabric` 方向。

## 验收条件
- 相关页面不重新主推 glitter/leather。
- `/products/` 可见采购入口包含 holographic wholesale、dancewear supplier 和 samples/MOQ。
- H2013090102 产品页 meta title 与 H1 包含 `Iridescent Spandex`。
- 构建与产品数据校验通过。

## 影响范围
- 影响公开 SEO 文案、结构化数据文案和产品/应用页内部链接。
- 不影响产品事实、价格、报价流程、表单提交或外部平台状态。

## 兼容性
- 保持现有 URL、canonical、sitemap 路由和产品图片路径。
- 不提交 Google Search Console 操作；上线后再观察收录和查询变化。

## 实现位置
- `src/pages/products.astro`
- `src/pages/applications/index.astro`
- `src/pages/applications/[slug].astro`
- `src/data/allProducts.js`
- `docs/agent/requirements/current/site-shell.md`
- `docs/agent/requirements/current/product-catalog.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
- `npm run validate:products` 通过，8 个公开产品校验通过。
- `npm run build` 通过，生成 38 个静态页面并创建 sitemap。

## 来源
- 用户确认当前不再主推 glitter。
- Google Search Console 美国 28 天基线截图：查询仍偏旧方向，`iridescent lycra` 和 H2013090102 产品页接近当前方向。

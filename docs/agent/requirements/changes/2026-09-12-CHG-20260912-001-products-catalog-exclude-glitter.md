---
change_id: CHG-20260912-001-products-catalog-exclude-glitter
date: 2026-09-12
status: implemented
requirements:
  - REQ-PRODUCT-001
modules:
  - product-catalog
---

# Products Catalog Excludes Glitter Products

## 变更原因
产品列表页不再需要展示或推广 glitter 相关产品与内容。

## 变更前
`/products/` 从 `allProducts` 展示全部 8 个产品，包含带 `glitter` 标签的产品卡片、推荐排序、应用场景入口和 glitter 相关 SEO 文案。

## 变更后
`/products/` 过滤带 `glitter` 标签的产品，仅展示 4 个 foil、iridescent 和 stretch 产品。产品页的标题、描述、关键词、schema、推荐排序和应用场景入口不再将 glitter 作为目录内容。被排除产品的独立详情页和主数据保持不变。

## 验收条件
- `/products/` 只显示不带 `glitter` 标签的产品。
- 产品总数、筛选和排序基于目录可见产品。
- 页面不展示 glitter 产品卡片、glitter 应用入口或 glitter 目录文案。
- 被排除产品的详情页仍由静态路由生成。

## 影响范围
- `src/pages/products.astro`
- `docs/agent/requirements/current/product-catalog.md`
- `docs/agent/modules/product-catalog.md`
- `docs/agent/requirements/INDEX.md`

## 兼容性
不删除产品数据、产品图片或详情页路由；现有产品详情 URL 保持有效。

## 实现位置
`src/pages/products.astro` 使用 `catalogProducts` 从 `allProducts` 中排除带 `glitter` 标签的产品，并让目录页计数、卡片、筛选与排序使用过滤结果。

## 验证结果
`npm run build` 通过；构建流程内的 `npm run validate:products` 通过，检查 8 个产品。

## 来源
用户指令：products页面去掉跟glitter相关的产品及内容。

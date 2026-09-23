---
change_id: CHG-20260923-004-remove-product-schema
date: 2026-09-23
status: implemented
requirements:
  - REQ-PRODUCT-016
modules:
  - product-catalog
supersedes:
  - CHG-20260915-009-product-article-schema
---

# 询盘型产品页移除 Product 结构化数据

## 变更原因
产品页采用 B2B 询盘模式，没有公开价格、真实评价或聚合评分。即使不输出不完整的 `offers`，保留 `Product` 实体仍会让 Google 商品富媒体结果检测要求 `offers`、`review` 或 `aggregateRating`。

## 变更前
所有公开产品详情页通过公共组件输出 `WebPage`，并以 `mainEntity` 嵌套不含报价、评价或评分的 `Product` 实体。

## 变更后
- 从公共产品详情模板移除 `ProductSchema`。
- 删除不再使用的 `src/components/ProductSchema.astro`。
- 产品页继续保留 `FAQPage`、`BreadcrumbList`、canonical、Meta 和 Open Graph 数据。
- 不新增价格、库存、评价、评分或其他未经确认的商品字段。

## 验收条件
- 所有生成的公开产品详情页不包含 `Product`、`offers`、`review` 或 `aggregateRating` JSON-LD。
- 所有公开产品详情页继续包含 FAQ 与 Breadcrumb JSON-LD。
- 页面可见内容、产品数据、图片、组件样式和询盘流程不变。
- `npm run validate:products` 和 `npm run build` 通过。

## 实现位置
- `src/pages/products/[slug].astro`
- `src/components/ProductSchema.astro`（删除）

## 验证结果
- 2026-09-23：`npm run validate:products` 通过，11 个公开产品数据校验通过。
- 2026-09-23：`npm run build` 通过，共生成 41 个页面和 sitemap。
- 2026-09-23：逐页检查 11 个生成产品页，`Product`、`offers`、`review` 和 `aggregateRating` 均为 0；每页保留 1 个 `FAQPage` 和 1 个 `BreadcrumbList`。
- 2026-09-23：`git diff --check` 通过。

## 来源
用户 2026-09-23 要求从公共产品模板统一移除 Product schema。

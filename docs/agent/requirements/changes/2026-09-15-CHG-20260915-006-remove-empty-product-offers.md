---
change_id: CHG-20260915-006-remove-empty-product-offers
date: 2026-09-15
module: product-catalog
status: implemented
affects:
  - REQ-PRODUCT-002
---

# Remove Empty Product Offers

## 背景
产品详情页的公共 Product JSON-LD 组件输出了 `offers`，但其中 `price` 为空字符串。Google Search Console 将其识别为不完整的 Offer，并报告缺少有效价格。

## 变更前
- `src/components/ProductSchema.astro` 为所有产品输出 `Offer`。
- `Offer.price` 为空字符串，无法表示真实公开售价。

## 变更后
- 从公共 Product schema 中移除整个 `offers` 对象。
- 产品详情页继续输出 Product 的名称、图片和描述。
- 不添加虚构价格，也不添加没有真实依据的评分或评论。

## 验收条件
- 所有公开产品详情页的 Product JSON-LD 均不包含 `offers`。
- 页面不输出空价格字段。
- 页面文案、样式、产品数据和产品 UI 不变。

## 影响范围
- 代码路径：`src/components/ProductSchema.astro`、`src/pages/products/[slug].astro`
- 需求路径：`docs/agent/requirements/current/product-catalog.md`

## 验证
- 已执行：`npm run build`
- 结果：构建成功，产品数据校验通过；5 个公开产品详情页均保留 Product schema，且均不包含 `offers` 或空 `price`。

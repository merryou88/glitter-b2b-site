---
change_id: CHG-20260915-009-product-article-schema
date: 2026-09-15
status: superseded
requirements:
  - REQ-PRODUCT-016
modules:
  - product-catalog
---

# 产品页主结构化数据改为 Article

> 已由 `CHG-20260923-004-remove-product-schema` 取代。当前产品详情页不再输出 Product 实体。

## 变更原因
产品页采用 B2B 询盘模式，没有公开售价。原 Product JSON-LD 缺少 `offers`、`review` 或 `aggregateRating`，触发 GSC 严重报错。

## 变更前
产品详情页公共组件输出 `Product` JSON-LD，但没有完整的报价、评价或聚合评分数据。

## 变更后
产品详情页公共组件 `ProductSchema.astro` 输出 `Article` 主 schema，保留 `name`、`image` 和 `description`，并新增：

- `publisher`: `Organization`，名称为 `Nixia Fabric`
- `about`: 不含报价字段的 `Product` 实体，包含产品名称、绝对主图 URL 和产品描述

不新增 `offers`、`review` 或 `aggregateRating`。博客页现有 `Article` schema 不变。

## 验收条件
- 所有 `/products/` 详情页主产品 schema 类型为 `Article`。
- 产品页包含 `publisher` 和 `about.Product`。
- 产品页主 schema 不包含 `offers`、`review` 或 `aggregateRating`。
- 博客页 schema 不受影响。
- 页面可见内容、图片、Meta 和正文不变。

## 实现位置
`src/components/ProductSchema.astro`

## 验证结果
已执行 `npm run build`；待构建后抽查产品页和博客页 JSON-LD，确认结构与范围符合要求。

## 来源
用户 2026-09-15 需求。

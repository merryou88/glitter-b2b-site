---
change_id: CHG-20260921-002-procurement-display-rules
date: 2026-09-21
status: implemented
requirements:
  - REQ-PRODUCT-029
modules:
  - product-catalog
  - content-data
---

# 统一库存、交期与包装展示规则

## 变更原因
用户要求新增产品生成规则，统一处理库存待确认、无库存产品的样品准备时间、批量交期和包装内容。

## 变更前
- 待确认库存产品仍显示 `Availability to be confirmed`。
- 非现货产品的样品准备时间、批量交期和包装内容依赖各产品字段，存在 `To be confirmed` 或不同包装文案。

## 变更后
- `inStock !== true` 的产品统一显示 `Made to Order`。
- 非现货产品详情页统一显示样品准备时间 `3-5 working days`。
- 非现货产品详情页统一显示批量交期 `7-15 working days`。
- 所有产品详情页统一显示包装：`Roll packing with paper tube inside, plastic bag outside; can follow customer requirement`。
- 已确认现货产品继续使用各自已确认的现货交期；产品列表和应用页的待确认库存标签同步为 `Made to Order`。

## 验收条件
- 待确认库存产品的详情页、产品列表和应用页显示 `Made to Order`。
- 待确认库存产品的详情页交期卡、B2B Buying Information 和 B2B Specifications 均显示统一样品准备时间或批量交期。
- 公开产品详情页包装内容统一，且现货产品的现货交期不被改写。
- `npm run validate:products` 和 `npm run build` 通过。

## 影响范围
统一产品详情渲染、公开产品库存标签和采购字段展示。

## 实现位置
- `src/components/ProductDetail.astro`
- `src/data/allProducts.js`
- `src/pages/products.astro`

## 验证结果
- `npm run build` 通过，构建 40 个静态页面。
- `npm run validate:products` 通过，10 个公开产品校验成功。
- 抽查 H2013060102、H2013060104 和 H2013120102：显示 `Made to Order`、`3-5 working days`、`7-15 working days` 和统一包装内容，不再显示 `Availability to be confirmed`。
- 抽查现货 H2013060105：保留现货交期 `1-3 working days`，同时使用统一包装内容。
- `git diff --check` 通过；构建中的 `/api/rfq-submit` GET handler warning 为既有 Astro 路由警告。

## 来源
- 用户 2026-09-21 提出的产品生成规则。

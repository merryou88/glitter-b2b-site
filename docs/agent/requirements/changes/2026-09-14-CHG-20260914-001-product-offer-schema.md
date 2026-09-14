---
change_id: CHG-20260914-001-product-offer-schema
date: 2026-09-14
status: implemented
requirements:
  - REQ-PRODUCT-016
modules:
  - product-catalog
---

# 为产品详情页补充询价 Offer 结构化数据

## 变更原因
Google Search Console 报告产品结构化数据缺少 `offers`、`review` 或 `aggregateRating`。站点是 B2B 询价模式，没有固定公开售价。

## 变更前
产品详情页已有 Product JSON-LD，但没有 `offers`；Product schema 与页面路由逻辑耦合在动态页面文件中。

## 变更后
新增 `ProductSchema.astro` 组件，仅由产品详情页加载。组件输出 Product JSON-LD 和一个询价 Offer，价格保持为空字符串，不写入虚构价格；主图为空时不输出 schema。

## 验收条件
产品页包含一个 Product JSON-LD，含绝对主图 URL、canonical URL、英文描述、`offers`、`priceCurrency: USD`、`price: ""` 和固定的 InStock availability；博客页面不加载该组件。

## 影响范围
仅影响产品详情页 `<head>` 中的结构化数据，不改变可见页面、样式、GA4 或图片渲染。

## 实现位置
`src/components/ProductSchema.astro`
`src/pages/products/[slug].astro`

## 验证结果
`npm run build` 通过；已抽查生成产品页，确认仅有 1 个 Product JSON-LD，包含 `offers`、空价格、USD 币种、InStock availability 和绝对 URL；已抽查博客页，确认未加载 Product schema。

## 部署说明
Git 提交推送、Cloudflare Pages 生产部署和 Google Search Console 复测需要相应仓库、部署和 GSC 访问权限。

## 来源
用户要求修复 GSC 产品结构化数据缺少 Offer 的报错。

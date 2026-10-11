---
change_id: CHG-20261011-026-unified-product-lead-time
date: 2026-10-11
status: implemented
requirements:
  - REQ-PRODUCT-029
modules:
  - product-catalog
  - content-data
---

# Unified Product Lead Time Display

## 变更原因
用户要求所有产品详情页将旧的 `READY STOCK DISPATCH / 3-5 working days / Working Days After Confirmation` 批量交期展示统一为 `LEAD TIME / 7-15 days / production`。

## 变更前
产品详情页首屏交期卡会按库存状态显示 `READY STOCK DISPATCH`、`PRODUCTION LEAD TIME` 或产品特例；B2B Specifications 和自动 FAQ 也可能展示现货发货或不同批量交期。

## 变更后
- 首屏交期卡统一显示 `LEAD TIME`、`7-15 days`、`production`。
- B2B Specifications 统一显示 `Lead Time`、`7-15 days production`。
- 自动 FAQ 统一回答 `Production lead time is 7-15 days.`。
- 样品准备时间、库存状态、MOQ、产品 URL、包装和贸易条款不受本次变更影响。

## 验收条件
- 18 个公开产品详情页均输出统一交期文案。
- 产品详情页不再输出旧的三段批量交期文案。
- `npm run build`、`npm run validate:products` 和 `npm run validate:seo` 通过。

## 影响范围
`src/components/ProductDetail.astro`、`src/data/allProducts.js` 中的自动 FAQ 回退。

## 兼容性
不修改产品 URL、MOQ、样品政策、库存标签、贸易条款或原始产品规格字段。

## 实现位置
`ProductDetail.astro` 的首屏交期卡和 B2B Specifications；`allProducts.js` 的标准自动 FAQ lead time 回答。

## 验证结果
2026-10-11：`npm run build` 通过，生成 58 个静态页面；`npm run validate:products` 通过，18 个公开产品校验通过；`npm run validate:seo` 通过，检查 58 个 HTML 页面、55 个 sitemap URL 和站内链接。脚本扫描 18 个产品详情页，全部包含 `LEAD TIME`、`7-15 days`、`production`，且不再包含 `READY STOCK DISPATCH` 或 `Working Days After Confirmation`。

## 来源
用户 2026-10-11 关于统一产品交付周期文案的要求。

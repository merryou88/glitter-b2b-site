---
change_id: CHG-20261011-030-keep-b2b-lead-time
status: active
---

# B2B Specifications Table 仅保留 Lead Time 行

## 变更前

所有产品详情页的 `Specifications Table for B2B Buyers` 中同时渲染了 `LEAD TIME` 和 `Lead Time` 两个交期行。

## 变更后

从该表格中移除全大写的 `LEAD TIME` 行，保留 `Lead Time` 行。详情页顶部交期卡片、FAQ 和其他采购说明继续保留交期信息。

## 验收标准

- 所有公开产品详情页的 B2B Specifications Table 保留一行 `Lead Time`，不出现重复的 `LEAD TIME` 行。
- 其他页面交期展示保持不变。

## 影响与实现

- 影响模块：`product-catalog`
- 实现位置：`src/components/ProductDetail.astro`

## 验证结果

待运行 `npm run validate:products`、`npm run build`，并检查生成的产品详情页 HTML。

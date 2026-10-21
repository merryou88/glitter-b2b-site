---
change_id: CHG-20261011-033-unify-custom-project-moq-copy
status: superseded
superseded_by: CHG-20261021-007-sitewide-stock-custom-moq
---

# 统一 B2B 表格的 Custom projects MOQ 文案

## 变更前

产品详情页 B2B 表格的 MOQ 行会优先读取产品数据中的 `customProjectMoq`，导致部分产品显示具体的自定义项目 MOQ 数值。

## 变更后

所有产品详情页统一显示：

`Custom projects: MOQ to be confirmed based on customization requirements.`

标准产品 MOQ 数值保持不变。

## 验收标准

- 18 个公开产品详情页的 B2B 表格均使用统一 Custom projects MOQ 文案。
- 标准产品 MOQ 数值不发生变化。

## 影响与实现

- 影响模块：`product-catalog`
- 实现位置：`src/components/ProductDetail.astro`

## 验证结果

待运行 `npm run validate:products`、`npm run build`，并检查生成的产品详情页 HTML。

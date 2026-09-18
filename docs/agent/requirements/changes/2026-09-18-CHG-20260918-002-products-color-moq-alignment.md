---
change_id: CHG-20260918-002-products-color-moq-alignment
date: 2026-09-18
status: implemented
requirements:
  - REQ-PRODUCT-024
modules:
  - product-catalog
---

# 对齐产品卡片颜色数量与 MOQ

## 变更原因
产品卡片颜色数量使用两端分布布局，被推到卡片最右侧，与 MOQ 第二列的左边界不一致。

## 变更后
库存状态和颜色数量改用与核心规格一致的两列网格；颜色数量固定从第二列左边界开始，和 MOQ 对齐。

## 验收条件
Grid 和 List 视图中颜色数量与 MOQ 左边界对齐，库存状态位于第一列。

## 实现位置
`src/pages/products.astro`

## 验证结果
`npm run build` 通过；`git diff --check` 通过；产品校验通过，8 个公开产品已检查。

## 来源
用户反馈产品卡片颜色数量与 MOQ 列缩进不一致。

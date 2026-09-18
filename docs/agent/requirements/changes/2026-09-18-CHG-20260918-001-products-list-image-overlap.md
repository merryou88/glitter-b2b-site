---
change_id: CHG-20260918-001-products-list-image-overlap
date: 2026-09-18
status: implemented
requirements:
  - REQ-PRODUCT-023
modules:
  - product-catalog
---

# 修复产品列表 List 视图图片遮挡内容

## 变更原因
产品列表切换为 List 视图后，图片列受到图片内容的最小宽度影响，挤压并覆盖了右侧产品标题和正文。

## 变更前
List 视图的图片列和内容列没有明确的最小宽度约束，部分桌面宽度下图片覆盖右侧标题和规格内容。

## 变更后
List 视图使用 `minmax(180px, 220px)` 图片列和 `minmax(0, 1fr)` 内容列；图片链接、图片容器和内容主体设置 `min-width: 0`，并保持图片 1:1 展示。

## 验收条件
桌面 List 视图中图片只占左侧列，产品标题、规格、应用和 CTA 从右侧完整显示；Grid、平板和移动端布局不受影响。

## 影响范围
仅影响 `/products/` 的 List 视图布局。

## 实现位置
`src/pages/products.astro`

## 验证结果
`npm run build` 通过；`git diff --check` 通过；产品校验通过，8 个公开产品已检查。

## 来源
用户反馈 List 视图中产品图片遮挡标题和内容。

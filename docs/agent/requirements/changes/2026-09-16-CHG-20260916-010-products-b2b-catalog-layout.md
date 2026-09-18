---
change_id: CHG-20260916-010-products-b2b-catalog-layout
date: 2026-09-16
status: implemented
requirements:
  - REQ-PRODUCT-022
modules:
  - product-catalog
---

# 产品列表页升级为 B2B 采购型目录

## 变更原因
原产品列表页偏普通电商卡片，核心采购规格不够直接，不利于美国面料采购商快速比较宽幅、克重、底材、MOQ、颜色和应用场景。

## 变更前
产品列表页使用分类 chip、排序和图片卡片；卡片只显示简介、库存、MOQ 和交期。

## 变更后
产品列表页增加关键词搜索、Finish、Stretch、Application、Stock 筛选、Grid/List 视图切换和采购摘要；产品卡片直接展示 Width、Weight、Material、MOQ、库存状态、颜色数量和主要应用场景，CTA 调整为 `Request Sample / Quote`。

## 验收条件
搜索、筛选、排序和视图切换可正常联动；结果数量同步更新；Grid 视图图片继续 1:1 展示，List 视图支持更高密度规格比较；卡片规格全部来自现有产品数据，不新增价格或虚构规格；移动端布局可读可操作。

## 影响范围
仅影响 `/products/` 产品列表页布局与交互，不影响产品详情页、Blog、GA4 或图片渲染逻辑。

## 实现位置
`src/pages/products.astro`

## 验证结果
`npm run build` 通过；产品校验通过，8 个公开产品已检查；静态页面抽查确认搜索、Finish、Stretch、Application、Stock、Grid/List 和 `Request Sample / Quote` 均已生成；本地浏览器验证确认 List 视图可横向展开 8 个产品卡片，未发现溢出；随后修复桌面筛选工具栏换行造成的搜索框下沉和大面积空白问题。

## 来源
用户要求按照美国面料采购商习惯优化产品列表页。

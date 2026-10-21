---
change_id: CHG-20261021-012-desktop-hero-gap-remove-view-switch
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
  - REQ-PRODUCT-052
modules:
  - site-shell
  - product-catalog
---

# 桌面顶部间距及目录视图切换

用户要求桌面 Hero 顶部留白缩小，并删除 Grid/List 减少筛选栏与产品间隙。
桌面 Hero 顶部从 2rem 改为 1rem；移动端保持 0.75rem。删除视图按钮、catalog-summary 操作行及历史视图偏好逻辑，固定网格展示；清除筛选按钮移至桌面筛选栏。保留移动默认 Dancewear 和分类筛选、桌面搜索筛选排序。

实现：src/pages/products.astro。验收：全端不显示 Grid/List、无空操作行、桌面顶部缩小，筛选仍可用。
验证：npm run build 通过，18 产品及 59 页面 SEO/内链校验通过；移动默认、标签切换和取消、桌面初始筛选与断点切换模拟通过。源码无视图按钮、空操作容器或偏好读取。

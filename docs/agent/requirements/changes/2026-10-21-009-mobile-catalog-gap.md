---
change_id: CHG-20261021-009-mobile-catalog-gap
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 缩小移动端产品分类与首卡间空白

用户截图指出分类标签下方留白过大。原移动端隐藏 Grid/List 和 Clear filters 按钮，但 catalog-summary 仍继承 min-height:48px 并带上下 padding。

现在 ≤768px 隐藏整个 catalog-summary，移除该空占位；分类栏底部继续保留 0.75rem 间距。桌面操作组靠右及移动分类筛选逻辑不变。

实现：src/pages/products.astro 的移动媒体查询。验收：移动端分类栏后直接接产品网格，无空操作行；桌面继续显示 Grid/List。

验证：npm run build 通过（18 款产品、59 个 HTML 页面 SEO 与内链校验）；确认隐藏规则仅位于 ≤768px 媒体查询，构建产物包含对应样式。未进行真实设备视觉检查。

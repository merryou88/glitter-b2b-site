---
change_id: CHG-20261021-013-catalog-toolbar-flush-top
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 筛选框外边框贴齐顶部

用户要求电脑端筛选框与上方 Hero 无空隙。catalog 顶部 padding 从 1rem 改为 0，使筛选框外边框直接贴齐 Hero 底部。移动端仍由媒体查询保留标签栏顶部 space-sm，不更改标签布局。
实现：src/pages/products.astro。验收：桌面 Hero 与筛选框无垂直留白。
验证：npm run build 通过（18 产品、59 HTML 页面 SEO 与内链校验）；确认 catalog 顶部 padding=0，移动媒体查询仍保留原间距，源码无 Grid/List 或 catalog-summary 占位；分类筛选交互模拟通过。未进行真实浏览器视觉检查。

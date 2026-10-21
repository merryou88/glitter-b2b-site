---
change_id: CHG-20261021-011-mobile-catalog-hero-top-gap
date: 2026-10-21
status: implemented
requirements:
  - REQ-SHELL-017
modules:
  - site-shell
  - product-catalog
---

# 移动端目录 Hero 顶部留白

用户截图要求缩小导航栏与 Performance Fabric Catalog 之间的留白。
≤768px 的产品目录 Hero 顶部 padding 从 1.5rem 缩小为 0.75rem；底部 1rem 和桌面样式保持。实现位于 src/pages/products.astro 的移动媒体查询。
验收：移动端顶部留白减半，文案内容和分类筛选不变。
验证：npm run build 通过（18 产品、59 HTML 页面 SEO 和内链校验）。确认移动媒体查询顶部使用 space-sm（0.75rem），桌面规则未变；Dancewear 默认筛选交互模拟检查通过。未进行真实设备视觉检查。

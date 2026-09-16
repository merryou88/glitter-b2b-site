---
change_id: CHG-20260916-001-iridescent-gradient-detail-watermark
date: 2026-09-16
status: implemented
requirements:
  - REQ-DATA-004
modules:
  - content-data
  - product-catalog
---

# Iridescent Gradient 产品详情图水印修正

## 变更原因
`iridescent-gradient-laser-ice-silk` 的 Product Details 图片 WebP 未按当前水印规则添加域名水印。

## 变更后
从原始详情图重新生成：

- `public/images/products/iridescent-gradient-laser-ice-silk/detail/detail01.webp`
- `public/images/products/iridescent-gradient-laser-ice-silk/detail/detail02.webp`

每张 WebP 添加 3 个低透明度、逆时针 45 度倾斜 `nixiafabric.com` 域名水印。原始 JPG/PNG 详情图保持无水印且不修改；主图、Application 图和页面内容不变。

## 验收条件
- 详情图 WebP 有 3 个逆时针 45 度域名水印。
- 原始详情图不加水印。
- 页面引用路径不变。
- `npm run build` 和 `npm run validate:products` 通过。

## 实现位置
`public/images/products/iridescent-gradient-laser-ice-silk/detail/`

## 验证结果
已人工抽查 `detail01.webp`，确认水印可见且数量为 3；已执行 `npm run build` 和 `npm run validate:products`，均通过。

## 来源
用户 2026-09-16 需求。

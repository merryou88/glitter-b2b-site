---
change_id: CHG-20260916-007-archive-original-images
date: 2026-09-16
status: implemented
requirements:
  - REQ-DATA-005
modules:
  - content-data
  - product-catalog
  - site-shell
  - blog-knowledge
---

# 原图移出部署目录

## 变更原因
`public` 中同时存放 JPG/PNG 原图和 WebP 展示图，导致部署目录和 CDN 资源体积偏大。用户确认原图应归档到 `products-data`，线上优先保留 WebP。

## 变更前
大量已有 WebP 的 JPG/PNG 原图仍存放在 `public/images` 与 `public/shots`，站点数据和页面中仍有部分路径引用原图。

## 变更后
已有同名 WebP 的 JPG/PNG 原图移入 `products-data/original-images/`，并保留原 `public` 路径结构；站点数据、页面和组件路径改为 WebP。没有同名 WebP 的 JPG/PNG 暂不移动。

## 验收条件
- 线上部署目录不再包含已归档的 JPG/PNG 原图。
- 公开页面不引用已归档图片。
- 归档目录保留源文件路径结构。
- `npm run build` 和产品数据校验通过。

## 影响范围
图片资源、产品数据、博客数据、首页/应用页/公司页等静态图片引用。

## 兼容性
现代浏览器直接使用 WebP。若后续需要支持极旧浏览器，可从 `products-data/original-images/` 恢复指定 JPG/PNG fallback。

## 实现位置
- `public/images/**`
- `public/shots/**`
- `products-data/original-images/**`
- `src/data/allProducts.js`
- `src/data/blogArticles.js`
- `src/data/products.json`
- `src/pages/**`
- `src/components/**`

## 验证结果
`npm run build` 通过，`npm run validate:products` 通过。

## 来源
用户要求：原图比较大，统一放到 `products-data` 目录归档。

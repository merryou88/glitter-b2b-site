---
change_id: CHG-20260908-006-sparkle-renumber-and-webp
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-008
modules:
  - product-catalog
  - content-data
---

# Sparkle Image Renumbering and WebP Completion

## 变更原因
Sparkle 产品的 main、application、detail 图片文件名需要统一从 1 开始连续编号，并补齐缺失的 WebP 文件。

## 变更前
三个目录中的文件名混杂，部分图片缺少 WebP，对应的数据引用也不统一。

## 变更后
三个目录均改为连续编号文件名，所有图片都补齐 WebP，详情页继续按更新后的文件名渲染。

## 验收条件
- `main`、`application`、`detail` 目录文件名连续编号
- 每张 JPG 都有对应 WebP
- `npm run build` 通过
- `npm run validate:products` 通过

## 影响范围
仅影响 `sparkle-glitter-surface-solid-leather-fabric` 的图片资产与产品数据。

## 兼容性
不影响其他产品。

## 实现位置
`public/images/products/sparkle-glitter-surface-solid-leather-fabric/**`
`src/data/allProducts.js`
`src/components/ProductDetail.astro`

## 验证结果
待验证。

## 来源
用户要求把 Sparkle 产品的图片目录整理为连续编号，并补齐 WebP。

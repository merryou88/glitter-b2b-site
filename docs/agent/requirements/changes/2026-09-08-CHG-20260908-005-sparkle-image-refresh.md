---
change_id: CHG-20260908-005-sparkle-image-refresh
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-007
modules:
  - product-catalog
  - content-data
---

# Sparkle Image Refresh

## 变更原因
Sparkle Glitter Surface Solid Leather Fabric 的 detail 与 application 图片素材已更新，且 detail 第三张需要全宽展示。

## 变更前
detail 图片引用旧中文文件名；第三张 detail 图片仍受两列网格限制。

## 变更后
detail 图片引用新的 `1.jpg`、`2.jpg`、`3.jpg`；第三张 detail 图片跨满整行；application 图片继续从产品 `application/` 目录自动扫描新素材。

## 验收条件
- 新 detail 图片路径存在并可渲染
- detail 第三张图横向占满整行
- application 新图片自动显示
- `npm run build` 通过

## 影响范围
仅影响 `sparkle-glitter-surface-solid-leather-fabric` 的图片数据与 detail 展示样式。

## 兼容性
不影响其他产品。

## 实现位置
`src/data/allProducts.js`
`src/components/ProductDetail.astro`

## 验证结果
待验证。

## 来源
用户要求同步 Sparkle 产品新 detail/application 图片，并让 detail 第三张全宽展示。

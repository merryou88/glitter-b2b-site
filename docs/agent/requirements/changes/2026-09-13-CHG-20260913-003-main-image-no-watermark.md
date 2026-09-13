---
change_id: CHG-20260913-003-main-image-no-watermark
date: 2026-09-13
status: implemented
requirements:
  - REQ-DATA-004
modules:
  - content-data
  - product-catalog
supersedes: CHG-20260913-002-iridescent-domain-watermark
---

# 移除 Iridescent Ice-Silk 产品主图 1 水印

## 变更原因
主图 1 需要保持干净展示，避免水印影响首张产品视觉。

## 变更前
主图 1 右下角带有固定域名水印 `nixiafabric.com`。

## 变更后
主图 1 的 JPG 和 WebP 均恢复为无水印版本；主图 2–5 和详情图 1–6 的 45 度倾斜重复域名水印保持不变。

## 验收条件
主图 1 无水印；其他指定图片继续使用低透明度、45 度倾斜重复域名水印；文件名、尺寸和页面引用路径保持不变。

## 影响范围
仅影响 `iridescent-laser-hot-stamping-stretch-ice-silk` 的主图 1。

## 兼容性
未改变产品 slug、页面布局、图片尺寸或其他图片素材。

## 实现位置
`public/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.jpg`
`public/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/1.webp`

## 验证结果
`npm run validate:products` 通过；`npm run build` 通过；人工抽查主图 1，确认已恢复为无水印版本。

## 来源
用户要求移除该产品主图 1 水印。

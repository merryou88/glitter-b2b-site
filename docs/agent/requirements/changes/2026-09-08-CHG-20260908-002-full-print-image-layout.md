---
change_id: CHG-20260908-002-full-print-image-layout
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-004
modules:
  - product-catalog
---

# Full-Print Image Layout Update

## 变更原因
该产品的新 application 图与 detail 图需要按新的展示比例呈现。

## 变更前
application 区域按统一双列卡片展示；detail 图被固定为方形/裁切展示。

## 变更后
该产品的 application 第三张图跨满整行，detail 图以 100% 宽度按自然高度展示。

## 验收条件
- `full-print-hot-stamping-spandex-milk-silk` 的 application 第三图横向占满整行
- detail 图保持 100% 宽度并按原始比例显示
- `npm run build` 通过

## 影响范围
仅影响该产品详情页的图片展示样式。

## 兼容性
不影响其他产品详情页。

## 实现位置
`src/components/ProductDetail.astro`

## 验证结果
`npm run build` 通过，`npm run validate:products` 通过。

## 来源
用户要求更新该产品的 application 和 detail 图片展示方式。

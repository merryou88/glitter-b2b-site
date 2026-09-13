---
change_id: CHG-20260913-001-iridescent-ice-silk-watermark
date: 2026-09-13
status: superseded
superseded_by: CHG-20260913-002-iridescent-domain-watermark
requirements:
  - REQ-DATA-004
modules:
  - content-data
  - product-catalog
---

# 为 Iridescent Ice-Silk 产品图片添加品牌水印

## 变更原因
需要降低产品详情图被直接盗用的风险，同时保持客户查看面料纹理和表面效果的清晰度。

## 变更前
该产品主图和详情图没有品牌水印。

## 变更后
主图 1 使用右下角固定 Logo 水印；主图 2–5 和详情图 1–6 使用低透明度重复 Logo 水印。对应 JPG 与 WebP 文件均已同步更新。

## 验收条件
所有指定图片均包含水印，主图 1 的固定水印不遮挡主体；重复水印足以识别品牌且不影响面料细节查看；图片尺寸、文件名和产品数据引用路径保持不变。

## 影响范围
仅影响 `iridescent-laser-hot-stamping-stretch-ice-silk` 的主图和详情图展示素材。

## 兼容性
未改变产品 slug、图片文件名、图片尺寸、页面布局或其他产品素材。

## 实现位置
`public/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/`
`public/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/detail/`

## 验证结果
`npm run validate:products` 通过；`npm run build` 通过；人工抽查主图 1、主图 2 和详情图 1，水印样式符合要求且面料细节仍清晰。

## 来源
用户指定的水印处理规则。

## 替代说明
该 Logo 水印方案已被域名水印方案 `CHG-20260913-002-iridescent-domain-watermark` 替代。

---
change_id: CHG-20260913-002-iridescent-domain-watermark
date: 2026-09-13
status: superseded
superseded_by: CHG-20260913-003-main-image-no-watermark
requirements:
  - REQ-DATA-004
modules:
  - content-data
  - product-catalog
supersedes: CHG-20260913-001-iridescent-ice-silk-watermark
---

# 将 Iridescent Ice-Silk 产品水印替换为域名

## 变更原因
Logo 图标水印展示效果不够理想，需要改为更轻量、更直接的域名水印。

## 变更前
主图 1 使用右下角固定 Logo 水印；其他主图和详情图使用低透明度重复 Logo 水印。

## 变更后
主图 1 使用右下角固定域名水印 `nixiafabric.com`；主图 2–5 和详情图 1–6 使用低透明度、45 度倾斜重复域名水印。旧 Logo 水印已从干净底图重新生成后移除。

补充更新：主图 1 固定域名水印只保留文字，不添加蓝色背景色块。

## 验收条件
所有指定图片不再出现 Logo 图标水印；主图 1 保留固定域名文字水印且不带背景色块；主图 2–5 和详情图 1–6 保留 45 度倾斜重复域名水印；图片尺寸、文件名和产品数据引用路径保持不变。

## 影响范围
仅影响 `iridescent-laser-hot-stamping-stretch-ice-silk` 的主图和详情图展示素材。

## 兼容性
未改变产品 slug、图片文件名、图片尺寸、页面布局或其他产品素材。

## 实现位置
`public/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/main/`
`public/images/products/iridescent-laser-hot-stamping-stretch-ice-silk/detail/`

## 验证结果
`npm run validate:products` 通过；`npm run build` 通过；人工抽查主图 1、主图 2 和详情图 1，Logo 水印已移除，域名水印与 45 度重复淡化样式符合要求。

## 来源
用户要求去掉 Logo 水印，改为 `nixiafabric.com` 域名水印，并让重复淡化水印以 45 度倾斜展示。

## 替代说明
主图 1 的固定域名水印规则已被 `CHG-20260913-003-main-image-no-watermark` 替代；主图 2–5 和详情图 1–6 的 45 度倾斜重复域名水印仍保持有效。

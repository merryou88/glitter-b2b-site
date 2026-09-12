---
change_id: CHG-20260908-003-wholesale-badge-brand-style
date: 2026-09-08
status: implemented
requirements:
  - REQ-PRODUCT-005
modules:
  - product-catalog
---

# Wholesale Badge Brand Style Update

## 变更原因
重点产品轮播图角标需要与站点 logo 的深蓝白字品牌风格保持一致。

## 变更前
`WHOLESALE` 标签使用浅色底和蓝色文字。

## 变更后
`WHOLESALE` 标签改为深蓝渐变底、白色文字，并保留圆角品牌标签样式。

## 验收条件
- 该产品详情页轮播角标为深蓝底白字
- 视觉风格与站点 logo 一致
- `npm run build` 通过

## 影响范围
仅影响 `plain-iridescent-laser-spandex-4-way-stretch` 的轮播角标样式。

## 兼容性
不影响其他产品详情页。

## 实现位置
`src/components/ProductDetail.astro`

## 验证结果
待验证。

## 来源
用户要求调整轮播图 `WHOLESALE` 标签的品牌视觉风格。

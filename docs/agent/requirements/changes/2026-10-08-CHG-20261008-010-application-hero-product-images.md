---
change_id: CHG-20261008-010-application-hero-product-images
date: 2026-10-08
status: implemented
requirements:
  - REQ-SHELL-014
modules:
  - site-shell
  - product-catalog
---

# 舞蹈服与泳装应用页产品图

## 变更原因
舞蹈服和泳装应用页原 Hero 图与页面对应产品应用不够准确，需要使用能够直接展示对应终端应用的现有产品主图。

## 变更内容
- 舞蹈服应用页改用 H2013120101 的第一张主图。
- 泳装应用页改用 H2015030101 的第一张主图。
- `/applications/` 列表中的 Dancewear 和 Swimwear 卡片同步使用相同主图。
- 同步更新图片 alt，准确说明舞蹈服和泳装应用。

## 验收结果
- 两个详情页和应用列表卡片使用现有公开产品素材，不新增或修改图片文件。
- 页面 URL、H1、正文、产品关联和布局保持不变。

## 实现位置
- `src/pages/applications/[slug].astro`
- `src/pages/applications/index.astro`

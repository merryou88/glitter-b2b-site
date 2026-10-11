---
change_id: CHG-20261011-017-about-mobile-stats-grid
date: 2026-10-11
status: implemented
requirements:
  - REQ-COMPANY-014
modules:
  - company-pages
---

# About 移动端特性卡片双列展示

## 变更原因
About 页移动端四项特性数据单列排列，占用高度过大。

## 变更后
- 移动端 `.brand-story__card` 改为两列网格。
- 四项特性按每行两项显示。
- 缩小移动端卡片内边距、数字字号和标签字号。
- 桌面端布局保持不变。

## 验收条件
- 375px 和 768px 宽度下均为每行两项。
- `2013`、`4`、当前产品 SKU 数量和 `Custom` 完整可读。
- 桌面端保持原有布局和样式。

## 实现位置
- `src/pages/about.astro`

## 验证结果
待执行构建、产品校验和 SEO 校验。

change_id: CHG-20261011-003-home-mobile-popular-cards
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-018
modules:
  - site-shell
---

# 首页热销产品卡片移动端改为单列

## 变更原因
移动端首页热销产品卡片原本使用左右分栏，图片区域较窄，可能造成面料图片视觉变形或信息区域拥挤。

## 变更前
首页 Popular Products 卡片在移动端继续使用图片左、文字右的分栏布局，图片区域为约 32% 宽度和 1:1 比例。

## 变更后
仅在 `max-width: 768px` 下，首页 Popular Products 卡片改为图片在上、文字在下的单列布局。图片使用 100% 宽度、4:3 比例、`object-fit: cover` 和居中裁切；文字完整展示，桌面端样式保持不变。

## 验收条件
- 375px 和 768px 首页视口下，热销卡片图片位于文字上方并填满卡片宽度。
- 图片保持 4:3 比例，不出现拉伸压扁。
- 描述不被截断，MOQ 和 View Details 的样式与顺序保持不变。
- 桌面端仍为原有左右分栏布局。

## 影响范围
仅调整首页 Popular Products 的移动端样式。

## 实现位置
`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求只修改首页热销产品��片的移动端布局与图片展示。

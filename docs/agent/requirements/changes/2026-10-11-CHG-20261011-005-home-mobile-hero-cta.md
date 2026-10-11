change_id: CHG-20261011-005-home-mobile-hero-cta
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-020
modules:
  - site-shell
---

# 首页 Hero CTA 移动端自适应

## 变更原因
移动端 Hero CTA 容器使用整行宽度和拉伸对齐，导致按钮在手机端显示过大。

## 变更前
移动端 `.hero-carousel__actions` 使用 `align-items: stretch` 和 `width: 100%`，按钮被拉伸到整行宽度。

## 变更后
移动端 CTA 改为居中排列，按钮使用自适应宽度、最大宽度限制、响应式字号和可换行文本；桌面端样式保持不变。

## 验收条件
- 375px、390px 和 768px 宽度下，Hero CTA 不强制铺满整行。
- 按钮文案完整显示，不发生横向溢出。
- 按钮保持至少 44px 高度，便于触控。
- 桌面端 CTA 尺寸和布局不变。

## 影响范围
仅调整首页 Hero 的移动端 CTA 样式。

## 实现位置
`src/components/HeroCarousel.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求修复移动端首页 Hero CTA 过大的显示问题。

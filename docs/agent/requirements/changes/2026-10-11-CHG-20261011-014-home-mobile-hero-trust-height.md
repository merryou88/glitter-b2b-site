change_id: CHG-20261011-014-home-mobile-hero-trust-height
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-023
modules:
  - site-shell
---

# 首页 Hero 与特点区移动端高度优化

## 变更原因
移动端首页 Hero 下方四个特点的文字和区块高度占比仍然偏大，同时 Hero 高度略显不足。

## 变更前
移动端 Hero 高度使用 `clamp(280px, 62vw, 440px)`；特点区使用较大的字号、间距和默认上下内边距。

## 变更后
移动端 Hero 高度调整为 `clamp(300px, 68vw, 460px)`；特点区保持两列布局，并缩小上下内边距、网格间距、数值字号和说明字号。

## 验收条件
- 移动端 Hero 高度比原来略高。
- 四个特点仍按两列展示，整体高度更紧凑。
- 特点文字不溢出、不重叠。
- 桌面端布局和字号保持不变。

## 影响范围
仅调整首页 Hero 及其下方特点区块的移动端样式。

## 实现位置
`src/components/HeroCarousel.astro`、`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求缩小移动端特点描述并略微提高 Hero 高度。

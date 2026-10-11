change_id: CHG-20261011-016-home-mobile-hero-trust-ratio
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-024
modules:
  - site-shell
---

# 调整首页移动端 Hero 与特点区比例

## 变更原因
移动端 Hero 与其下方四个特点区块的高度比例不够协调。

## 变更前
移动端 Hero 高度使用 `clamp(300px, 68vw, 460px)`。

## 变更后
移动端 Hero 高度调整为 `clamp(400px, 90vw, 520px)`，特点区保持紧凑两列布局，使 Hero 高度达到特点区高度的约 3 倍以上。

## 验收条件
- 375px、390px 和 768px 视口下，Hero 与特点区比例协调。
- Hero 高度至少约为特点区高度的 3 倍。
- 桌面端 Hero 和特点布局保持不变。

## 影响范围
仅调整首页 Hero 移动端高度。

## 实现位置
`src/components/HeroCarousel.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求首页移动端 Hero 高度为下方四个特点区块高度的 3 倍以上。

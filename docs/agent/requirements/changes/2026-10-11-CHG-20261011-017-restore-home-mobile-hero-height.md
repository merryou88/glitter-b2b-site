change_id: CHG-20261011-017-restore-home-mobile-hero-height
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-025
  - REQ-SHELL-024
modules:
  - site-shell
---

# 恢复首页移动端 Hero 高度

## 变更原因
上一轮提高移动端 Hero 高度后，图片构图出现变形或异常裁切。

## 变更前
移动端 Hero 高度为 `clamp(400px, 90vw, 520px)`。

## 变更后
移动端 Hero 高度恢复为 `clamp(300px, 68vw, 460px)`；Hero 下方特点区的两列布局和紧凑字号保持不变。

## 验收条件
- 移动端 Hero 图片构图显示恢复正常。
- 375px、390px 和 768px 视口下不出现明显异常变形。
- 桌面端布局保持不变。

## 影响范围
仅回退首页移动端 Hero 高度，不改变其他移动端优化。

## 实现位置
`src/components/HeroCarousel.astro`

## 验证结果
待执行构建验证。

## 来源
用户要求将首页 Hero 高度改回去，以避免当前展示变形。

change_id: CHG-20261011-018-home-mobile-hero-full-width
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-026
modules:
  - site-shell
---

# 首页移动端 Hero 铺满屏幕宽度

## 变更原因
移动端首页 Hero 两侧保留了组件默认左右内边距，无法铺满手机屏幕。

## 变更前
Hero 外层容器继承 `var(--space-lg)` 左右内边距，移动端两侧出现留白。

## 变更后
移动端取消 Hero 外层左右内边距，并取消移动端圆角，使 Hero 图片边缘与手机视口对齐；桌面端保持原有容器和圆角。

## 验收条件
- 375px、390px 和 768px 移动端视口下，Hero 左右边缘铺满屏幕。
- 图片保持覆盖显示，不出现空白区域。
- 桌面端 Hero 宽度、内边距和圆角保持不变。

## 影响范围
仅调整首页 Hero 的移动端宽度展示。

## 实现位置
`src/components/HeroCarousel.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求移动端首页 Hero 宽度铺满全屏。

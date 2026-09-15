---
change_id: CHG-20260915-003-mobile-performance
date: 2026-09-15
status: implemented
requirements:
  - REQ-SHELL-010
modules:
  - site-shell
---

# 移动端性能优化

## 变更原因
手机端首屏渲染和滚动体验较差，需要降低初始化脚本与持续合成渲染成本。

## 变更前
Google Analytics 在 head 初始化脚本中立即创建第三方请求；移动端导航、轮播图片和轮播箭头使用模糊或图片滤镜；所有页面区块在首屏阶段参与布局和绘制。

## 变更后
Analytics 延后到页面 load 后的浏览器空闲期加载；移动端关闭导航与轮播的模糊/滤镜效果；非首屏区块启用浏览器原生 `content-visibility: auto` 跳过初始渲染工作。

## 验收条件
- 首屏移动端不等待 Analytics 脚本完成加载。
- 移动端导航、轮播仍可正常交互，桌面端视觉效果保持。
- `npm run build` 通过。

## 影响范围
仅影响站点壳、首页轮播和全局区块的渲染时机与合成效果，不改变页面内容、导航路径或表单请求。

## 兼容性
不支持 `content-visibility` 的浏览器按原有方式渲染；不支持 `requestIdleCallback` 的浏览器使用延时加载回退。

## 实现位置
- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/HeroCarousel.astro`
- `src/styles/global.css`

## 验证结果
`npm run build` 通过，产品校验通过。

## 来源
用户反馈：手机端性能较差。

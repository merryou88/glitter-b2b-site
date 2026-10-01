---
change_id: CHG-20261001-001-pagespeed-mobile-performance
date: 2026-10-01
status: implemented
requirements:
  - REQ-SHELL-010
  - REQ-DATA-005
modules:
  - site-shell
  - content-data
---

# PageSpeed 移动端首屏优化

## 变更原因
PageSpeed Insights 移动端报告显示性能 79 分，LCP 5.0 秒、Speed Index 4.0 秒；主要诊断为图片传送效率、未使用 JavaScript、缓存生命周期和首屏长任务。

## 变更前
首页产品卡片使用产品主图展示尺寸；Analytics 在页面加载后较早进入浏览器任务；首页首屏图片预加载没有声明响应式图片候选；嵌套图片路径的 Cloudflare 缓存规则不完整。

## 变更后
首页热门产品使用 640×360 专用 WebP 卡片图；首屏 hero 预加载补充 `imagesrcset` 和 `imagesizes`；Analytics 延后到用户首次交互或 10 秒后的空闲期；`/images/*` 与 `/shots/*` 增加长期缓存头。

## 验收条件
- 首页移动端首屏继续使用 `slide1-mobile.webp`。
- 首页产品卡片不再请求 1200px 主图。
- 构建、产品校验和静态图片引用检查通过。

## 验证结果
`npm run build` 通过，Astro 生成 48 个页面，产品校验通过（15 个公开产品）；首页生成结果已确认使用 6 个 `-card.webp` 产品卡片图，首屏 preload 包含响应式图片属性，且生成页面未发现缺失的本地图片引用。`git diff --check` 通过。

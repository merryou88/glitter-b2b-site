---
change_id: CHG-20260912-004-google-analytics-tag
date: 2026-09-12
status: implemented
requirements:
  - REQ-SHELL-008
modules:
  - site-shell
---

# 添加全站 Google Analytics 代码

## 变更原因
需要为网站所有页面安装 Google Analytics 4 跟踪代码。

## 变更前
站点没有统一加载 `G-VDYGZBSQ62` 的 Google tag。

## 变更后
在共享布局 `src/layouts/Layout.astro` 的 `<head>` 开标签后加载 Google tag。所有使用该布局的页面共享同一份代码，每个页面只注入一次。

## 验收条件
生成的每个公开页面包含一次 Google tag 脚本和一次 `gtag("config", "G-VDYGZBSQ62")` 配置，不存在页面级重复注入。

## 影响范围
仅增加站点访问统计代码，不改变页面内容、路由或表单行为。

## 兼容性
使用标准 `gtag.js` 异步加载方式，保持现有 Astro 静态构建。

## 实现位置
`src/layouts/Layout.astro`

## 验证结果
`npm run build` 通过；首页、产品列表页、产品详情页和博客页生成源码均包含一次 Google tag 脚本和一次配置调用。

## 来源
用户提供的 Google Analytics Measurement ID：`G-VDYGZBSQ62`。

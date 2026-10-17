---
change_id: CHG-20261017-001-mobile-loading-critical-path
date: 2026-10-17
status: implemented
requirements:
  - REQ-SHELL-029
modules:
  - site-shell
---

# 手机首页关键加载路径优化

## 变更前
用户截图手机 LCP 为 4.2 秒、FCP 为 1.6 秒、TBT 为 60ms、CLS 为 0。首页手机首图约 21KB，已有预加载。首页存在两个外部阻塞 CSS（未压缩共 71857 字节）。Analytics 的 requestIdleCallback timeout 不保证等待 10 秒，空闲时可能立即加载。一次本机线上请求 TTFB 为 2.526 秒，总时间 3.861 秒；此数值受本机网络影响，不能代替 Lighthouse 或用户区域测量。

## 变更后
仅首页构建时内联其本地 CSS，减少两次阻塞样式请求；其他页面保留原有缓存。Analytics 在 load 后先等待 10 秒，再进入空闲调度，首次交互仍可提前加载，事件队列和归因不变。未改变页面内容、轮播和布局。

## 验收与验证
构建、18 个公开产品校验、58 页 SEO/内部链接校验通过。检查首页无外部 stylesheet，首图预加载保留，其他页面仍使用外部 CSS；统计调度检查覆盖 load 延迟和首次交互。未部署，未取得优化后的线上 Lighthouse 数值。

## 实现位置
`src/layouts/Layout.astro`、`scripts/inline-home-styles.mjs`、`package.json`。

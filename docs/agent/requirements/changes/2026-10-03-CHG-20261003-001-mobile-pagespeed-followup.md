---
change_id: CHG-20261003-001-mobile-pagespeed-followup
date: 2026-10-03
status: implemented
requirements:
  - REQ-SHELL-010
  - REQ-DATA-005
modules:
  - site-shell
  - content-data
---

# PageSpeed 移动端性能复查优化

## 变更原因
部署后手机端 PageSpeed 仍未明显改善，需要继续压缩首屏资源、降低手机端初始解析成本，并排查线上首页响应慢的问题。

## 变更前
Analytics 内联脚本位于 `<head>` 前部，浏览器需要先执行脚本再发现 CSS 与首屏图片 preload；首页同时输出全站 RFQ 弹窗 HTML 与脚本；手机端轮播会在检测窗口内自动切换并加载后续轮播图片；首屏移动端 hero 图为 960px、约 60KB。

## 变更后
Analytics 延后到页面底部初始化；首页不再输出全站 RFQ 弹窗，首屏 CTA 直接跳转到首页内询盘区；手机端关闭自动轮播，仅保留手动切换；移动端 hero 图压缩为 720px WebP，首张约 21KB；首页 HTML 增加短期 CDN 重验证缓存提示。

## 验收条件
- 手机端首屏 preload 继续指向 `slide1-mobile.webp`，并标注真实 720w 候选。
- 手机端不会自动加载后续轮播图。
- 首页不输出 RFQ 弹窗容器，但首页询盘表单仍可提交。
- 构建、产品校验和本地图片引用检查通过。

## 验证结果
`npm run build` 通过，Astro 生成 48 个页面，产品校验通过（15 个公开产品）。首页 HTML 从约 93KB 降至约 68KB；`slide1-mobile.webp` 从约 60KB 降至约 21KB；本地生成页面 267 个图片引用检查通过。

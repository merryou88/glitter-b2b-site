# 全站性能检查记录 — 2026-10-23

## 结果与边界

- 覆盖：59 个生成 HTML（56 个 sitemap URL，加 privacy、thank-you、404 文档），均已实际检测，无评分失败。
- 线上现状：本机运行官方 Lighthouse 13.5.0 检测线上地址，14 页低于 93；范围 66–98。
- 优化后本地生产构建：59/59 页 ≥93，范围 94–100。
- **线上现状与本地构建不是受控前后对照**：托管网络、Cloudflare 注入和服务延迟不同；本地通过不等于线上 PageSpeed 已达标。未提交、未发布，线上 Google 验收仍待完成。
- 用户提供的 Google PageSpeed 报告 ID `nkqj6qkvw0` 已失效；重新提交时 Google 后端返回 HTTP 429，官方 API 请求超时。没有获得新的 Google 托管分数，Google 检测清单明确保存为 blocked，不填入 Lighthouse 替代分数。
- `/404.html` 在线上重定向到 `/404`，直接文档返回 HTTP 200，因此其可评分；这不代表任意不存在 URL 的 HTTP 状态测试。

## 检测环境

官方 Lighthouse 13.5.0，Chrome 155，desktop 预设：1350×940、DPR 1、模拟 RTT 40ms、下载 10240Kbps、CPU 1×，顺序运行并默认清理缓存。未屏蔽或跳过第三方资源。本地服务 gzip 压缩 HTML/CSS/JS；线上额外 Cloudflare 注入与跨区域网络不在本地模拟范围。每页时间、指标、环境及诊断见 JSON。

## 已实施优化

- 全部 HTML 内联本地 Astro CSS，减少首次访问的样式请求往返。
- 导航 Logo 从 278,596 字节 PNG 改为 3,382 字节 WebP，减少约 98.8%；页脚使用 5,620 字节 WebP，favicon 为 48px PNG。保留原品牌资产和 schema Logo。
- 首页桌面首图、应用和文章首图使用响应式 WebP，预加载候选与实际图片一致；手机首页专用首图保留。
- 7 个低分产品新增响应式画廊和 160px 缩略图；保留此前 2 个已优化产品的流程，总计 9 个。
- 修复 404 短内容区不准确的 720px 延迟渲染占位。首次本地检测 CLS 0.198 / 90 分；修复后结果见该页当前记录，保留前次检测历史。

## 全部页面分数

下表左列为优化前线上地址的本机 Lighthouse 结果；右列为优化后本地生产构建结果，**均不是 Google PageSpeed 在线报告分数**。

| 页面 | 线上地址，本机检测 | 优化后本地构建 | 线上基线低于 93 |
|---|---:|---:|---|
| `/` | 90 | 100 | 是 |
| `/404.html` | 82 | 100 | 是 |
| `/about/` | 96 | 100 |  |
| `/applications/` | 94 | 100 |  |
| `/applications/cheerleading-performance-costume-fabric/` | 96 | 100 |  |
| `/applications/custom-foil-fabric-development/` | 92 | 100 | 是 |
| `/applications/dancewear-fabric-supplier/` | 95 | 99 |  |
| `/applications/foil-fabric-for-stage-costumes/` | 93 | 100 |  |
| `/applications/holographic-fabric-wholesale/` | 91 | 100 | 是 |
| `/applications/swimwear-fabric-supplier/` | 95 | 100 |  |
| `/blog/` | 95 | 98 |  |
| `/blog/best-fabric-for-cheerleading-and-performance-costumes/` | 94 | 99 |  |
| `/blog/best-foil-fabric-for-swimwear-and-bikinis/` | 92 | 100 | 是 |
| `/blog/china-foil-fabric-supplier-us-buyers-rfq-checklist/` | 96 | 99 |  |
| `/blog/compare-foil-fabric-samples-from-different-suppliers/` | 92 | 100 | 是 |
| `/blog/custom-foil-fabric-development-stock-vs-custom/` | 92 | 99 | 是 |
| `/blog/evaluate-foil-adhesion-before-bulk-production/` | 96 | 100 |  |
| `/blog/fabric-gsm-vs-ounces-buyer-conversion-guide/` | 94 | 100 |  |
| `/blog/holographic-fabric-for-dancewear-what-buyers-should-check/` | 96 | 99 |  |
| `/blog/hot-stamping-foil-finish-guide/` | 96 | 100 |  |
| `/blog/how-to-calculate-fabric-moq-yards-meters/` | 95 | 100 |  |
| `/blog/how-to-choose-4-way-stretch-fabric-for-bodysuits/` | 96 | 100 |  |
| `/blog/how-to-choose-fabric-for-swim-caps/` | 95 | 100 |  |
| `/blog/how-to-choose-hot-stamping-spandex-fabric-for-dancewear-stage-costumes/` | 96 | 100 |  |
| `/blog/how-to-request-fabric-sample-from-china-supplier/` | 96 | 99 |  |
| `/blog/iridescent-vs-metallic-fabric-for-stage-costumes/` | 97 | 99 |  |
| `/blog/metallic-vs-iridescent-vs-holographic-fabric/` | 95 | 100 |  |
| `/blog/nylon-spandex-vs-polyester-spandex-foil-fabric/` | 94 | 100 |  |
| `/blog/pre-shipment-quality-control-checklist-foil-stretch-fabric/` | 95 | 100 |  |
| `/blog/sgs-reach-compliance-guide/` | 96 | 99 |  |
| `/blog/stretch-recovery-vs-stretch-amount-fabric-buyers/` | 98 | 100 |  |
| `/blog/what-is-foil-fabric-wholesale-buyer-guide/` | 95 | 100 |  |
| `/blog/what-to-include-in-a-custom-fabric-rfq/` | 95 | 100 |  |
| `/blog/wholesale-foil-fabric-supplier-dancewear-stage-costumes/` | 96 | 100 |  |
| `/certifications/` | 95 | 100 |  |
| `/contact/` | 95 | 100 |  |
| `/factory/` | 96 | 100 |  |
| `/privacy/` | 94 | 100 |  |
| `/products/` | 95 | 98 |  |
| `/products/blue-purple-gradient-laser-foil-spandex-fabric/` | 95 | 98 |  |
| `/products/dense-dot-foil-suede-look-fabric/` | 95 | 99 |  |
| `/products/double-layer-pleated-foil-knit-fabric/` | 95 | 94 |  |
| `/products/full-print-hot-stamping-spandex-milk-silk/` | 96 | 99 |  |
| `/products/gold-rainbow-gradient-metallic-foil-4-way-stretch-fabric/` | 94 | 97 |  |
| `/products/gradient-rainbow-dot-foil-knit-fabric/` | 95 | 94 |  |
| `/products/holographic-mermaid-scale-milk-silk-stretch-fabric/` | 81 | 100 | 是 |
| `/products/holographic-snakeskin-stretch-fabric/` | 92 | 100 | 是 |
| `/products/iridescent-gradient-laser-ice-silk/` | 81 | 99 | 是 |
| `/products/iridescent-laser-hot-stamping-stretch-ice-silk/` | 97 | 100 |  |
| `/products/iridescent-mystic-metallic-foil-nylon-spandex-fabric/` | 95 | 95 |  |
| `/products/plain-iridescent-laser-spandex-4-way-stretch/` | 91 | 100 | 是 |
| `/products/rainbow-dot-laser-foil-knit-fabric/` | 85 | 100 | 是 |
| `/products/rainbow-fingerprint-dot-foil-ice-silk-fabric/` | 93 | 96 |  |
| `/products/rainbow-iridescent-laser-foil-nylon-spandex-fabric/` | 95 | 100 |  |
| `/products/rainbow-stripe-foil-4-way-stretch-fabric/` | 88 | 100 | 是 |
| `/products/shattered-glass-metallic-foil-dot-4-way-stretch-nylon-spandex-fabric/` | 66 | 100 | 是 |
| `/products/shiny-foil-4-way-stretch-knit-fabric/` | 94 | 100 |  |
| `/sample-policy/` | 96 | 100 |  |
| `/thank-you/` | 96 | 100 |  |

## 验证

- `npm run build`、18 个产品数据校验、59 个 HTML/56 个 sitemap URL/内部链接 SEO 校验通过；`git diff --check` 通过。
- 390px 与 1350px：九个产品画廊逐张切换并回到首图；首页轮播前后切换；手机菜单；RFQ 弹窗开关；应用/文章响应式首图；横向溢出和本地缺失资源检查。未向真实询盘接口提交测试数据。
- 代表页面截图已检查；全站性能用逐页实测核对，交互回归不等于每页全功能自动测试。

## 复测与待办

工具使用方法见 `docs/agent/workflows/build-deploy.md`；支持 live/local、指定路由、断点续跑和强制重测（保留前次记录）。
1. 用户发布本次代码后，Google 服务恢复时，通过 PageSpeed 按 desktop 对全部页面补验。
2. 若线上仍有低于 93 的页面，按对应在线报告继续处理；尤其关注 CDN/源站延迟和 Cloudflare 注入脚本，本地结果无法验收这些因素。
3. 用户先前关心的手机体验需用单独的 mobile 口径验收；本次分数按用户所给 desktop 报告执行。

记录：`2026-10-23-pagespeed-desktop.json`（Google 状态）、`2026-10-23-lighthouse-desktop-live.json`（线上现状）、`2026-10-23-lighthouse-desktop-local.json`（优化后本地）。

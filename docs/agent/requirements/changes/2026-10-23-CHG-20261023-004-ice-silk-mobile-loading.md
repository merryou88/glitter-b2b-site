---
change_id: CHG-20261023-004-ice-silk-mobile-loading
date: 2026-10-23
status: implemented
requirements:
  - REQ-PRODUCT-055
  - REQ-SHELL-029
modules:
  - product-catalog
  - site-shell
---

# H2013120107 产品详情页移动端加载优化

## 变更原因
用户反馈 `/products/iridescent-laser-hot-stamping-stretch-ice-silk/` 移动端打开非常慢，要求优化。

## 变更前
首图为 1600px WebP、284,540 字节。五个缩略图直接引用 1200–1600px 原图，浏览器在首屏附近同时加载五张图，共 1,687,002 字节。页面含两个阻塞样式请求；隐藏视频 poster 也引用首张原图。图库图片切换末尾调用不存在的 `HTMLImageElement.load()`，导致点击时页面脚本报错。

## 变更后
- 仅该产品使用 Astro 构建期生成画廊响应式主图（480/720/1080/1440px，最大不超过源图宽度，质量 76）和 160px 缩略图（质量 70）。路由将可选 `optimizedGallery` 传入共享详情组件。
- 画廊 source 使用 `srcset/sizes`，head 预加载同一响应式候选，保留 eager/high；移除该页旧原图预加载。
- 缩略图使用小图，隐藏视频 poster 复用第一张缩略图，继续 `preload="none"`。
- 图片切换同步响应式 source 和 sizes，移除无效 `load()` 调用；其他产品继续切换原图。
- 扩展既有样式后处理脚本，为该详情页内联本地 CSS，减少两次阻塞样式请求。

## 验收条件
五张图库图及视频入口可正常切换并返回首图；初次加载不下载完整画廊原图、不主动加载 MP4；首图无重复下载；响应式候选与实际输出尺寸一致；手机及桌面无横向溢出；quote/sample 弹窗可用；其他产品图库回归正常。

## 影响范围
`src/pages/products/[slug].astro`、`src/components/ProductDetail.astro`、`scripts/inline-home-styles.mjs`。

## 兼容性
不改产品数据、规格、文案、图片顺序、SEO、详情图、RFQ 提交及统计逻辑。源图片文件不覆盖；其他产品未启用图片优化，仍使用原路径。保留当前工作区中其他任务的表单及统计变更。

## 验证结果
- `npm run build` 通过；18 个产品、59 个 HTML 页面、56 个 sitemap URL 及内部链接校验通过。
- 实际浏览器检查 375/390/768/1024/1440px：无横向溢出；五张图片、视频显示/返回、quote/sample 弹窗及关闭均正常，无页面 JavaScript 错误。
- 另检查 `iridescent-gradient-laser-ice-silk` 的图片切换，原图路径与交互正常。
- 静态产物检查：首图预加载匹配 `source` 的候选，目录/首页原内联保留，该详情页无外部 stylesheet；首图 480/720/1080/1440px 输出分别为 20,388/44,338/89,704/139,910 字节，五张 160px 缩略图合计 18,624 字节。
- 本机同源服务重放修改前产物与优化产物，390×844、DPR 2、150ms 延迟、200,000 B/s 下行、CPU 4 倍节流、禁用缓存，各三次：LCP 中位数 7764ms → 900ms（约减少 88%），FCP 中位数 544ms → 332ms；初次图片合计 1,687,002 → 62,962 字节（约减少 96%）。首图由 284,540 → 44,338 字节，初始请求中无原图、无重复首图、无 MP4、本地资源无 404；两版画廊顶部均约 166.8px。
- `git diff --check` 通过。尚未提交或部署；以上为本机模拟，发布后需在实际目标地区手机网络复测，不能作为线上 Lighthouse 分数。

## 来源
用户当前对该详情页移动端速度的反馈。

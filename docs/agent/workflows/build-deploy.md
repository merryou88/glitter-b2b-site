# 构建和部署流程

## 触发入口
本地发布、Cloudflare Pages 构建、Worker 发布。

## 调用顺序
1. 根目录 `npm run build`。
2. Astro 输出静态站点。
3. `scripts/inline-home-styles.mjs` 内联全部静态 HTML 的本地 CSS；目录图、首页桌面首图、应用/文章首图和指定九个产品画廊由 Astro 构建期生成响应式 WebP，图库同时生成缩略图。
4. `npm run validate:products` 检查产品数据，`npm run validate:seo` 检查 SEO 与内部链接。
5. Cloudflare Pages 部署静态产物。
6. 需要询盘后端时，进入 `rfq-worker/` 独立部署 Worker。

## 涉及模块
- `site-shell`
- `content-data`
- `product-catalog`
- `cloudflare-worker`
- `legacy-resend-api`

## 输入和输出
- 输入：源代码、数据文件、图片、环境变量
- 输出：静态站点、sitemap、Worker 发布包

## 环境变量
- `WORKER_URL`
- `TURNSTILE_SITE_KEY`
- Worker 侧的 `TURNSTILE_SECRET`、`RECIPIENT_EMAIL`、`ALLOWED_ORIGINS`

## 失败处理
- 产品数据校验失败会让构建失败
- Worker 发布失败与站点构建失败彼此独立

## 验证方法
- `npm run build`
- `cd rfq-worker && npm run deploy:dry-run`

## 全站性能复测
- 将 Lighthouse 13.5.0 安装到站外隔离目录：`npm install --prefix /tmp/nixia-performance-tools lighthouse@13.5.0`。不改生产依赖。
- `LIGHTHOUSE_DIR=/tmp/nixia-performance-tools/node_modules node scripts/audit-performance.mjs live` 检查线上；`local` 检查已生成的 dist，必要时设置 CHROME_PATH。
- 默认使用官方 desktop 预设，40ms RTT / 10240Kbps / CPU 1x / 1350×940，冷缓存、顺序执行，不屏蔽请求。可通过 AUDIT_PATH 仅复测指定路由；传入新的输出文件名创建独立一轮，已有 measured 页会跳过以便续跑。
- local 服务压缩 HTML/CSS/JS，但不代表 Cloudflare 网络、注入脚本和 Google 在线运行环境；不得将两种分数当作严格受控前后提升。Google 在线服务不可用时，保留失败原因并在发布后补验。

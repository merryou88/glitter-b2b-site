# 构建和部署流程

## 触发入口
本地发布、Cloudflare Pages 构建、Worker 发布。

## 调用顺序
1. 根目录 `npm run build`。
2. Astro 输出静态站点。
3. `npm run validate:products` 检查产品数据。
4. Cloudflare Pages 部署静态产物。
5. 需要询盘后端时，进入 `rfq-worker/` 独立部署 Worker。

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

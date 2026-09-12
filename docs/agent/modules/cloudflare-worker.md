---
module: cloudflare-worker
paths:
  - rfq-worker/src/index.ts
  - rfq-worker/wrangler.toml
  - rfq-worker/.dev.vars.example
triggers:
  - api/contact
  - api/rfq
  - inquiry-worker
  - turnstile
  - email
  - CORS
  - send_email
depends_on:
  - inquiry-forms
  - site-shell
requirement_docs:
  - requirements/current/cloudflare-worker.md
---

# cloudflare-worker

## 职责
处理联系和 RFQ 询盘的 Cloudflare Worker。负责路由、校验、CORS、honeypot 和邮件发送。

## 不负责的范围
不负责前端 UI，也不负责产品/博客内容。

## 代码入口
- `rfq-worker/src/index.ts`
- `rfq-worker/wrangler.toml`
- `rfq-worker/.dev.vars.example`

## 关键调用关系
- `handleRequest()` 处理 `OPTIONS`、`POST`、路由分发和 JSON 响应
- `sendEmailWithTimeout()` 用 `ctx.waitUntil()` 异步发送邮件
- `EMAIL.send()` 是唯一真实邮件通道

## 数据与状态
- `Env` 里有 `EMAIL`、`TURNSTILE_SECRET`、`RECIPIENT_EMAIL`、`ALLOWED_ORIGINS`、`INQUIRY_API`
- 当前请求路径实际读取的是 `EMAIL`、`RECIPIENT_EMAIL` 和 `ALLOWED_ORIGINS`
- `TURNSTILE_SECRET` 已声明，但当前代码没有调用 Turnstile 校验

## 外部依赖
- Cloudflare `send_email` binding
- `wrangler` secrets
- 受限 CORS 原点列表

## 修改约束
- 保持 `success` / `message` JSON 形状稳定
- 兼容 `/api/contact`、`/api/rfq` 和旧别名
- 变更邮件模板时别改坏字段验证顺序

## 验证方式
- `cd rfq-worker && wrangler dev`
- `cd rfq-worker && wrangler deploy --dry-run`

## 常见问题
- 允许源漏写导致 403
- 收件箱未验证导致邮件发送失败
- 以为 TURNSTILE_SECRET 已接入，但其实当前逻辑没用到

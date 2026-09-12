---
module: cloudflare-worker
status: current
---

### REQ-WORKER-001：Worker 同时接收主路由和旧别名
- 状态：active
- 当前规则：`POST /api/contact`、`POST /api/rfq`、`POST /api/inquiry/contact`、`POST /api/inquiry/rfq` 都必须可用。
- 验收条件：四个路由都返回正确 JSON，非 POST 返回 405。
- 影响模块：`cloudflare-worker`
- 代码路径：`rfq-worker/src/index.ts`
- 测试路径：`wrangler dev`
- 最后变更编号：待确认
- 待确认事项：无

### REQ-WORKER-002：Worker 要做基础防滥用和校验
- 状态：active
- 当前规则：Worker 需要处理 CORS、Origin 白名单、JSON 解析、honeypot `website`、必填字段和邮箱格式校验。
- 验收条件：非法 Origin、坏 JSON、缺字段都能返回稳定错误 JSON。
- 影响模块：`cloudflare-worker`
- 代码路径：`rfq-worker/src/index.ts`、`rfq-worker/wrangler.toml`
- 测试路径：`wrangler dev`
- 最后变更编号：待确认
- 待确认事项：`TURNSTILE_SECRET` 已声明但当前逻辑未调用 Turnstile

### REQ-WORKER-003：邮件发送必须走 Cloudflare 原生 binding
- 状态：active
- 当前规则：Worker 通过 `env.EMAIL.send()` 发送邮件，并使用 `ctx.waitUntil()` 让前端尽快收到响应。
- 验收条件：前端先拿到成功 JSON，邮件在后台异步发送。
- 影响模块：`cloudflare-worker`
- 代码路径：`rfq-worker/src/index.ts`
- 测试路径：`wrangler dev` 后观察日志
- 最后变更编号：待确认
- 待确认事项：`RECIPIENT_EMAIL` 需要是可投递收件箱

### REQ-WORKER-004：Worker 环境变量名必须稳定
- 状态：active
- 当前规则：当前代码和配置里稳定出现的环境名是 `TURNSTILE_SECRET`、`RECIPIENT_EMAIL`、`ALLOWED_ORIGINS` 和 `INQUIRY_API`。
- 验收条件：部署前后环境名不变，示例文件能对上代码。
- 影响模块：`cloudflare-worker`
- 代码路径：`rfq-worker/src/index.ts`、`rfq-worker/.dev.vars.example`、`rfq-worker/wrangler.toml`
- 测试路径：对照示例文件和 `wrangler dev`
- 最后变更编号：待确认
- 待确认事项：无

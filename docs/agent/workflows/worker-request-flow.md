# Worker 请求流程

## 触发入口
来自前端表单或外部客户端的 `POST /api/contact`、`POST /api/rfq`，以及旧别名 `/api/inquiry/contact`、`/api/inquiry/rfq`。

## 调用顺序
1. 处理 `OPTIONS` 预检。
2. 检查 method 是否为 `POST`。
3. 校验 `Origin` 是否在允许列表。
4. 解析 JSON。
5. 检查 honeypot `website`。
6. 按路由分发到 contact 或 RFQ 验证。
7. 构建邮件并通过 `ctx.waitUntil()` 异步发送。

## 涉及模块
- `cloudflare-worker`
- `inquiry-forms`

## 输入和输出
- 输入：前端传来的询盘 JSON
- 输出：`{ success: true }` 或带 `message` 的错误 JSON

## 环境变量
- `ALLOWED_ORIGINS`
- `RECIPIENT_EMAIL`
- `TURNSTILE_SECRET`（当前代码声明了，但未实际使用）

## 失败处理
- 非法 Origin 返回 403
- 非 POST 返回 405
- 路由不匹配返回 404
- JSON 解析失败或字段缺失返回 400
- 邮件发送失败只记日志，不回滚成功响应

## 验证方法
- `cd rfq-worker && wrangler dev`
- 查看控制台日志和返回码

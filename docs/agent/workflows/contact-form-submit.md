# 联系表单提交流程

## 触发入口
`src/components/ContactForm.astro` 中的表单提交。

## 调用顺序
1. 前端做必填校验。
2. `FormData` 组装 JSON。
3. `fetch()` 到 `${WORKER_URL}/api/contact`。
4. 成功则跳转 `/thank-you/`，失败则显示错误条。

## 涉及模块
- `inquiry-forms`
- `cloudflare-worker`
- `company-pages`

## 输入和输出
- 输入：`name`、`company`、`email`、`subject`、`productSku`、`estimatedQuantity`、`phone`、`message`、`website`
- 输出：Worker JSON 响应，前端根据 `success` 决定跳转或提示

## 环境变量
- `WORKER_URL`

## 失败处理
- 非 JSON 响应会显示通用错误
- 网络失败会提示检查连接
- honeypot 命中时前端仍可能看到成功，但后端会静默丢弃

## 验证方法
- 本地前端 + `wrangler dev`
- 提交一次正常表单和一次带 honeypot 的表单

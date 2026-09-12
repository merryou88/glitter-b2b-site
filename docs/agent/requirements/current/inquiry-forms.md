---
module: inquiry-forms
status: current
---

### REQ-FORM-001：联系表单字段与跳转保持固定
- 状态：active
- 当前规则：联系表单要求 `name`、`email`、`message` 必填，提交成功后跳转 `/thank-you/`。
- 验收条件：表单校验、错误提示和成功跳转都可用。
- 影响模块：`inquiry-forms`
- 代码路径：`src/components/ContactForm.astro`
- 测试路径：手动提交联系表单
- 最后变更编号：待确认
- 待确认事项：`WORKER_URL` 是当前前端请求目标

### REQ-FORM-002：RFQ 表单必须携带产品上下文
- 状态：active
- 当前规则：RFQ 表单要求 `fullName`、`email`、`message`，并附带产品名、SKU、重量、宽度、数量和 honeypot。
- 验收条件：从产品页或首页打开 RFQ 后，提交能把上下文送到 Worker。
- 影响模块：`inquiry-forms`、`product-catalog`
- 代码路径：`src/components/RfqQuoteForm.astro`、`src/components/RFQQuoteModal.astro`
- 测试路径：从产品页打开弹窗并提交
- 最后变更编号：待确认
- 待确认事项：无

### REQ-FORM-003：前端只负责转发，不直接发邮件
- 状态：active
- 当前规则：前端只把 JSON 发给 Cloudflare Worker，邮件发送不在浏览器内完成。
- 验收条件：前端代码里看不到直接邮件 API 调用。
- 影响模块：`inquiry-forms`、`cloudflare-worker`
- 代码路径：`src/components/ContactForm.astro`、`src/components/RfqQuoteForm.astro`
- 测试路径：`npm run build`，再配合 Worker 联调
- 最后变更编号：待确认
- 待确认事项：无

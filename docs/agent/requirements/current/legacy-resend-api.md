---
module: legacy-resend-api
status: current
---

### REQ-LEGACY-001：旧 RFQ 端点仍保留为独立入口
- 状态：active
- 当前规则：`/api/rfq-submit` 仍存在，但当前主站表单不指向它。
- 验收条件：该路由还能返回稳定 JSON，但不被误认为主流程。
- 影响模块：`legacy-resend-api`
- 代码路径：`src/pages/api/rfq-submit.ts`
- 测试路径：手动 POST 一个 JSON 请求
- 最后变更编号：待确认
- 待确认事项：是否还需要对外保留该端点

### REQ-LEGACY-002：旧端点仍按 Resend 变量运行
- 状态：active
- 当前规则：旧端点读取 `RESEND_API_KEY`、`RFQ_FROM_EMAIL`、`RFQ_TO_EMAIL`，并调用 Resend API 发送邮件。
- 验收条件：环境变量齐全时可以发送成功，缺失时返回 500。
- 影响模块：`legacy-resend-api`
- 代码路径：`src/pages/api/rfq-submit.ts`
- 测试路径：手动 POST 并检查 400/500/502
- 最后变更编号：待确认
- 待确认事项：无

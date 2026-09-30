---
module: legacy-resend-api
status: retired
---

### REQ-LEGACY-001：旧 RFQ Resend 端点已废弃
- 状态：retired
- 当前规则：`/api/rfq-submit` 不再作为主站接口存在；当前联系和 RFQ 表单统一走 Cloudflare Worker。
- 验收条件：主站构建不再生成或提示 `/api/rfq-submit` Astro API 路由；当前表单仍指向 Worker。
- 影响模块：`legacy-resend-api`
- 代码路径：已删除 `src/pages/api/rfq-submit.ts`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260930-004-retire-legacy-rfq-submit
- 待确认事项：如仍有外部调用方请求旧路径，需另行确认迁移或兼容策略

### REQ-LEGACY-002：主站不再依赖 Resend 旧变量
- 状态：retired
- 当前规则：主站不再读取 `RESEND_API_KEY`、`RFQ_FROM_EMAIL`、`RFQ_TO_EMAIL` 发送 RFQ 邮件。
- 验收条件：主站构建不需要旧 Resend 变量；邮件发送职责仍属于 Cloudflare Worker。
- 影响模块：`legacy-resend-api`
- 代码路径：已删除 `src/pages/api/rfq-submit.ts`
- 测试路径：`npm run build`
- 最后变更编号：CHG-20260930-004-retire-legacy-rfq-submit
- 待确认事项：无

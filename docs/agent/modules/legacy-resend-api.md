---
module: legacy-resend-api
paths:
  - src/pages/api/rfq-submit.ts (retired)
triggers:
  - rfq-submit
  - resend
  - legacy API
  - email endpoint
depends_on:
  - inquiry-forms
requirement_docs:
  - requirements/current/legacy-resend-api.md
---

# legacy-resend-api

## 职责
旧 RFQ Resend 端点的历史记录。该端点已废弃，主站不再提供 `/api/rfq-submit`。

## 不负责的范围
不负责当前联系表单，也不负责 Cloudflare Worker 的邮件流程。不要在主站恢复 Resend 发送逻辑，除非用户明确要求兼容外部旧调用方。

## 代码入口
- 已删除：`src/pages/api/rfq-submit.ts`

## 关键调用关系
- 已废弃，无当前调用关系。

## 数据与状态
- 当前前端代码没有指向这个端点
- 旧 Resend 环境变量不再属于主站运行要求。

## 外部依赖
- 无当前依赖；当前邮件发送依赖独立 Cloudflare Worker。

## 修改约束
- 不要恢复这个端点，除非用户明确确认仍有外部调用方需要兼容。

## 验证方式
- `npm run build` 不再出现 `/api/rfq-submit` GET handler 提示。

## 常见问题
- 以为主站还在用 Resend，其实当前表单走 Worker
- 如果未来外部系统仍请求 `/api/rfq-submit`，需要单独确认迁移或兼容方案

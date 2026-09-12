---
module: legacy-resend-api
paths:
  - src/pages/api/rfq-submit.ts
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
一个独立的旧 RFQ 端点，直接把询盘发到 Resend。

## 不负责的范围
不负责当前联系表单，也不负责 Cloudflare Worker 的邮件流程。

## 代码入口
- `src/pages/api/rfq-submit.ts`

## 关键调用关系
- 读取 `request.json()`
- 检查 honeypot `company_website`
- 校验 `fabricCode`、`application`、`quantityOrderType`、`colorBacking`、`additionalNotes`
- 调用 `https://api.resend.com/emails`

## 数据与状态
- 当前前端代码没有指向这个端点
- 需要 `RESEND_API_KEY`、`RFQ_FROM_EMAIL`、`RFQ_TO_EMAIL`
- `from` 默认值是 `noreply@nixiafabric.com`

## 外部依赖
- Resend API
- 前端/外部客户端自己发起 POST

## 修改约束
- 如果保留这个端点，就不要偷偷改字段名
- 如果废弃它，要先确认没有外部调用方

## 验证方式
- 直接 POST 一个 JSON 请求看 400/500/502 返回

## 常见问题
- 以为主站还在用 Resend，其实当前表单走 Worker
- 环境变量缺失导致 500

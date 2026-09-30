# 旧 Resend 发送流程

> 状态：已废弃。当前主站联系表单和 RFQ 表单统一走 Cloudflare Worker；不要恢复旧 Resend 流程，除非用户明确要求兼容外部旧调用方。

## 触发入口
已删除：`src/pages/api/rfq-submit.ts` 的 `POST`。

## 调用顺序
旧流程已停用；当前邮件发送顺序见 `workflows/worker-request-flow.md`。

## 涉及模块
- `legacy-resend-api`

## 输入和输出
- 无当前输入输出；历史上该端点接收 RFQ JSON 并返回 `success: true/false`。

## 环境变量
- 旧变量 `RESEND_API_KEY`、`RFQ_FROM_EMAIL`、`RFQ_TO_EMAIL` 不再属于主站运行要求。

## 失败处理
- 无当前失败处理；当前失败处理见 Cloudflare Worker。

## 验证方法
- `npm run build` 不再出现 `/api/rfq-submit` GET handler 提示。

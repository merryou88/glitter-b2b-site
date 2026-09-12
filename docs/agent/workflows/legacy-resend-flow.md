# 旧 Resend 发送流程

## 触发入口
`src/pages/api/rfq-submit.ts` 的 `POST`。

## 调用顺序
1. 解析 JSON。
2. 检查 honeypot `company_website`。
3. 校验 `fabricCode`、`application`、`quantityOrderType`、`colorBacking`、`additionalNotes`。
4. 读取 Resend 环境变量。
5. `fetch("https://api.resend.com/emails")`。

## 涉及模块
- `legacy-resend-api`

## 输入和输出
- 输入：RFQ JSON
- 输出：`success: true/false` 的 JSON，失败时保留 `error`

## 环境变量
- `RESEND_API_KEY`
- `RFQ_FROM_EMAIL`
- `RFQ_TO_EMAIL`

## 失败处理
- 字段缺失返回 400
- 缺少环境变量返回 500
- Resend 失败返回 502

## 验证方法
- 直接对 `/api/rfq-submit` 发测试 POST

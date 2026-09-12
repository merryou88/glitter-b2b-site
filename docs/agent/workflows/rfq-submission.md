# RFQ 提交流程

## 触发入口
`src/components/RfqQuoteForm.astro`，以及首页和产品卡片上的 `data-rfq-open` 询盘入口。

## 调用顺序
1. `RFQQuoteModal` 打开并注入当前产品信息。
2. `RfqQuoteForm` 校验姓名、邮箱、消息。
3. 组装 `productSku`、`productName`、`productWeight`、`productWidth` 和 `website`。
4. `fetch()` 到 `${WORKER_URL}/api/rfq`。
5. 成功则跳转 `/thank-you/`。

## 涉及模块
- `inquiry-forms`
- `product-catalog`
- `cloudflare-worker`

## 输入和输出
- 输入：联系人字段 + 产品上下文
- 输出：Worker JSON 响应和成功跳转

## 环境变量
- `WORKER_URL`

## 失败处理
- 校验失败时保持在当前弹窗内
- 非 JSON 或网络错误时显示错误条
- 选中产品信息缺失时会回退到通用询盘文案

## 验证方法
- 从产品页或首页打开 RFQ 弹窗，提交一次有效请求

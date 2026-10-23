---
module: inquiry-forms
paths:
  - src/components/ContactForm.astro
  - src/components/RfqQuoteForm.astro
  - src/components/RFQQuoteModal.astro
  - src/pages/contact.astro
  - src/pages/index.astro
triggers:
  - contact form
  - RFQ
  - inquiry
  - quote modal
  - data-rfq-open
  - thank-you
depends_on:
  - site-shell
  - cloudflare-worker
  - content-data
requirement_docs:
  - requirements/current/inquiry-forms.md
---

# inquiry-forms

## 职责
前端询盘入口。负责联系表单、RFQ 表单、RFQ 弹窗和到 Worker 的请求参数整理。

## 不负责的范围
不负责邮件送达本身，也不负责 Resend 旧端点。

## 代码入口
- `src/components/ContactForm.astro`
- `src/components/RfqQuoteForm.astro`
- `src/components/RFQQuoteModal.astro`
- `src/pages/contact.astro`
- `src/pages/index.astro`

## 关键调用关系
- `ContactForm` 和 `RfqQuoteForm` 都用 `FormData` 组装 JSON 后 `fetch()` 到 Worker
- 首页和产品卡片上的 `data-rfq-open` 会打开 `RFQQuoteModal`
- `RFQQuoteModal` 提供移动端左下方浮动询盘按钮，复用 `data-rfq-open`；首页也挂载该弹窗，但通过 floatingOnly 仅绑定浮动表单图标入口，保留现有 CTA 链接与内联表单。
- 成功后将一次性 GA4 lead 上下文写入 sessionStorage，并统一跳转到 `/thank-you/`；感谢页在 Analytics 就绪后发送 `generate_lead`，避免跳转取消事件请求。

## 数据与状态
- 当前前端真正消费的是 `WORKER_URL`
- `TURNSTILE_SITE_KEY` 在当前前端代码里没有被读取
- 隐藏字段 `website` 是 honeypot
- `RfqQuoteForm` 还会带上产品名、重量、宽度等上下文

## 外部依赖
- 浏览器 `fetch`
- Cloudflare Worker 的 `POST /api/contact` 与 `POST /api/rfq`

## 修改约束
- 前端字段名要和 Worker 端 payload 保持一致
- 改成功/失败文案时同步检查跳转和错误区块
- 不要删 honeypot 或 `data-rfq-open`

## 验证方式
- 本地跑前端后提交表单，确认成功跳转和错误提示
- 配合 `wrangler dev` 或已部署 Worker 测试

## 常见问题
- 只改前端没改 Worker payload
- `WORKER_URL` 为空时误走备用地址
- 按钮禁用状态和输入校验不同步

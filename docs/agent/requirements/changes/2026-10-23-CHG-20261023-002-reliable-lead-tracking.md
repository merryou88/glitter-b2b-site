---
change_id: CHG-20261023-002-reliable-lead-tracking
date: 2026-10-23
status: implemented
requirements:
  - REQ-FORM-010
modules:
  - inquiry-forms
  - site-shell
  - company-pages
---

# 可靠记录成功询盘的 GA4 事件

## 变更原因
已收到询盘邮件，但 GA4 DebugView 未收到 `generate_lead`。原实现会在表单提交成功后发送事件，并立刻导航到感谢页，浏览器可能在事件请求完成前卸载原页面；首页内联表单也没有发送该事件。

## 变更前
联系表单和 RFQ 弹窗在跳转前直接发送 `generate_lead`；首页内联表单成功后只跳转。感谢页只发送既有 Google Ads 感谢页转化事件。

## 变更后
三个成功入口在跳转前存储一次性会话标记。感谢页在 Google tag 就绪后读取并删除标记，再发送一次 GA4 `generate_lead`。直接访问或刷新感谢页没有标记，不会产生 GA4 lead。

## 验收条件
- 三个表单入口成功提交后各发送一次 `generate_lead`。
- 提交失败、直接访问和刷新感谢页均不发送 `generate_lead`。
- 原有 Google Ads 感谢页转化事件继续触发。

## 影响范围
浏览器端表单事件和感谢页 Analytics 逻辑；Worker 邮件接口与表单字段不变。

## 兼容性
依赖现有浏览器 sessionStorage。无法使用 sessionStorage 的浏览器仍完成询盘和感谢页跳转，但不会发送该次 GA4 lead。

## 实现位置
`src/components/ContactForm.astro`、`src/components/RfqQuoteForm.astro`、`src/pages/index.astro`、`src/pages/thank-you.astro`。

## 验证结果
待执行站点构建；发布后需使用 Tag Assistant 与 GA4 DebugView 实测三个成功入口和感谢页刷新。

## 来源
2026-10-23 线上询盘追踪排查。

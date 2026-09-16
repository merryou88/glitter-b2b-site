---
change_id: CHG-20260916-008-contact-page-no-rfq-autoopen
date: 2026-09-16
status: implemented
requirements:
  - REQ-FORM-004
modules:
  - inquiry-forms
---

# Contact Page No RFQ Auto-Open

## 变更原因
联系页本身已经提供可填写的联系表单，进入页面后自动弹出 RFQ 弹窗会遮挡页面表单并造成重复入口。

## 变更前
`/contact/` 页面包含 `data-rfq-autoopen` 标记，全站 RFQ 弹窗脚本检测到该标记后会在页面加载时自动打开弹窗。

## 变更后
`/contact/` 页面不再包含自动打开标记。用户进入联系页后直接看到页面内联系表单。

## 验收条件
- 从 Header 菜单点击 Contact 后进入 `/contact/`。
- 联系页不自动打开 RFQ 弹窗。
- 页面内联系表单仍可见并可填写。

## 影响范围
仅影响 `/contact/` 页面加载后的弹窗行为；不改变其他页面上带 `data-rfq-open` 的 RFQ 入口。

## 兼容性
不涉及 API、表单字段或 Worker 请求合同变化。

## 实现位置
- `src/pages/contact.astro`

## 验证结果
`npm run build` 通过，包含 Astro 静态构建和 `npm run validate:products`。

## 来源
用户反馈：菜单链接到 contact 页面后不应直接弹出 RFQ 弹窗，因为页面本身已有表单。

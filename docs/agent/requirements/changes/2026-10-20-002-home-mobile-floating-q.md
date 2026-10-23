---
change_id: CHG-20261020-002-home-mobile-floating-q
date: 2026-10-20
status: superseded
requirements:
  - REQ-FORM-006
modules:
  - inquiry-forms
  - site-shell
---

# 首页移动端增加浮动 Q

> 首页仅绑定浮动入口的规则由 CHG-20261023-006-home-hero-rfq-modal 替代；浮动图标视觉由 CHG-20261020-003-floating-inquiry-form-icon 替代。其余首页挂载与移动端显示规则保留。

## 变更原因
用户要求移动端首页添加产品列表页相同的 Q 图标。
## 变更前
首页不挂载 RFQQuoteModal，无浮动 Q。
## 变更后
首页挂载共享弹窗，以 floatingOnly 仅绑定 Q 入口，原 CTA 和内联表单保留。
## 验收条件
首页在不超过 640px 时显示与产品列表页一致的左下角 Q，打开同一询盘弹窗；打开时隐藏，关闭恢复；桌面不显示 Q。
## 影响范围与兼容性
复用现有组件样式、关闭、焦点管理和统计；其他页面入口绑定不变。
## 实现位置
`src/layouts/Layout.astro`、`src/components/RFQQuoteModal.astro`
## 验证结果
npm run build 通过，18 个产品、59 个页面及内链校验通过。产物检查确认首页和产品页各挂载一次 Q 与弹窗、首页 floatingOnly 配置正确、移动端 CSS 和内联表单保留。未进行真实表单提交。
## 来源
用户当前明确要求。

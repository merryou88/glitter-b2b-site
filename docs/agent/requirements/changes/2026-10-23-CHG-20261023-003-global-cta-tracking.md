---
change_id: CHG-20261023-003-global-cta-tracking
date: 2026-10-23
status: implemented
requirements:
  - REQ-SHELL-031
modules:
  - site-shell
---

# 全站行动按钮点击追踪

## 变更原因
现有 GA4 事件只覆盖部分产品页和联系入口，无法统一比较全站行动按钮的点击表现，也无法按页面位置定位同文案按钮。

## 变更前
部分行动按钮会发送各自的 RFQ、WhatsApp 或产品页事件，其他按钮没有统一事件。

## 变更后
Layout 用事件委托覆盖全站显式行动按钮，并发送 `cta_click`。事件携带 `cta_id`、按钮文案、目标链接、页面路径、模块位置和模块内序号；已有业务事件保持不变。

## 验收条件
- 每次有效行动按钮点击发送一条带定位参数的 `cta_click`。
- 禁用按钮不发送。
- RFQ、WhatsApp、产品 CTA 和表单转化的既有事件不受影响。

## 影响范围
浏览器端 GA4 交互追踪；不修改页面内容、Worker 接口或 Google Ads 转化目标。

## 兼容性
使用现有 Google tag 和浏览器事件委托。对于同页跳转和外部链接事件，添加 `transport_type: beacon` 提高发送可靠性。

## 实现位置
`src/layouts/Layout.astro`。

## 验证结果
待执行站点构建和发布后 Tag Assistant 实测。

## 来源
2026-10-23 站内 CTA 追踪需求。

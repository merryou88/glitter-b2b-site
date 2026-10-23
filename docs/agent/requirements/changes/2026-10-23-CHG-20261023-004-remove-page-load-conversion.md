---
change_id: CHG-20261023-004-remove-page-load-conversion
date: 2026-10-23
status: implemented
requirements:
  - REQ-COMPANY-015
modules:
  - company-pages
  - site-shell
  - inquiry-forms
---

# 移除感谢页加载型转化事件

## 变更原因
`ads_conversion__https_nixiafabric_com__1` 会在每次感谢页加载时发送，直接访问或刷新感谢页可能重复统计潜在客户。

## 变更前
感谢页在成功询盘的 GA4 `generate_lead` 之外，还发送页面加载型 ads conversion 事件。

## 变更后
移除页面加载型 ads conversion 事件。`generate_lead` 成为唯一的成功询盘事件，并且只有成功提交后带入的一次性会话标记存在时发送。

## 验收条件
- 感谢页产物不包含 `ads_conversion__https_nixiafabric_com__1`。
- 表单成功后有一条 `generate_lead`。
- 直接访问或刷新感谢页不会记录 lead。

## 影响范围
感谢页的浏览器端转化事件；Google Ads 继续使用从 GA4 导入的 `generate_lead`。

## 兼容性
不影响表单提交、邮件通知或感谢页内容。

## 实现位置
`src/pages/thank-you.astro`。

## 验证结果
待执行站点构建及发布后 Tag Assistant 验证。

## 来源
2026-10-23 避免感谢页重复转化统计。

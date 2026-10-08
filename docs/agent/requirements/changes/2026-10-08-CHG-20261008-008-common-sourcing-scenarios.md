---
change_id: CHG-20261008-008-common-sourcing-scenarios
date: 2026-10-08
status: implemented
requirements:
  - REQ-SHELL-015
modules:
  - site-shell
  - product-catalog
---

# 应用页常见采购场景

## 变更原因
真实订单案例可能暴露客户、产品和商业信息。应用页改用基于重复买方需求总结的采购场景，在提供实际选材价值的同时降低客户识别和商业信息泄露风险。

## 变更内容
- 为舞台服、定制开发、全息面料、舞蹈服、泳装和啦啦队服分别增加独立采购场景。
- 每个场景包含买方类型、采购简述、3 项判断步骤和 RFQ 准备信息。
- 明确声明场景不是具名客户案例或性能声明。
- 不使用客户名称、订单数量、价格、成交结果或评价。

## 验收结果
- 6 个应用页均生成场景模块和免责声明。
- 场景内容与页面应用主题及真实公开产品能力一致。

## 实现位置
- `src/pages/applications/[slug].astro`

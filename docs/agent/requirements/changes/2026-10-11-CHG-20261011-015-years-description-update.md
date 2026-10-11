---
change_id: CHG-20261011-015-years-description-update
date: 2026-10-11
status: implemented
requirements:
  - REQ-SHELL-004
modules:
  - site-shell
---

# 全站经验年限描述统一

## 变更原因
统一网站当前经验年限描述，避免继续展示过时的 `15+ Years`。

## 变更后
- 首页标题改为 `10+ Years of Foil Fabric Experience`。
- 首页说明改为 `Focused on foil fabric development and supply for more than 10 years.`。
- 首页信任栏改为 `10+ Years`。

## 验收条件
- 源码中现行页面不再出现 `15+ Years`。
- 三处经验年限描述均统一为 10 年。
- 其他页面和布局不受影响。

## 实现位置
- `src/pages/index.astro`

## 验证结果
待执行构建、产品校验和 SEO 校验。

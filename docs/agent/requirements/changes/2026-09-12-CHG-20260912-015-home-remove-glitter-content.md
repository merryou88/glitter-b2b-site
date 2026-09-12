---
change_id: CHG-20260912-015-home-remove-glitter-content
date: 2026-09-12
status: implemented
requirements:
  - REQ-SHELL-005
modules:
  - site-shell
---

# 首页移除 Glitter 相关内容

## 变更原因
用户要求首页去掉与 glitter 相关的内容。

## 变更前
首页 SEO、轮播描述、应用图片替代文本、制造能力、客户评价和采购流程中包含 glitter 或 sparkle 相关表达。

## 变更后
首页统一使用 foil、iridescent、holographic 和 synthetic leather 等中性产品表达，并移除 Glitter Coating 能力卡；应用素材文件名改为中性命名。

## 验收条件
- 首页源码和生成页面不再出现 `glitter` 或 `sparkle`
- 首页剩余内容可正常构建和展示
- 产品详情页和产品列表页不受影响

## 影响范围
`src/components/HeroCarousel.astro`、`src/pages/index.astro`、`public/shots/application-costume-foil.jpg`、`public/shots/application-costume-foil.webp`

## 兼容性
仅调整首页展示和素材文件名，不改变产品详情页或产品列表页路由。

## 实现位置
`src/components/HeroCarousel.astro`、`src/pages/index.astro`

## 验证结果
待执行构建验证。

## 来源
用户明确要求去掉首页跟 glitter 相关的内容。

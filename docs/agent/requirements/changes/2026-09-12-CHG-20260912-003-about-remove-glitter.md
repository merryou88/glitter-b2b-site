---
change_id: CHG-20260912-003
date: 2026-09-12
status: implemented
requirements:
  - REQ-COMPANY-006
modules:
  - company-pages
---

# About 页面移除 glitter 相关内容

## 变更原因
About 页面需要聚焦当前保留的 foil、iridescent、stretch、synthetic leather 和通用制造服务内容。

## 变更前
About 页面的页面描述、结构化数据、时间线、材料路线、品牌故事、重点材料、展示卡、全球服务和 SEO 文案包含 glitter 相关表述。

## 变更后
移除 About 页面专属正文和 SEO 元数据中的 glitter 表述及 Glitter Materials、Chunky Glitter Synthetic Leather 展示内容；保留 foil、iridescent、stretch、synthetic leather、定制配色和制造服务信息。

## 验收条件
- `src/pages/about.astro` 不包含 `glitter`。
- 生成的 `dist/about/index.html` 页面专属内容不包含 `glitter`。
- About 页面仍包含品牌故事、工厂背景、材料重点、全球服务和联系入口。
- About 路由可以完成静态生成。

## 影响范围
- `/about/` 的用户可见文案、结构化数据和 SEO 元数据。
- 不修改公共 Footer、产品目录、其他页面或共享产品数据。

## 兼容性
About 路由、Layout、页面结构、联系入口和其他未涉及的导航保持不变。

## 实现位置
- `src/pages/about.astro`
- `docs/agent/requirements/current/company-pages.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
- `rg -n -i "glitter" src/pages/about.astro`：无匹配。
- `rg -n -i "glitter" dist/about/index.html`：仅命中共享 Footer 产品链接的历史 slug；About 页面专属正文和元数据无匹配。
- `npm run build`：Astro 页面生成成功；后续 `validate:products` 因工作区现有产品页缺失而失败，详见命令输出。

## 来源
用户要求：去掉 About 页面跟 glitter 相关的内容。

---
change_id: CHG-20260912-002
date: 2026-09-12
status: implemented
requirements:
  - REQ-COMPANY-005
modules:
  - company-pages
  - site-shell
---

# Factory 页面移除 glitter 相关内容

## 变更原因
Factory 页面需要聚焦 foil、iridescent、stretch 和通用制造能力，不再承担 glitter 产品和工艺的展示。

## 变更前
Factory 页面包含 glitter 产品定位、glitter 生产线和设备、glitter bonding 工艺、glitter 质检与包装描述，以及相关 SEO 文案和图片替代文本。

## 变更后
Factory 页面移除 glitter 专属能力卡、生产线和设备项，并将工艺、质检、包装、页面标题、描述、关键词和图片替代文本调整为 foil 或通用制造表述。

## 验收条件
- `/factory/` 保留 foil 转印、通用质量管理、包装、OEM/ODM、审厂和工厂参观内容。
- Factory 页面专属主体、SEO 元数据和可见 Footer 不包含 `glitter`、`chunky` 或 `sparkle` 相关内容。
- 站点级 Organization 结构化数据和询盘产品数据保持共享，不纳入 Factory 页面专属内容验收。
- `/factory/` 仍能正常静态构建。

## 影响范围
- 用户可见的 Factory 页面内容和 SEO 元数据。
- 不修改产品目录、首页、博客或静态资源文件。

## 兼容性
Factory 路由、公共 Layout、联系入口和工厂参观地图保持不变。

## 实现位置
- `src/pages/factory.astro`
- `src/layouts/Layout.astro`
- `src/components/Footer.astro`
- `docs/agent/requirements/current/company-pages.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
待执行：`npm run build`，并检查 `dist/factory/index.html` 中的关键词。

## 来源
用户要求：去掉 factory 页面跟 glitter 相关的内容。

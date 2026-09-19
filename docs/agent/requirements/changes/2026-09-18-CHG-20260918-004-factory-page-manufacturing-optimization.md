# CHG-20260918-004：Factory 页面制造能力专业化优化

- 状态：active
- 影响需求：`REQ-COMPANY-008`，并继续遵守 `REQ-COMPANY-005`、`REQ-COMPANY-007`
- 变更日期：2026-09-18

## Before

- Factory 页面以 `Foil Fabric Production Support` 为主标题。
- 页面文案出现 `experienced production partners`，没有直接突出自有生产车间。
- 页面有生产流程、质量控制和审厂模块，但流程信息重复，质检控制点不够突出。
- 页面没有工厂能力概览或工厂视频申请入口。

## After

- Hero 改为突出 `Foil Fabric Manufacturing in Guangzhou` 和自有生产车间。
- 增加 `Factory at a Glance`，说明生产模式、核心能力、质量控制、开发、包装和工厂审查方式。
- 增加工厂视频申请入口，说明可提供工厂视频或安排远程视频验厂。
- 生产时间线增加每一步的 `QC checkpoint`。
- 质量控制、审厂和最终询盘文案改为更清晰的制造商口径。
- SEO 标题、描述和关键词改为制造商、工厂和质量控制搜索意图。
- 不添加未经确认的面积、产能、设备数量、员工数量、交期或证书归属。

## Acceptance Criteria

- `/factory/` 首屏明确展示自有生产车间和广州制造定位。
- 页面不再出现 `production partners` 或 `No middleman` 等容易造成定位误解的表述。
- 页面包含工厂能力概览、工厂视频入口、生产控制点、质量管理和审厂支持。
- Factory 页面专属正文、SEO 元数据和可见 Footer 继续不包含 `glitter`、`chunky` 或 `sparkle`。
- 页面在移动端保持可读，新增模块不会造成横向溢出。

## Impact

- 用户可见页面定位、SEO 文案、生产流程表达和 CTA。
- 不改变询盘接口、表单字段、Worker 或产品数据。

## Implementation

- `src/pages/factory.astro`
- `docs/agent/requirements/current/company-pages.md`
- `docs/agent/requirements/INDEX.md`

## Verification

- 待执行：`npm run build`
- 待执行：检查生成的 `/factory/` 页面文本和页面专属 SEO
- 待执行：检查移动端新增 Factory Snapshot、Factory Video 和生产流程布局

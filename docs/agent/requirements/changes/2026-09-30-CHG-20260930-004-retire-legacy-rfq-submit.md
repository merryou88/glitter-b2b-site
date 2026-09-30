---
change_id: CHG-20260930-004-retire-legacy-rfq-submit
date: 2026-09-30
status: implemented
requirements:
  - REQ-LEGACY-001
  - REQ-LEGACY-002
modules:
  - legacy-resend-api
  - inquiry-forms
---

# Retire Legacy RFQ Submit Endpoint

## 变更原因
构建持续提示 `/api/rfq-submit` 缺少 GET handler。该文件是旧 Resend RFQ 端点，当前主站表单已经统一走 Cloudflare Worker 的 `/api/rfq`，继续把旧 Astro API 路由保留在静态站中会造成构建噪音和维护误解。

## 变更前
- `src/pages/api/rfq-submit.ts` 作为旧 Resend POST 端点保留。
- 当前主站表单不指向该端点，但构建会提示该 Astro API 路由没有 GET handler。
- 文档仍记录旧端点需要 `RESEND_API_KEY`、`RFQ_FROM_EMAIL`、`RFQ_TO_EMAIL`。

## 变更后
- 删除 `src/pages/api/rfq-submit.ts`。
- `/api/rfq-submit` 不再作为主站接口存在。
- 当前联系表单和 RFQ 表单继续使用独立 Cloudflare Worker。
- 旧 Resend 环境变量不再属于主站运行要求。

## 验收条件
- `npm run build` 不再出现 `/api/rfq-submit` GET handler 提示。
- 主站构建仍成功。
- 当前 RFQ 前端入口仍指向 Worker `/api/rfq`。
- 文档明确旧 Resend 端点已废弃。

## 影响范围
移除旧 Astro API 路由，更新架构、约定、模块和需求文档。当前 Worker 代码和前端 RFQ 提交流程不变。

## 兼容性
如果存在外部系统直接 POST `/api/rfq-submit`，该调用将不再由主站处理；目前仓库内主站代码没有指向该端点。需要兼容外部旧调用方时，应另行确认迁移或 Worker 别名方案。

## 实现位置
- 删除：`src/pages/api/rfq-submit.ts`
- 更新：`docs/agent/architecture.md`
- 更新：`docs/agent/conventions.md`
- 更新：`docs/agent/modules/legacy-resend-api.md`
- 更新：`docs/agent/requirements/current/legacy-resend-api.md`
- 更新：`docs/agent/requirements/INDEX.md`

## 验证结果
- 通过：`npm run build`，45 个页面完成构建。
- 通过：构建输出不再出现 `/api/rfq-submit` GET handler 提示。
- 通过：构建内置 `npm run validate:products`，15 个 public products 校验通过。

## 来源
- 用户确认废弃旧 `/api/rfq-submit` 端点。

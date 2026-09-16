---
change_id: CHG-20260916-004
date: 2026-09-16
status: implemented
requirements:
  - REQ-PRODUCT-001
  - REQ-PRODUCT-020
modules:
  - product-catalog
  - content-data
---

# Product SEO Rules for New Products

## 变更原因
新增产品如果只录入基础数据，后续仍需要单独再做美国采购商关键词、采购参数和单位表达优化，容易重复返工。

## 变更前
产品新增说明只要求复制现有对象、填写字段并保存。当前需求文档没有明确要求新增产品必须在第一次录入时同步完成美国买家 SEO、采购型描述、样品/定制/MOQ 信息和中美单位表达。

## 变更后
新增公开产品必须先确认符合当前 performance fabric 定位；不符合定位的 glitter leather、PU accessory、鞋材、手袋、工艺、玩具等产品不得加入当前主产品数据。新增产品必须同步写好：

- 美国采购商搜索型 `metaTitle`
- 自然可读的产品 `title` / H1
- 包含应用、wholesale/supplier、样品、定制、库存或 MOQ 等已确认采购事实的 `metaDesc`
- 采购型 FAQ
- 宽度、MOQ 等中美单位表达，例如 `150 cm / 59 in`、`100 m / 109 yd`

`hot-stamping` 可作为工艺说明或规格项，但不作为主要搜索词。未知规格必须写 `To be confirmed` 或省略，不编造。

## 验收条件
- 新增产品第一次提交时即具备 SEO 标题、描述、H1、采购参数、FAQ 和中美单位表达。
- 公开目录和 sitemap 只包含当前定位产品。
- `npm run validate:products` 与 `npm run build` 通过。

## 影响范围
影响产品数据新增、产品目录页、产品详情页、产品 SEO 元数据和新增产品审核方式。不改变现有页面模板结构。

## 兼容性
对现有公开产品保持兼容；历史退出定位产品图片暂不删除，但不应重新加入当前主产品数据。

## 实现位置
- `src/data/allProducts.js`
- `docs/agent/requirements/current/product-catalog.md`
- `docs/agent/modules/product-catalog.md`
- `docs/agent/modules/content-data.md`
- `docs/agent/requirements/INDEX.md`

## 验证结果
2026-09-16：文档与源文件新增产品说明已同步。此前相关代码验证已执行 `npm run build`，产品数据校验通过。

## 来源
用户要求将本次产品页关键词和美国采购商表达优化沉淀到产品新增规则中，避免每次新增后再二次优化。

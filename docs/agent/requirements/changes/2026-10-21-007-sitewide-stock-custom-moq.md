---
change_id: CHG-20261021-007-sitewide-stock-custom-moq
date: 2026-10-21
status: implemented
requirements:
  - REQ-PRODUCT-042
  - REQ-PRODUCT-046
  - REQ-PRODUCT-050
modules:
  - product-catalog
  - content-data
  - blog-knowledge
---

# 全站现货与定制 MOQ

## 变更前后
旧规则使用 yd，部分定制 MOQ 待确认，存在 109/219 yd 及独立硬编码。最新用户指令统一现货 50m、定制及无现货 200m；现货详情参数和描述为 `50m Stock / 200m Custom`。

## 来源与影响
已读取原始产品表。原始表无库存列，库存沿用现有 inStock：8 款现货、10 款按单生产。不修改原始表，其旧 MOQ 被本次用户确认覆盖。同步主数据、旧摘要、首页、目录、详情、相关卡片、博客引用、工厂说明和询盘示例。保留非 MOQ 数量换算，不改库存、顺序和其他参数。

## 实现与验收
src/data/allProducts.js 为产品详情事实源；删除详情及目录 yd 换算和全印款特例。产品验证器新增库存对应 MOQ 一致性校验。18 款 specs/specTable/b2bTable 均须匹配对应门槛；全站无旧 109/219 yd MOQ。

## 验证结果
npm run build 通过：18 个产品数据校验、59 个 HTML 页面 SEO 与全部内链校验通过。另检查 18 个详情页首屏和全部 MOQ 参数表均匹配库存门槛；扫描 59 个生成 HTML 页面未发现旧 109/219 yd MOQ。历史下线文章无库存依据，保持原文。

---
change_id: CHG-20261021-006-gradient-product-first
date: 2026-10-21
status: implemented
requirements:
  - REQ-PRODUCT-051
modules:
  - product-catalog
---

# 渐变烫金弹力产品默认排第一

## 变更原因
用户指定 Iridescent Gradient Foil Stretch Fabric for Dancewear & Costumes 排第一。
## 变更前
该产品默认推荐序列第二。
## 变更后
该产品第一，原第一顺延至第二，其他产品相对顺序保留。
## 验收条件
桌面与移动端共享网格首卡为 iridescent-gradient-laser-ice-silk。
## 影响范围与兼容性
仅产品列表默认推荐顺序，保留其他排序选项。
## 实现位置
`src/pages/products.astro`
## 验证结果
npm run build 通过（18 个产品、59 个页面及内链校验）；产物检查确认指定产品第一、原第一顺延第二，18 张卡片完整保留。
## 来源
用户当前指定产品名称。

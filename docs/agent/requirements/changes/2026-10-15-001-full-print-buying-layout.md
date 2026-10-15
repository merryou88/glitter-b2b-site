---
change_id: CHG-20261015-001-full-print-buying-layout
date: 2026-10-15
status: implemented
requirements:
  - REQ-PRODUCT-050
modules:
  - product-catalog
---
# Full-Print 采购详情样板

## 变更原因
用户要求参考 Pine Crest 信息结构优化指定产品，并保持现有主图和详情图不动。
## 变更前
采购信息、规格、样品与护理跨多个区域重复；产品用途未体现已确认泳衣/泳帽应用。
## 变更后
精简首屏，分离报价和样品入口，新增原创线条SVG特点/用途/护理区；合并规格采购表；保留现有图片配置与FAQ；用户确认的护理规则仅用于该样板。
## 验收条件
见 REQ-PRODUCT-050；原有图片首张详情全宽、后续两列展示保持；其他产品原布局保持。
## 影响范围
指定产品正文及应用数据。FAQ继续读取同一产品源，保证与路由生成的FAQ schema一致。
## 兼容性
未更改表单契约、邮件、部署设置或图片文件。保留用户已有五张图片删除改动。此前图片排版需求继续生效。
## 实现位置
`src/components/ProductDetail.astro`、新增 `src/components/FullPrintBuyingDetails.astro`、`src/data/allProducts.js`。
## 验证结果
Astro生成58个页面成功；SEO校验通过。完整构建在产品校验阶段失败：用户既有删除的main-6/main-7图库文件仍被数据引用（共4条报告）。不擅自恢复文件或改变图片配置。工作区无products-data工作簿，依据现有源代码与用户本次明确确认的信息修改。
本地浏览器已检查首屏及图标区；报价与样品按钮分别打开Bulk pricing / Sample first弹窗，产品名、160 GSM、59英寸正确带入；未提交真实询盘。移动端仅完成响应式规则实现，未完成设备尺寸实测。
## 来源
用户本次明确授权的布局、泳衣/泳帽应用与护理要求；参考页面仅作信息结构参考，未复制代码、素材或性能参数。

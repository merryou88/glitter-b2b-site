---
change_id: CHG-20261024-001-product-led-catalog
date: 2026-10-24
status: implemented
requirements:
  - REQ-PRODUCT-022
  - REQ-PRODUCT-040
  - REQ-PRODUCT-053
modules:
  - product-catalog
---

# 产品特性主导的广告目录页

## 变更原因
用户批准调整首屏定位、采购服务、紧凑产品卡和筛选布局，以烫金及金属光泽为主、多应用为辅。
## 变更前
首屏限定舞蹈与舞台服，Sample Options/OEM Support 笼统；大方图延迟规格露出，移动默认 Dancewear 且无搜索和下拉筛选。
## 变更后
首屏以 Wholesale Foil & Metallic Fabrics 为题，明确幻彩/全息/烫金及定制颜色；保留50m/200m既有MOQ，突出色卡和定制。卡片图片桌面16:10、移动16:9，缩短标题、移除重复简介、增加现有规格的Stretch并让材料换行。全端默认全部，加入效果快捷筛选，搜索/Finish/Stretch直接展示，其他控件折叠于More filters。
## 验收条件
全18个产品初始可见；手机/桌面无横向溢出；搜索、筛选、排序和清除正确；RFQ及图片预加载不回退。
## 影响范围
仅目录页、相关需求和模块文档。
## 兼容性
URL、SEO元数据、产品源数据、推荐顺序、图片优化及RFQ提交流程不变。旧移动默认应用筛选被新规则替代。
## 实现位置
src/pages/products.astro
## 验证结果
`npm run build` 通过：18 产品、59 HTML 页面、56 sitemap URL 及内链校验通过。Puppeteer + 本机 Chrome 检查 375/390/768/1024/1440px：初始18张卡片、无横向溢出、搜索单产品、全息特性筛选3项、四面弹筛选11项、应用/库存/排序/清除联动及索样/报价弹窗正常；无页面脚本错误。已视觉检查390px与1440px截图。`git diff --check` 通过。测试屏蔽外部请求，未提交真实询盘、未做线上速度或广告转化验证，未部署。
## 来源
用户批准前述四项落地页修改；未授权提交或部署。

## 后续变更
CHG-20261024-002-catalog-remove-dropdowns 替代其中筛选控件规则；首屏、采购信息与卡片规则继续有效。

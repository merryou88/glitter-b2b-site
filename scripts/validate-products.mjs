import fs from "node:fs";
import path from "node:path";
import { allProducts } from "../src/data/allProducts.js";

const root = process.cwd();
const errors = [];

const publicPath = (url) =>
  path.join(root, "public", decodeURI(url).replace(/^\/+/, ""));

const checkAsset = (label, url) => {
  if (!url || !fs.existsSync(publicPath(url))) {
    errors.push(`${label}: missing asset ${url || "(empty)"}`);
  }
};

const normalizeBase = (file) =>
  file.replace(/\.(png|jpe?g|webp)$/i, "").toLowerCase();

const requiredFields = [
  "slug",
  "title",
  "metaTitle",
  "metaDesc",
  "mainImageUrl",
  "mainImageAlt",
  "galleryMainPath",
  "galleryImages",
  "detailImagePath",
  "specs",
  "specTable",
  "b2bTable",
  "applications",
  "faqList",
];

const slugs = new Set();
const titles = new Set();

for (const product of allProducts) {
  if (slugs.has(product.slug)) errors.push(`${product.slug}: duplicate slug`);
  if (titles.has(product.title)) errors.push(`${product.slug}: duplicate title`);
  slugs.add(product.slug);
  titles.add(product.title);

  for (const field of requiredFields) {
    if (product[field] === undefined || product[field] === null) {
      errors.push(`${product.slug}: missing field ${field}`);
    }
  }

  checkAsset(`${product.slug} main image`, product.mainImageUrl);
  checkAsset(`${product.slug} WebP main image`, product.mainImageWebp);

  for (const file of product.galleryImages ?? []) {
    checkAsset(`${product.slug} gallery image`, `${product.galleryMainPath}${file}`);
  }

  for (const file of product.detailImages ?? []) {
    checkAsset(`${product.slug} detail image`, `${product.detailImagePath}${file}`);
  }

  if (product.video) {
    checkAsset(`${product.slug} video`, product.video.src);
    checkAsset(
      `${product.slug} video poster`,
      `${product.galleryMainPath}${product.video.poster}`,
    );
  }

  const appDir = path.join(root, "public", "images", "products", product.slug, "application");
  if (fs.existsSync(appDir)) {
    const appFiles = fs
      .readdirSync(appDir)
      .filter((file) => /\.(png|jpe?g|webp)$/i.test(file));
    const appGroups = new Map();

    for (const file of appFiles) {
      const base = normalizeBase(file);
      const group = appGroups.get(base) ?? { raster: 0, webp: 0 };
      if (/\.webp$/i.test(file)) group.webp += 1;
      else group.raster += 1;
      appGroups.set(base, group);
    }

    for (const [base, group] of appGroups) {
      if (group.raster > 1) {
        errors.push(`${product.slug} application image ${base}: duplicate raster files`);
      }
      if (group.webp > 1) {
        errors.push(`${product.slug} application image ${base}: duplicate WebP files`);
      }
    }
  }

  const pagePath = path.join(root, "dist", "products", product.slug, "index.html");
  if (!fs.existsSync(pagePath)) {
    errors.push(`${product.slug}: built page is missing`);
    continue;
  }

  const html = fs.readFileSync(pagePath, "utf8");
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const idCounts = new Map();
  for (const id of ids) idCounts.set(id, (idCounts.get(id) ?? 0) + 1);
  for (const [id, count] of idCounts) {
    if (count > 1) errors.push(`${product.slug}: duplicate HTML id ${id}`);
  }

  if ((product.detailImages?.length ?? 0) > 0 && !html.includes(product.detailImages[0])) {
    errors.push(`${product.slug}: configured detail images are not rendered`);
  }

  const builtAssetUrls = [
    ...html.matchAll(/\/images\/[^"'<>]*?\.(?:jpg|jpeg|png|webp|mp4)/gi),
  ].map((match) => decodeURI(match[0]));
  for (const url of new Set(builtAssetUrls)) {
    if (!fs.existsSync(publicPath(url))) {
      errors.push(`${product.slug}: built page references missing asset ${url}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Product validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Product validation passed: ${allProducts.length} product(s) checked.`);

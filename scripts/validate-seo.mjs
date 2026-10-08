import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const siteOrigin = "https://nixiafabric.com";
const titleMaxLength = 60;
const descriptionMaxLength = 160;
const errors = [];

const decodeHtml = (value = "") => {
  const namedEntities = {
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    nbsp: " ",
    quot: '"',
  };

  return value
    .replace(/&#(\d+);/g, (_match, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_match, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => namedEntities[name.toLowerCase()] ?? match);
};

const normalizeText = (value = "") =>
  decodeHtml(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

const getAttribute = (tag, name) => {
  const match = tag.match(
    new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"),
  );
  return match ? decodeHtml(match[1] ?? match[2] ?? match[3] ?? "") : null;
};

const getMetaContent = (html, name) => {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (getAttribute(match[0], "name")?.toLowerCase() === name.toLowerCase()) {
      return getAttribute(match[0], "content") ?? "";
    }
  }
  return "";
};

const getCanonical = (html) => {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const rel = getAttribute(match[0], "rel")?.toLowerCase().split(/\s+/) ?? [];
    if (rel.includes("canonical")) return getAttribute(match[0], "href") ?? "";
  }
  return "";
};

const walkFiles = (directory, extension) => {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkFiles(filePath, extension));
    else if (entry.name.endsWith(extension)) files.push(filePath);
  }
  return files;
};

const routeFromHtmlFile = (filePath) => {
  const relative = path.relative(distDir, filePath).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"index.html".length)}`;
  return `/${relative}`;
};

const expectedCanonical = (route) => `${siteOrigin}${route}`;

if (!fs.existsSync(distDir)) {
  console.error("SEO validation failed: dist/ does not exist. Run astro build first.");
  process.exit(1);
}

const sitemapFiles = fs
  .readdirSync(distDir)
  .filter((file) => /^sitemap-\d+\.xml$/.test(file))
  .map((file) => path.join(distDir, file));

if (sitemapFiles.length === 0) {
  errors.push("sitemap: no sitemap-N.xml output found");
}

const sitemapUrls = [];
for (const sitemapFile of sitemapFiles) {
  const xml = fs.readFileSync(sitemapFile, "utf8");
  sitemapUrls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decodeHtml(match[1])));
}

const duplicateSitemapUrls = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index);
for (const url of new Set(duplicateSitemapUrls)) errors.push(`sitemap: duplicate URL ${url}`);

const sitemapPaths = new Map();
for (const urlString of sitemapUrls) {
  let url;
  try {
    url = new URL(urlString);
  } catch {
    errors.push(`sitemap: invalid URL ${urlString}`);
    continue;
  }
  if (url.origin !== siteOrigin) errors.push(`sitemap: external origin ${urlString}`);
  sitemapPaths.set(url.pathname, urlString);
}

const htmlFiles = walkFiles(distDir, ".html");
const pages = htmlFiles.map((filePath) => {
  const route = routeFromHtmlFile(filePath);
  const html = fs.readFileSync(filePath, "utf8");
  const title = normalizeText(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  const description = normalizeText(getMetaContent(html, "description"));
  const robots = getMetaContent(html, "robots").toLowerCase();
  const canonical = getCanonical(html);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const isInSitemap = sitemapPaths.has(route);
  return { filePath, route, html, title, description, robots, canonical, h1Count, isInSitemap };
});

const pageByRoute = new Map(pages.map((page) => [page.route, page]));
const indexablePages = pages.filter((page) => !page.robots.split(/\s*,\s*/).includes("noindex"));
const sitemapPages = pages.filter((page) => page.isInSitemap);

for (const page of pages) {
  const label = page.route;
  if (!page.title) errors.push(`${label}: missing title`);
  else if (page.title.length > titleMaxLength) {
    errors.push(`${label}: title is ${page.title.length} characters (max ${titleMaxLength})`);
  }

  if (!page.description) errors.push(`${label}: missing meta description`);
  else if (page.description.length > descriptionMaxLength) {
    errors.push(
      `${label}: meta description is ${page.description.length} characters (max ${descriptionMaxLength})`,
    );
  }

  if (page.h1Count !== 1) errors.push(`${label}: expected 1 H1, found ${page.h1Count}`);
  if (!page.canonical) errors.push(`${label}: missing canonical`);

  if (page.route !== "/404.html" && page.canonical) {
    const expected = page.isInSitemap
      ? sitemapPaths.get(page.route)
      : expectedCanonical(page.route);
    if (page.canonical !== expected) {
      errors.push(`${label}: canonical ${page.canonical} does not match ${expected}`);
    }
  }

  for (const match of page.html.matchAll(/<img\b[^>]*>/gi)) {
    if (getAttribute(match[0], "alt") === null) {
      const src = getAttribute(match[0], "src") ?? "(unknown source)";
      errors.push(`${label}: image is missing alt attribute (${src})`);
    }
  }

  for (const match of page.html.matchAll(/<a\b[^>]*>/gi)) {
    const href = getAttribute(match[0], "href");
    if (!href || href.startsWith("#")) continue;
    if (/^(?:mailto|tel|javascript|data):/i.test(href)) continue;

    let target;
    try {
      target = new URL(href, `${siteOrigin}${page.route}`);
    } catch {
      errors.push(`${label}: invalid internal link ${href}`);
      continue;
    }

    if (target.origin !== siteOrigin) continue;
    let targetRoute = target.pathname;
    if (/\.(?:avif|css|gif|jpe?g|js|mp4|pdf|png|svg|webm|webp|woff2?)$/i.test(targetRoute)) {
      continue;
    }
    if (!path.posix.extname(targetRoute) && !targetRoute.endsWith("/")) targetRoute += "/";
    if (!pageByRoute.has(targetRoute)) {
      errors.push(`${label}: broken internal link ${href} -> ${targetRoute}`);
    }
  }
}

for (const [sitemapPath, sitemapUrl] of sitemapPaths) {
  const page = pageByRoute.get(sitemapPath);
  if (!page) {
    errors.push(`sitemap: ${sitemapUrl} has no generated HTML page`);
    continue;
  }
  const robotsTokens = page.robots.split(/\s*,\s*/);
  if (!robotsTokens.includes("index") || !robotsTokens.includes("follow") || robotsTokens.includes("noindex")) {
    errors.push(`${sitemapPath}: sitemap page must use index, follow (found "${page.robots}")`);
  }
}

for (const page of indexablePages) {
  if (page.route !== "/404.html" && !page.isInSitemap) {
    errors.push(`${page.route}: indexable page is missing from sitemap`);
  }
}

const checkDuplicates = (field, label) => {
  const values = new Map();
  for (const page of sitemapPages) {
    const value = page[field];
    if (!value) continue;
    values.set(value, [...(values.get(value) ?? []), page.route]);
  }
  for (const [value, routes] of values) {
    if (routes.length > 1) errors.push(`duplicate ${label} on ${routes.join(", ")}: "${value}"`);
  }
};

checkDuplicates("title", "title");
checkDuplicates("description", "meta description");

if (errors.length > 0) {
  console.error(`SEO validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `SEO validation passed: ${pages.length} HTML page(s), ${sitemapUrls.length} sitemap URL(s), and all internal links checked.`,
);

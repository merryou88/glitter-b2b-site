import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const imagesDir = path.join(root, "public");

const MAX_WIDTH = 1200;

let compressed = 0;
let resized = 0;
let skipped = 0;
let totalSaved = 0;
const report = [];

async function optimizeFile(file) {
  const ext = path.extname(file).toLowerCase();
  const stat = fs.statSync(file);
  const originalSize = stat.size;

  if (originalSize < 50 * 1024) {
    skipped++;
    return;
  }

  const meta = await sharp(file).metadata();
  const width = meta.width ?? 0;
  const needsResize = width > MAX_WIDTH;

  let pipeline = sharp(file);
  if (needsResize) pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });

  const outBuffer =
    ext === ".png"
      ? await pipeline.png({ quality: 85, compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();

  const saved = originalSize - outBuffer.length;
  if (saved > 0) {
    fs.writeFileSync(file, outBuffer);
    compressed++;
    totalSaved += saved;
    report.push(
      `${path.relative(root, file)}: ${(originalSize / 1024).toFixed(0)}KB → ${(outBuffer.length / 1024).toFixed(0)}KB${needsResize ? ` [resized ${width}→${MAX_WIDTH}]` : ""}`,
    );
  } else {
    skipped++;
  }
}

async function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      await optimizeFile(full);
    }
  }
}

await walk(imagesDir);

console.log(`\n=== JPG/PNG 压缩完成 ===`);
console.log(`压缩 ${compressed} 个文件`);
console.log(`跳过 ${skipped} 个文件`);
console.log(`共节省 ${(totalSaved / 1024 / 1024).toFixed(1)} MB`);
if (report.length) {
  console.log("\n压缩明细:");
  for (const line of report) console.log(line);
}

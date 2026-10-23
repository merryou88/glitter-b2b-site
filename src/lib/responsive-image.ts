import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

// Lazy metadata imports: only requested hero assets generate variants at build time.
const sources = import.meta.glob<{ default: ImageMetadata }>([
  '/public/images/**/*.webp',
  '/public/shots/**/*.webp',
]);

export async function responsiveImage(src: string) {
  const load = sources[`/public${src}`];
  if (!load) throw new Error(`Missing responsive image source: ${src}`);
  const { default: source } = await load();
  return getImage({
    src: source,
    widths: [...new Set([480, 720, 1080, 1440].map(width => Math.min(width, source.width)))],
    width: Math.min(1080, source.width),
    format: 'webp',
    quality: 80,
  });
}

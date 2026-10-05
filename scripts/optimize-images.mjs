/**
 * Optimize every raster asset in /public.
 *
 * Portraits render in ~400px card slots, hero/gallery shots go full-bleed —
 * so they get different width caps. Each source also gets a matching .webp
 * so <Img> can serve it.
 *
 * Originals are NOT recoverable from here: back up /public first.
 *   node scripts/optimize-images.mjs [--dry]
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC = new URL('../public', import.meta.url).pathname;
const DRY = process.argv.includes('--dry');

// Longest edge the asset is ever painted at, x2 for retina.
const RULES = [
  { test: /^(favicon|logo-mark)/i, width: 512, q: 82 },
  { test: /^(speaker|org)-/i, width: 900, q: 78 },
  { test: /^(photo-gallery|lastyear)-/i, width: 1400, q: 74 },
  { test: /^map-turkey/i, width: 1400, q: 78 },
  { test: /.*/, width: 1920, q: 76 },
];

const ruleFor = (f) => RULES.find((r) => r.test.test(f));

const kb = (n) => Math.round(n / 1024);
let before = 0;
let after = 0;

const files = (await readdir(PUBLIC)).filter((f) =>
  ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase()),
);

for (const file of files.sort()) {
  const path = join(PUBLIC, file);
  const rule = ruleFor(file);
  const src = (await stat(path)).size;
  before += src;

  const meta = await sharp(path).metadata();
  const resize = (meta.width ?? 0) > rule.width ? { width: rule.width } : undefined;
  const isPng = extname(file).toLowerCase() === '.png';

  const tmp = `${path}.tmp`;
  const pipe = sharp(path, { failOn: 'none' }).rotate().resize(resize);
  await (isPng
    ? pipe.png({ quality: rule.q, compressionLevel: 9, palette: true }).toFile(tmp)
    : pipe.jpeg({ quality: rule.q, mozjpeg: true, progressive: true }).toFile(tmp));

  const out = (await stat(tmp)).size;

  // WebP sibling, always regenerated from the (rotated, resized) source.
  const webpPath = join(PUBLIC, `${basename(file, extname(file))}.webp`);
  const webpTmp = `${webpPath}.tmp`;
  await sharp(path, { failOn: 'none' })
    .rotate()
    .resize(resize)
    .webp({ quality: rule.q })
    .toFile(webpTmp);
  const webpOut = (await stat(webpTmp)).size;

  if (DRY) {
    console.log(`  ${file}: ${kb(src)}K → ${kb(out)}K (webp ${kb(webpOut)}K)`);
    await unlink(tmp);
    await unlink(webpTmp);
    after += Math.min(src, out);
    continue;
  }

  if (out < src) {
    await rename(tmp, path);
    after += out;
    console.log(`✓ ${file}: ${kb(src)}K → ${kb(out)}K · webp ${kb(webpOut)}K`);
  } else {
    await unlink(tmp);
    after += src;
    console.log(`- ${file}: kept ${kb(src)}K · webp ${kb(webpOut)}K`);
  }
  await rename(webpTmp, webpPath);
}

console.log(
  `\n${files.length} files · ${Math.round(before / 1024 / 1024)}MB → ${Math.round(after / 1024 / 1024)}MB (source formats, excl. webp)`,
);

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC = new URL('../public', import.meta.url).pathname;
const SIZE_THRESHOLD = 400 * 1024; // re-compress WebP files > 400KB
const MAX_WIDTH = 1600;
const QUALITY = 72;

const files = await readdir(PUBLIC);

for (const file of files) {
  if (extname(file).toLowerCase() !== '.webp') continue;
  const path = join(PUBLIC, file);
  const { size } = await stat(path);
  if (size < SIZE_THRESHOLD) continue;

  const before = Math.round(size / 1024);
  try {
    const meta = await sharp(path).metadata();
    const resize = (meta.width ?? 0) > MAX_WIDTH ? { width: MAX_WIDTH } : undefined;
    const tmp = path + '.tmp';
    await sharp(path)
      .resize(resize)
      .webp({ quality: QUALITY })
      .toFile(tmp);
    const { size: after } = await stat(tmp);
    const afterKb = Math.round(after / 1024);
    // replace original only if smaller
    if (after < size) {
      await sharp(tmp).toFile(path);
      console.log(`✓ ${file}: ${before}K → ${afterKb}K`);
    } else {
      console.log(`- ${file}: kept (${before}K, re-compressed would be ${afterKb}K)`);
    }
    // clean up tmp
    const { unlink } = await import('fs/promises');
    await unlink(tmp).catch(() => {});
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}

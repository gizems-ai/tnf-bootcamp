import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC = new URL('../public', import.meta.url).pathname;
const TARGETS = ['photo-talk.png', 'logo-mark.png', 'logo-mark-inline.png'];

const files = await readdir(PUBLIC);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  const src = join(PUBLIC, file);
  const dest = join(PUBLIC, basename(file, ext) + '.webp');
  try {
    await sharp(src).webp({ quality: 82 }).toFile(dest);
    console.log(`✓ ${file} → ${basename(file, ext)}.webp`);
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`);
  }
}

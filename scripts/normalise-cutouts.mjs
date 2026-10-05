/**
 * Build the /speakers-alt portrait tiles: subject cut out of its background,
 * desaturated, and framed on the face so every head lands at the same scale.
 *
 * Two macOS Vision helpers do the vision work — compile them once:
 *   swiftc -O scripts/cutout.swift  -o scripts/cutout      # subject mask
 *   swiftc -O scripts/facebox.swift -o scripts/facebox     # largest face rect
 *
 * Then point SRC at a folder of source photos named after the card
 * (e.g. speaker-tanja.jpg → public/cut/speaker-tanja.webp):
 *   node scripts/normalise-cutouts.mjs <src-dir>
 */
import sharp from 'sharp';
import { execFileSync } from 'child_process';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node scripts/normalise-cutouts.mjs <src-dir>'); process.exit(2); }

const OUT = 'public/cut';
const TMP = join(SRC, '.cut');
const TW = 760, TH = 950;   // 4:5 tile
const F = 0.30;             // face height as a share of tile height
const EYE = 0.36;           // face centre, measured down from the tile top
const FADE = 0.88;          // alpha ramps to zero over the last 12% — hides hard crop edges

await mkdir(OUT, { recursive: true });
await mkdir(TMP, { recursive: true });

const fade = Buffer.from(
  `<svg width="${TW}" height="${TH}"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">` +
  `<stop offset="${FADE}" stop-color="#fff" stop-opacity="1"/>` +
  `<stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>` +
  `<rect width="${TW}" height="${TH}" fill="url(#g)"/></svg>`);

const sources = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of sources.sort()) {
  const name = basename(file, extname(file));
  const cut = join(TMP, `${name}.png`);
  try { execFileSync('scripts/cutout', [join(SRC, file), cut], { stdio: 'ignore' }); }
  catch { console.log(`SKIP ${name} — no subject found`); continue; }

  const probe = execFileSync('scripts/facebox', [cut]).toString().trim();
  if (probe === 'NOFACE') { console.log(`SKIP ${name} — no face found`); continue; }
  const [fx, fy, fw, fh] = probe.split(' ').map(Number);
  const { width: W, height: H } = await sharp(cut).metadata();

  const cw = Math.round((fh / F) * 0.8), ch = Math.round(fh / F);
  const top = Math.round(fy + fh / 2 - EYE * ch);
  const left = Math.round(fx + fw / 2 - cw / 2);
  const pad = Math.max(0, -top, -left, top + ch - H, left + cw - W) + 2;

  // sharp runs extend *after* extract within one pipeline, so pad in its own pass
  const padded = await sharp(cut).ensureAlpha()
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toBuffer();

  const framed = await sharp(padded)
    .extract({ left: left + pad, top: top + pad, width: cw, height: ch })
    .resize(TW, TH, { fit: 'fill', kernel: 'lanczos3' })
    .grayscale()
    .linear(1.06, -14)
    .png().toBuffer();

  await sharp(framed)
    .composite([{ input: fade, blend: 'dest-in' }])
    .webp({ quality: 84, alphaQuality: 92 })
    .toFile(join(OUT, `${name}.webp`));

  console.log(`${name}  face ${fh}px  ${(TW / cw).toFixed(1)}x upscale`);
}

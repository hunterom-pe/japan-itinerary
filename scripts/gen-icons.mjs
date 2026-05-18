import sharp from "sharp";
import { writeFileSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const baseSvg = (size, maskable = false) => {
  const pad = maskable ? size * 0.15 : size * 0.0;
  const inner = size - pad * 2;
  const sun = inner * 0.42;
  const cx = size / 2;
  const cy = size / 2;
  const fontSize = inner * 0.42;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" fill="#f5efe1"/>
    <circle cx="${cx}" cy="${cy}" r="${sun}" fill="#bc002d"/>
    <text x="${cx}" y="${cy + fontSize * 0.35}" text-anchor="middle"
      font-family="Hiragino Mincho ProN, Shippori Mincho, serif"
      font-size="${fontSize}" font-weight="700" fill="#f5efe1">日</text>
  </svg>`;
};

async function gen(size, name, maskable = false) {
  const svg = baseSvg(size, maskable);
  const out = resolve(root, "public", name);
  await sharp(Buffer.from(svg)).png().toFile(out);
  console.log("wrote", name);
}

await gen(192, "icon-192.png");
await gen(512, "icon-512.png");
await gen(512, "icon-512-maskable.png", true);
await gen(180, "apple-touch-icon.png");

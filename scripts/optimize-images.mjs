/**
 * Gera WebP otimizados em public/images a partir dos assets-fonte.
 * Uso: npm run optimize:images
 *
 * - Hero: variantes 640 / 960 / 1280 a partir de hero-professionals.webp
 * - Fotos SVG (PNG embutido): WebP na resolução intrínseca do SVG
 *   (sem upscale — a fonte é ~240px)
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const WEBP_QUALITY = 80;

async function writeWebp(inputPath, outputName, width) {
  const outputPath = path.join(imagesDir, outputName);
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log(
    `  ${outputName} (${meta.width}x${meta.height}, ${Math.round((meta.size ?? 0) / 1024)}KB)`,
  );
}

async function main() {
  await mkdir(imagesDir, { recursive: true });

  const heroSource = path.join(imagesDir, "hero-professionals.webp");
  console.log("Hero variants:");
  for (const width of [640, 960, 1280]) {
    await writeWebp(heroSource, `hero-professionals-${width}.webp`, width);
  }

  console.log("Professionals:");
  await writeWebp(
    path.join(imagesDir, "dra-fresia.svg"),
    "dra-fresia.webp",
    800,
  );
  await writeWebp(
    path.join(imagesDir, "dr-sergio.svg"),
    "dr-sergio.webp",
    800,
  );

  console.log("Techniques:");
  await writeWebp(
    path.join(imagesDir, "tech-micro.svg"),
    "tech-micro.webp",
    640,
  );
  await writeWebp(
    path.join(imagesDir, "tech-psychk.svg"),
    "tech-psychk.webp",
    640,
  );
  await writeWebp(
    path.join(imagesDir, "tech-biode.svg"),
    "tech-biode.webp",
    640,
  );

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

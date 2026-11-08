/**
 * Gera WebP otimizados em public/images a partir dos assets-fonte.
 * Uso: npm run optimize:images
 *
 * - Hero: variantes 480 / 640 / 960 / 1280 / 1600 / 2048 a partir de assets/photos/hero.jpg
 * - Profissionais: WebP (até 1200px) a partir de assets/photos/*.jpg
 * - As fotos em assets/photos foram ampliadas 2x (Real-ESRGAN mesclado 50% com lanczos)
 * - Técnicas: logos (até 1000px) a partir de assets/logos/*.png, ampliados 4x com
 *   Real-ESRGAN (modelo anime, adequado para gráficos) e sem margens
 */
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");
const photosDir = path.join(__dirname, "..", "assets", "photos");
const logosDir = path.join(__dirname, "..", "assets", "logos");

const WEBP_QUALITY = 80;
/** Qualidade um pouco menor na variante LCP mobile. */
const WEBP_QUALITY_MOBILE = 75;
/** Logos com texto fino borram com compressão mais agressiva. */
const WEBP_QUALITY_LOGO = 90;

async function writeWebp(inputPath, outputName, width, quality = WEBP_QUALITY) {
  const outputPath = path.join(imagesDir, outputName);
  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(outputPath);

  const meta = await sharp(outputPath).metadata();
  console.log(
    `  ${outputName} (${meta.width}x${meta.height}, ${Math.round((meta.size ?? 0) / 1024)}KB)`,
  );
}

async function main() {
  await mkdir(imagesDir, { recursive: true });

  const heroSource = path.join(photosDir, "hero.jpg");
  console.log("Hero variants:");
  await writeWebp(
    heroSource,
    "hero-professionals-480.webp",
    480,
    WEBP_QUALITY_MOBILE,
  );
  for (const width of [640, 960, 1280, 1600, 2048]) {
    await writeWebp(heroSource, `hero-professionals-${width}.webp`, width);
  }

  console.log("Professionals:");
  await writeWebp(
    path.join(photosDir, "dra-fresia.jpg"),
    "dra-fresia.webp",
    1200,
  );
  await writeWebp(
    path.join(photosDir, "dr-sergio.jpg"),
    "dr-sergio.webp",
    1200,
  );

  console.log("Techniques:");
  await writeWebp(
    path.join(logosDir, "microfisioterapia.png"),
    "tech-micro.webp",
    1000,
    WEBP_QUALITY_LOGO,
  );
  await writeWebp(
    path.join(logosDir, "psych-k.png"),
    "tech-psychk.webp",
    1000,
    WEBP_QUALITY_LOGO,
  );
  await writeWebp(
    path.join(logosDir, "biodecodage.png"),
    "tech-biode.webp",
    1000,
    WEBP_QUALITY_LOGO,
  );

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

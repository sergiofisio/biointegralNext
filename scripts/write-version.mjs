import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const buildId = process.env.NEXT_PUBLIC_BUILD_ID ?? `local-${Date.now()}`;
const builtAt = new Date().toISOString();
const outDir = join(process.cwd(), "out");
const payload = JSON.stringify({ buildId, builtAt }, null, 2);

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(join(outDir, "version.json"), payload);
console.log(`version.json → buildId=${buildId}`);

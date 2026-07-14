/**
 * Build estático com buildId único compartilhado entre:
 * - NEXT_PUBLIC_BUILD_ID (embutido no JS)
 * - out/version.json (lido pelo SiteVersionGuard)
 *
 * Uso: node scripts/build-static.mjs
 * Respeita NEXT_PUBLIC_BUILD_ID se já estiver definido (ex.: CI = github.sha).
 */
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function resolveBuildId() {
  const fromEnv = process.env.NEXT_PUBLIC_BUILD_ID?.trim();
  if (fromEnv && fromEnv !== "development") return fromEnv;

  const git = spawnSync("git", ["rev-parse", "--short", "HEAD"], {
    cwd: root,
    encoding: "utf8",
  });
  if (git.status === 0 && git.stdout?.trim()) {
    return git.stdout.trim();
  }

  return `local-${Date.now()}`;
}

function run(command, args, env) {
  const result = spawnSync(command, args, {
    cwd: root,
    env,
    stdio: "inherit",
    shell: process.platform === "win32",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

const buildId = resolveBuildId();
const env = {
  ...process.env,
  STATIC_EXPORT: "true",
  NEXT_PUBLIC_BUILD_ID: buildId,
};

console.log(`build:static → NEXT_PUBLIC_BUILD_ID=${buildId}`);

run("npx", ["next", "build"], env);
run("node", ["scripts/write-version.mjs"], env);

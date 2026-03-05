import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";

const shouldAnalyze = process.env.ANALYZE === "true";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression({ algorithm: "brotliCompress" }),
    svgr(),
    shouldAnalyze && visualizer({ open: true }),
  ].filter(Boolean),
  build: {
    sourcemap: false,
    target: "es2018",
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";
import compression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: true }),
    compression({ algorithm: "brotliCompress" }),
    svgr(),
  ],
});

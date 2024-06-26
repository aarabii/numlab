import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"], // Using ESM (ES Modules)
  target: "es2022",
  sourcemap: true, // Generate sourcemaps for debugging
  dts: true, // Generate TypeScript declaration files
  clean: true, // Clean the output directory before each build
  outDir: "dist", // Output directory
  minify: false, // Optional: Enable if you want to minify the output
  splitting: false, // Optional: Disable code splitting
});

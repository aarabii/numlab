import { defineConfig } from "tsup";
export default defineConfig({
  entry: [
    "src/index.ts",
    "src/arithmetic/index.ts",
    "src/advancedMath/index.ts",
    "src/numberClassification/index.ts",
    "src/linearAlgebra/index.ts",
  ],
  format: ["esm", "cjs"],
  target: "es2022",
  sourcemap: true,
  dts: true,
  clean: true,
  outDir: "dist",
  minify: false,
  splitting: false,
});

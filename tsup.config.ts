import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/arithmetic/index.ts",
    "src/advancedMath/index.ts",
    "src/linearAlgebra/index.ts",
    "src/logarithms/index.ts",
    "src/numberClassification/index.ts",
    "src/random/index.ts",
    "src/statistics/index.ts",
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

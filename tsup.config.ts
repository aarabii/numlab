import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/functions/index.ts",
    "src/functions/arithmetic.ts",
    "src/functions/advancedMath.ts",
    "src/functions/linearAlgebra.ts",
    "src/functions/logarithms.ts",
    "src/functions/random.ts",
    "src/functions/statistics.ts",
    "src/functions/trigonometry.ts",
    "src/types/index.ts",
    "src/types/advancedMath.types.ts",
    "src/types/arithmetic.types.ts",
    "src/types/linearAlgebra.types.ts",
    "src/types/logarithms.types.ts",
    "src/types/numberClassification.types.ts",
    "src/types/random.types.ts",
    "src/types/statistics.types.ts",
    "src/types/trigonometry.types.ts",
  ],
  format: ["esm", "cjs"],
  target: "es2022",
  sourcemap: true,
  dts: true,
  clean: true,
  outDir: "dist",
  minify: false,
  splitting: true,
  outExtension: (ctx) => {
    return {
      js: ctx.format === "esm" ? ".esm.js" : ".cjs.js",
    };
  },
});

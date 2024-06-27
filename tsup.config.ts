import { defineConfig } from "tsup";
import { readdirSync } from "fs";
import { join } from "path";

function getDirectories(path: string): string[] {
  return readdirSync(path, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

function getEntries(): string[] {
  const modulesDir = join(__dirname, "src");
  const moduleNames = getDirectories(modulesDir);
  const entries: string[] = [];
  moduleNames.forEach((moduleName) => {
    const modulePath = join(modulesDir, moduleName, "index.ts");
    entries.push(modulePath);
  });
  return entries;
}

export default defineConfig({
  entry: [...getEntries()],
  format: ["esm", "cjs"],
  target: "es2022",
  sourcemap: true,
  dts: true,
  clean: true,
  outDir: "dist",
  minify: false,
  splitting: false,
});

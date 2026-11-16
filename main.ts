/**
 * Copies the entry.png sitting beside this script into the directory named by
 * MAKEFUN_OUTPUT_DIR (default "/output"), creating that directory if missing.
 */
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const source = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const destination = join(outputDir, "entry.png");

if (!existsSync(source)) {
  console.error(`error: entry.png is missing (looked in ${source})`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

const bytes = statSync(destination).size;
console.log(`wrote ${bytes} bytes to ${destination}`);

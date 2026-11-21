// news-image-20261120 entrypoint: "Friday 20 November 2026 — The World
// in One Image". Copies the pre-built collage (entry.png, beside this
// file) into the grader's output directory. The collage sums up the day's
// news in 6 illustrated lead panels, a world-map strip and 30 briefs.
// Node standard library only, no network.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

// The grader hands us a writable /output, but creating it when missing
// keeps local runs (`MAKEFUN_OUTPUT_DIR=out node main.ts`) working too.
mkdirSync(outDir, { recursive: true });

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

// Fail fast on a corrupt source: check the source file's PNG magic bytes
// before copying, so a bad entry.png never reaches the output directory.
const sourceHead = readFileSync(source).subarray(0, 8);
if (!sourceHead.equals(PNG_MAGIC)) {
  throw new Error(
    `entry.png is not a valid PNG at the source: bad magic bytes ${sourceHead.toString("hex")}, expected 89504e470d0a1a0a`,
  );
}

const expected = statSync(source).size;
copyFileSync(source, dest);
const actual = statSync(dest).size;
if (actual !== expected) {
  throw new Error(
    `entry.png copy failed: wrote ${actual} bytes to ${dest}, expected ${expected} bytes from ${source}`,
  );
}
const head = readFileSync(dest).subarray(0, 8);
if (!head.equals(PNG_MAGIC)) {
  throw new Error(
    `entry.png is not a valid PNG after copy: bad magic bytes ${head.toString("hex")}, expected 89504e470d0a1a0a`,
  );
}
console.log(`wrote ${dest} (${actual} bytes)`);

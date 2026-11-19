// news-image-20261118 — "Sum up 18 November's world news in one image".
//
// The entry is a single poster, entry.png (1024x1024, under 1 MiB), sitting next
// to this file. This program's only job is to place those exact bytes at
// <output>/entry.png, where the grader looks for them. It performs no network
// calls and no image processing, so repeated runs always produce identical output.
//
// What the poster sums up — Wednesday, 18 November 2026:
//   * The first-ever trilateral Trump–Xi–Putin summit in Shenzhen, with Ukraine,
//     nuclear risk and global security on the table.
//   * The Crimean Bridge partially collapsing after a Ukrainian strike, severing
//     the road link to occupied Crimea.
//   * Democrat Mary Peltola defeating Dan Sullivan in Alaska, giving Democrats a
//     projected 56–44 Senate majority.
//   * The International Court of Justice ruling that Myanmar committed genocide
//     against the Rohingya.
//   * The Gaza ceasefire under strain, with the Board of Peace warning it could
//     collapse.
//
// The output directory is /output inside the grader's sandbox; outside it, set
// MAKEFUN_OUTPUT_DIR to a local folder instead:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const info = statSync(sourceImage);
if (!info.isFile() || info.size === 0) {
  throw new Error(`entry image missing or empty: ${sourceImage}`);
}
// The bounty gate rejects images over 1 MiB; fail loudly instead of shipping one.
if (info.size > 1024 * 1024) {
  throw new Error(`entry image too large for the gate: ${info.size} bytes`);
}

mkdirSync(resolve(outputDir), { recursive: true });
writeFileSync(join(outputDir, 'entry.png'), readFileSync(sourceImage));
console.log(`wrote entry.png (${info.size} bytes) to ${resolve(outputDir)}`);

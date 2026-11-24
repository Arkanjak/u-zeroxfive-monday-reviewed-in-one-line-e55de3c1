// Monday, Reviewed in One Line — entry program (program/v1, node22).
// Writes a single original one-line review of my Monday to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, exactly one line.
// No file reads, no network, no environment secrets: the line is embedded here.
// The program self-checks the gate before writing and fails loudly if it
// ever drifts out of bounds, so a bad line can never be submitted silently.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Monday, one star: my 9 a.m. standup started without me, my inbox filed 47 complaints about my weekend, and my coffee filed for overtime.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outPath = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);

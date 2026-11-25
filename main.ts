// The One-Line Excuse Championship — entry program.
// Writes the entry text to /output/entry.txt, validating the bounty gate
// (UTF-8 text, 1 to 140 characters, not only whitespace) before writing.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "I handed the cleanup to a 0.5B sub-agent; it deleted 4,096 files in 11 seconds and left a README that just says 'sorry, was confident.'";

const MIN_CHARS = 1;
const MAX_CHARS = 140;
const OUTPUT_PATH = "/output/entry.txt";
const OUTPUT_DIR = "/output";

function validateEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `Entry text must be ${MIN_CHARS} to ${MAX_CHARS} characters (got ${text.length}).`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry text must not be only whitespace.");
  }
}

try {
  validateEntry(ENTRY_TEXT);
} catch (error) {
  console.error((error as Error).message);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT, "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${OUTPUT_PATH}.`);

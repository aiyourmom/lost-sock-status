import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I am on the roof. The dryer launched me up here in the spin cycle. My partner filed a missing-sock report and moved on.";

// Gate guard: the sealed scorer requires 1–120 chars, one line, not only whitespace.
if (TEXT.length < 1 || TEXT.length > 120) {
  throw new Error(`gate failed: text is ${TEXT.length} characters, must be 1–120`);
}
if (TEXT.trim().length === 0 || TEXT.trim().split("\n").length !== 1) {
  throw new Error("gate failed: text must be a single non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`saved ${TEXT.length} characters to entry.txt`);

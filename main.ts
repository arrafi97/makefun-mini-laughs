// make.fun Mini entry: "One-Liner Laughs"
// A tiny Node 22 program (standard library only, no network). It writes a
// single funny line of at most 200 characters to <output>/entry.txt and
// reports its length.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: the smart speaker has heard every question we ask it, and
// its tech-support answer turns out to apply to us too. The turn is the
// last two words: the machine is right.
const LINE =
  "I asked my smart speaker to tell me a joke. It said, 'Have you tried turning yourself off and on again?' — and honestly, fair point.";

// The bounty's gate: UTF-8 text, 1 to 200 characters, exactly one line,
// and not blank. Count code points, not UTF-16 units, so the em dash
// counts as one character.
function checkLine(text: string): number {
  const n = [...text].length;
  if (text.trim() === "" || n < 1 || n > 200 || text.includes("\n")) {
    throw new Error(`line must be one line of 1-200 characters, got ${n}`);
  }
  return n;
}

const chars = checkLine(LINE);

// Write the line. The output directory comes from $MAKEFUN_OUTPUT_DIR
// when set, otherwise /output. The file holds exactly the line — no
// trailing newline — so two runs always produce byte-identical files.
// A trailing newline would change the byte count, so there is none.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
console.log(`wrote entry.txt (${chars} chars)`);

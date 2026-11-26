// Write the contest entry as one UTF-8 line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "WARNING: May buy vegetables for their future self, then order pizza.";

if ([...text].length < 1 || [...text].length > 159 || !text.trim()) {
  throw new Error("Entry must contain 1-159 nonblank Unicode characters.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");

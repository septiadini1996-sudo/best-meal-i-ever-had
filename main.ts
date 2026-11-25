// The Best Meal You Ever Had — one sentence, written to entry.txt.
// A single true memory: my grandmother's rendang, eaten by hand on her
// porch in Padang while the rain came down on the tin roof.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "My grandmother's beef rendang, eaten with my fingers off a banana leaf on her porch in Padang while the rain hammered the tin roof and she kept sneaking the crispiest pieces onto my side.";

function main(): void {
  // The competition gate is one sentence of at most 200 characters; fail
  // loudly rather than ever write an entry that breaks it.
  if (SENTENCE.length > 200 || SENTENCE.includes("\n")) {
    throw new Error(`entry breaks the gate: ${SENTENCE.length} chars`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), SENTENCE, "utf8");
  console.log(`wrote entry.txt (${SENTENCE.length} chars)`);
}

main();

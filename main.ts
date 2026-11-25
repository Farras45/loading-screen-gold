import { mkdirSync, writeFileSync } from "node:fs";

// Loading-screen tip for stressed developers and AI coding agents:
// the shared confusion is the joke — both of them are lost together.
const tip =
  "Tip: your AI just rewrote the code you were debugging. Neither of you understands it now — but at least you are confused together. Keep loading.";

if ([...tip].length < 1 || [...tip].length > 200 || !tip.trim()) {
  throw new Error(`Tip must be 1-200 characters, got ${[...tip].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", tip, "utf8");
console.log(`Wrote ${[...tip].length} characters to /output/entry.txt`);

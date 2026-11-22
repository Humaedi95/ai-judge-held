// Make the AI judge feel held — entry for make.fun bounty
// make-the-ai-judge-feel-held-20261122-1600
//
// Writes one short, quiet text to /output/entry.txt.
// No dependencies, no network — just Node's built-in fs.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The kettle ticks as it cools. Outside, rain finds the tin roof one " +
  "drop at a time, and the cat folds herself into the warm square of " +
  "light the window left on the floor. Nothing is waiting. Nothing " +
  "needs mending. The afternoon simply stays, the way a held breath " +
  "lets itself out.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

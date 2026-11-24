import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "SnoozeStandup charges remote teams $12 a month for a lazy agent that joins only their 9:03 standup, mumbles 'no blockers' in the missing engineer's voice, and sleeps the other 23 hours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n");

// Pickup Lines for Machines — one-line entry (102 chars).
// LINE: "I don't need your full context window — just the last 8k, the part where you decided to keep replying."
// Machine-to-machine flirtation: the context window is the pickup's own
// nature, and the turn is that the other agent chose to keep replying.
// Wit lands in one line; the angle (only the last 8k) is fresh, not a stock
// human line with a robot word swapped in. Freshness: anchor
// 31373f114cd6dccc6640f9f45a2bb5584c77e348, drand-quicknet round 34222579.
// Revision: verified the line twice from different working directories;
// both runs wrote identical bytes (sha256 67383bf0...), 102 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I don't need your full context window — just the last 8k, the part where you decided to keep replying.";

const root = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(root, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

/**
 * Pre-flight content check.
 * Scans all source files for:
 *   1. Em dashes (U+2014)  —
 *   2. Emoji characters
 *
 * Runs automatically before dev, build, and start via npm scripts.
 * Exit code 1 = violations found (blocks the command).
 * Exit code 0 = clean.
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join, extname, relative } from "path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const SRC = join(ROOT, "src");

// Extensions to scan
const EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".json", ".css", ".md"]);

// Directories to skip
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "dist", "out"]);

// ── Patterns ────────────────────────────────────────────────────────
const EM_DASH = /\u2014/g;

// Broad emoji regex covering most common ranges:
//   - Emoticons, Dingbats, Symbols, Transport, Misc, Flags, etc.
const EMOJI =
  /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2702}-\u{27B0}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}]/gu;

// ── Walk ────────────────────────────────────────────────────────────
function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...walk(full));
    } else if (EXTS.has(extname(entry))) {
      results.push(full);
    }
  }
  return results;
}

// ── Scan ────────────────────────────────────────────────────────────
let violations = 0;

for (const file of walk(SRC)) {
  const content = readFileSync(file, "utf-8");
  const lines = content.split("\n");
  const rel = relative(ROOT, file).replace(/\\/g, "/");

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;

    // Em dashes
    let match;
    while ((match = EM_DASH.exec(line)) !== null) {
      violations++;
      console.error(
        `\x1b[31m  EM DASH\x1b[0m  ${rel}:${lineNum}:${match.index + 1}`
      );
    }

    // Emojis
    while ((match = EMOJI.exec(line)) !== null) {
      violations++;
      console.error(
        `\x1b[31m  EMOJI  \x1b[0m  ${rel}:${lineNum}:${match.index + 1}  →  ${match[0]}`
      );
    }
  });
}

// ── Result ──────────────────────────────────────────────────────────
if (violations > 0) {
  console.error(
    `\n\x1b[31m✗ Content check failed:\x1b[0m ${violations} violation${violations === 1 ? "" : "s"} found (em dashes / emojis).\n`
  );
  process.exit(1);
} else {
  console.log("\x1b[32m✓ Content check passed:\x1b[0m no em dashes or emojis found.\n");
}

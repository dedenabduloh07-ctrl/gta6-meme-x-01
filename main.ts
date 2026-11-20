// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: a GTA 6 meme posted on X from a public
// account, carrying make.fun (a link or written out) and/or a tag of
// @makefunai plus the entrant's play code in its text. This program does
// exactly one thing: it copies POST.json from the repository root to
// /output/POST.json, where the gate reads the post's address. The house
// reads the post from X (its first picture and its text) and hands that
// dossier to the judge. Nothing this program writes is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// Where the repository is mounted in the grader, and where the gate
// expects POST.json to land. Both are overridable for local runs.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the output directory exists, then hand the gate the post's
// address, byte for byte as it sits in the repository.
mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

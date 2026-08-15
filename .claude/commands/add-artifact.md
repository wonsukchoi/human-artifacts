---
description: Research and add a new place or object to Human Artifacts, decomposed down to its deepest sensible level
argument-hint: [name] [parent-slug (optional)]
---

You are extending the Human Artifacts site (`lib/data.ts`). $ARGUMENTS gives a name
(the place or object to add) and optionally a parent slug to nest it under
(e.g. `bathtub bathroom` nests bathtub under the bathroom room; `bathtub` alone
means figure out the best home for it yourself).

Work autonomously — this command is meant to run repeatedly without hand-holding.
Only stop and ask if something is genuinely ambiguous (e.g. the name could mean
two very different things).

## 1. Load current state

Read `lib/data.ts` in full. Build a mental list of every existing `slug` — you must
never create a duplicate. Note which existing leaf artifacts are **shared raw
materials or generic hardware** (steel, wood, glass, ceramic, fabric, wire, rubber,
polymer, monomer, chain-bond, carbon, hydrogen, oxygen, hinges, faucet, drain,
rivets, etc.) — these exist so multiple branches can reuse the same page instead
of duplicating content.

## 2. Research

Figure out, for the requested artifact:
- **what** it is — one plain factual sentence.
- **why** it exists — 1-2 sentences giving the actual causal reason humans need
  it (not a dictionary definition). Match the existing voice exactly: direct,
  concrete, no fluff, no "In today's world..." framing. Look at a few existing
  entries in `lib/data.ts` first to calibrate tone before writing.
- **has** — 2-3 parts/components it's made of or contains.

## 3. Decompose recursively, all the way down

For each part in `has`:
- If its slug (`name.toLowerCase().replace(/\s+/g, "-")`) already matches an
  existing artifact, **reuse it as-is** — just reference the name, don't create
  a new entry, don't edit the existing one. This is how the tree stays consistent
  (e.g. any wooden part points at the existing `wood` page).
- If it's new, write it as a full artifact and recurse into **its** parts the same
  way.
- Keep recursing until you hit a natural terminus:
  - a raw material (wood, steel, glass, ceramic, fabric, rubber, polymer...) —
    give it `has: []` unless it's genuinely useful to go one level further
    (like polymer → monomer → carbon/hydrogen/oxygen already does)
  - a simple mechanical/electrical primitive that doesn't meaningfully decompose
    further (spring, rivets, contacts, valve...)
  - true atomic level (carbon, hydrogen, oxygen) — never go past atoms; anything
    below that (subatomic particles) is physics, not a human artifact, so stop.

Don't force every branch to the same depth. A simple object bottoms out faster
than a mattress. Depth should track how many "why does it need to be built this
way" questions actually have interesting answers.

## 4. Avoid collisions, disambiguate when needed

If a part's plain name would collide with an existing slug but means something
materially different in this context (e.g. a new object also has a "frame" but
its frame isn't the same as the existing bed frame), prefix it with the parent's
name in the `has` string (`"<parent> frame"`) so it gets its own slug — same
pattern already used for `sofa frame`, `bookshelf frame`, `refrigerator shelves`,
`closet shelves`.

## 5. Wire it in

- If a parent slug was given (or you picked an existing room to attach to), add
  the new artifact's name to that parent's `has` array.
- If no sensible existing parent fits, add it as a new root-level entry (like a
  new room) — it'll automatically show up on the home page tree via `getRoots()`.
- Insert every new artifact object into the `artifacts` array in `lib/data.ts`
  using Edit, following the exact same object shape as existing entries.

## 6. Verify before finishing

Run these checks and fix anything that fails before reporting done:

```
node -e '
const fs = require("fs");
const src = fs.readFileSync("lib/data.ts", "utf8");
const slugs = [...src.matchAll(/slug: "([^"]+)"/g)].map(m => m[1]);
const seen = new Map();
let dup = false;
for (const s of slugs) seen.set(s, (seen.get(s)||0)+1);
for (const [s,c] of seen) if (c>1) { console.log("DUP:", s, c); dup = true; }
if (!dup) console.log("no duplicate slugs, total:", slugs.length);
'
npx next build
```

Both must be clean (no dup slugs, build succeeds) before you're done.

## 7. Register and report

Call `graph_register_edit` with `files: ["lib/data.ts"]` and a one-line summary
of what was added. Then report back tersely: what was added, how deep it went,
how many new pages, new total page count.

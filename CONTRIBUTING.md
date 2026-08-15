# Contributing

Human Artifacts grows by adding one artifact (a place, object, or part) at a
time to the tree in `lib/artifacts/`. This doc covers how to add one, by hand
or with the `/add-artifact` Claude Code command.

## Ground rules

- **No duplicate slugs.** A slug is `name.toLowerCase().replace(/\s+/g, "-")`.
  Check every file under `lib/artifacts/` before adding one.
- **Reuse, don't copy.** If a part you're adding is genuinely the same
  real-world thing as an existing artifact (wood, glass, hinges, legs...),
  just reference its name in `has` — don't create a second entry for it. If a
  part shares a name with an existing slug but is materially different in
  context, disambiguate with the parent's name (`"sofa frame"` vs the bed's
  `"frame"`, `"mirror frame"`, `"nightstand tabletop"` if `"tabletop"` were
  already taken elsewhere).
- **Write in the existing voice.** `what` is one plain factual sentence. `why`
  is 1-2 sentences giving the actual causal reason humans need this thing —
  not a dictionary definition, no "In today's world..." framing. Read a few
  neighboring entries before writing your own.
- **Decompose to a real terminus**, not a fixed depth: a raw material
  (`has: []`), a simple mechanical/electrical primitive that doesn't
  meaningfully decompose further (spring, rivets, contacts, valve), or true
  atoms (carbon, hydrogen, oxygen) — never below that.
- **File placement:** put a new artifact in the file for the room/branch it
  belongs to (`kitchen.ts`, `bedroom.ts`, etc). Shared raw materials or
  generic hardware go in `lib/artifacts/materials.ts` instead, even if only
  one branch uses it so far — that's what lets a later branch reuse it.

## Using `/add-artifact` (Claude Code)

If you have [Claude Code](https://claude.com/claude-code), the
`.claude/commands/add-artifact.md` command automates this end to end:

```
/add-artifact bathtub bathroom   # add "bathtub", nested under bathroom
/add-artifact bathtub            # add "bathtub", figure out where it fits
/add-artifact                    # find a real gap in the tree yourself and fill it
```

It researches the artifact, decomposes it recursively, avoids slug collisions,
wires it into the right parent, and runs the verification script below before
reporting back.

## Adding one by hand

1. Read the relevant file(s) under `lib/artifacts/` and confirm your slug
   doesn't already exist anywhere in that directory.
2. Add the artifact object to the right file, following the `Artifact` shape
   in `lib/artifacts/types.ts`.
3. Add its name to its parent's `has` array (in the parent's file).
4. Recurse into any new parts the same way, until you hit a natural terminus.
5. Run the checks below and fix anything that fails.

```bash
node -e '
const fs = require("fs");
const files = fs.readdirSync("lib/artifacts").filter(f => f !== "types.ts").map(f => "lib/artifacts/" + f);
const slugs = [];
for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  for (const m of src.matchAll(/slug: "([^"]+)"/g)) slugs.push(m[1]);
}
const seen = new Map();
let dup = false;
for (const s of slugs) seen.set(s, (seen.get(s)||0)+1);
for (const [s,c] of seen) if (c>1) { console.log("DUP:", s, c); dup = true; }
if (!dup) console.log("no duplicate slugs, total:", slugs.length);
'
npx next build
```

Both must be clean (no duplicate slugs, build succeeds) before opening a PR.

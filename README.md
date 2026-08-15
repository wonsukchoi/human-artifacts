# Human Artifacts

What humans use, what it does, and why it exists.

Human Artifacts is a text-based, recursive catalog of manmade places and
objects. Start at a room (kitchen, bathroom...), open an object in it (stove,
sink...), and keep opening its parts until you hit a raw material or an atom.
Every page answers the same two questions: **what** is this, and **why** does
it actually exist — the causal reason, not a dictionary definition.

## How the data is organized

Every entry is an `Artifact`:

```ts
type Artifact = {
  slug: string;
  name: string;
  what: string; // one factual sentence
  why: string;  // 1-2 sentences, the causal reason this exists
  has: string[]; // names of parts/contents
};
```

`has` entries link to other artifacts by name — if `slugify(name)` matches an
existing artifact's `slug`, that's a link, not a duplicate. This is how
`legs` under a bed frame and `legs` under a coffee table point at the same
page instead of two copies of the same content.

The data lives under `lib/artifacts/`, split by branch:

- `lib/artifacts/types.ts` — the `Artifact` type
- `lib/artifacts/materials.ts` — shared raw materials and generic hardware
  (steel, wood, glass, polymer, hinges, faucet, rivets...) reused across
  multiple branches
- `lib/artifacts/kitchen.ts`, `bedroom.ts`, `bathroom.ts`, `living-room.ts` —
  one file per room/branch, holding only the nodes specific to it
- `lib/data.ts` — composes all of the above into the `artifacts` array and
  exposes `getArtifact`, `getRoots`, `getParent`, `getAncestry`

A tree bottoms out at a raw material (`has: []`), a simple mechanical/electrical
primitive that doesn't meaningfully decompose further (spring, rivets,
contacts), or true atoms (carbon, hydrogen, oxygen) — never subatomic
particles, since that stops being a human artifact.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) — the short version is: use
`/add-artifact <name> [parent-slug]` if you have Claude Code, or add the entry
by hand following the shape above, then run the verification steps in that
guide before opening a PR.

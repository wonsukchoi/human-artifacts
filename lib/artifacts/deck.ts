import type { Artifact } from "./types";

export const deck: Artifact[] = [
  {
    slug: "deck",
    name: "Deck",
    what: "An open, unroofed wooden or composite platform built off the back or side of a house at or near floor level.",
    why: "A yard's ground is often uneven, wet, or overgrown right up against the house — a raised, level platform gives a flat outdoor surface for furniture and foot traffic without waiting on the lawn to dry or grading the ground.",
    has: ["decking boards", "deck frame", "deck railing"],
  },
  {
    slug: "decking-boards",
    name: "Decking Boards",
    what: "The parallel planks that form a deck's walkable top surface, fastened across its frame with gaps between them.",
    why: "A solid slab would trap rainwater against the frame underneath and rot it from below — narrow gaps between boards let water drain straight through, so the structure underneath stays dry even when the surface gets rained on.",
    has: ["wood"],
  },
  {
    slug: "deck-frame",
    name: "Deck Frame",
    what: "The grid of horizontal beams and joists underneath a deck's boards, carrying their weight down to support posts.",
    why: "Decking boards alone would sag and crack under foot traffic without something rigid beneath them — a beam-and-joist grid spreads that weight out and carries it down to just a few support points instead of the boards bearing it alone.",
    has: ["wood"],
  },
  {
    slug: "deck-railing",
    name: "Deck Railing",
    what: "A waist-high barrier of posts and balusters running along a deck's open edges.",
    why: "A deck built more than a step or two above the ground turns its edge into a fall hazard that's easy to misjudge in the dark or while carrying something — a fixed rail at leaning height blocks that edge without boxing the deck in.",
    has: ["wood"],
  },
];

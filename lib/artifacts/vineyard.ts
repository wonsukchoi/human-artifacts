import type { Artifact } from "./types";

export const vineyard: Artifact[] = [
  {
    slug: "vineyard",
    name: "Vineyard",
    what: "Rows of grapevines trained along trellises, grown for winemaking or table grapes.",
    why: "Grapevines are climbing plants that sprawl along the ground without support, tangling and rotting where they touch soil — trellised rows lift the fruit into open air and sunlight and keep the vineyard walkable between rows for tending and harvest.",
    has: ["grapevines", "trellis", "grape press", "grape baskets"],
  },
  {
    slug: "grapevines",
    name: "Grapevines",
    what: "Woody climbing vines that produce clusters of grapes, trained to grow along a trellis.",
    why: "A vine's growth is naturally chaotic and sprawling — training it along a fixed structure each year concentrates its energy into fruit instead of unchecked vegetative growth, and keeps the clusters accessible for harvest.",
    has: ["wood"],
  },
  {
    slug: "trellis",
    name: "Trellis",
    what: "A framework of wooden posts and wires that grapevines are tied to and trained along.",
    why: "Without something to climb, a vine's own stems can't support the weight of a full crop of grapes off the ground — the trellis's wires bear that weight and hold the fruit up in the sun and air where it ripens evenly.",
    has: ["wood", "wire"],
  },
  {
    slug: "grape-press",
    name: "Grape Press",
    what: "A mechanical press with a rotating screw that squeezes juice out of harvested grapes.",
    why: "Crushing grapes by hand or foot extracts juice slowly and unevenly across a large harvest — a screw press applies steady, increasing pressure across the whole load, extracting juice far more completely and consistently.",
    has: ["steel"],
  },
  {
    slug: "grape-baskets",
    name: "Grape Baskets",
    what: "Sturdy woven or plastic baskets carried through vineyard rows to collect hand-picked grape clusters.",
    why: "Grapes bruise and start fermenting wild yeast the moment they're crushed, so they need to be handled gently and moved quickly — a rigid basket protects the clusters from being crushed under their own weight during picking and the walk back to the press.",
    has: ["wicker"],
  },
];

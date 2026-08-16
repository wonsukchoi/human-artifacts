import type { Artifact } from "./types";

export const ciderHouse: Artifact[] = [
  {
    slug: "cider-house",
    name: "Cider House",
    what: "A room equipped with a fruit press and fermentation vats for turning apples into cider.",
    why: "Apples need to be crushed and pressed to extract juice before fermentation can even begin, a mechanical step beer and wine skip — a dedicated press and vats handle that extraction and the separate fermentation that follows.",
    has: ["cider press", "fermenter", "cider jugs", "apple grinder"],
  },
  {
    slug: "cider-press",
    name: "Cider Press",
    what: "A mechanical press that crushes and squeezes apples to extract their juice.",
    why: "Apple flesh holds its juice tightly inside rigid cells that don't release liquid on their own — crushing ruptures those cells and pressing then forces the juice out, extracting far more than biting or cutting ever could.",
    has: ["steel"],
  },
  {
    slug: "cider-jugs",
    name: "Cider Jugs",
    what: "Large glass jugs used to store fermented cider before bottling.",
    why: "Cider needs to sit undisturbed for weeks after pressing while yeast finishes converting sugar to alcohol — a jug holds a batch in one sealed vessel through that whole process instead of splitting it across many small bottles too early.",
    has: ["glass"],
  },
  {
    slug: "apple-grinder",
    name: "Apple Grinder",
    what: "A hand-cranked or motorized machine that chops whole apples into pulp before pressing.",
    why: "Pressing whole apples directly wastes most of the juice trapped inside intact cells — grinding them into pulp first ruptures that structure so the press can extract nearly all the juice instead of just what squeezes out of a whole fruit.",
    has: ["motor"],
  },
];

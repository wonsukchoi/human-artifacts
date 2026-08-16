import type { Artifact } from "./types";

export const rootCellar: Artifact[] = [
  {
    slug: "root-cellar",
    name: "Root Cellar",
    what: "A cool, dark underground room used to store root vegetables and preserves through winter without refrigeration.",
    why: "Potatoes, carrots, and canned goods keep for months at a steady cool temperature but spoil fast at room temperature — before refrigeration existed, and still today, an underground room stays naturally cool year-round without using any power.",
    has: ["root cellar shelves", "ventilation shaft", "canning jars", "root bins", "root cellar door", "canning funnel"],
  },
  {
    slug: "root-cellar-shelves",
    name: "Root Cellar Shelves",
    what: "Slatted wooden shelves in a root cellar that let air circulate around stored vegetables.",
    why: "Vegetables piled directly against a solid shelf or the floor trap moisture underneath and rot faster — slats let air move freely on all sides, which is what actually keeps them from spoiling as fast.",
    has: ["wood"],
  },
  {
    slug: "ventilation-shaft",
    name: "Ventilation Shaft",
    what: "A vertical shaft connecting a root cellar to the outside air, letting stale humid air escape and fresh air in.",
    why: "A sealed underground room traps the moisture given off by stored vegetables, which speeds rot and encourages mold — a shaft lets that humid air continuously exchange with drier outside air instead of building up.",
    has: [],
  },
  {
    slug: "canning-jars",
    name: "Canning Jars",
    what: "Glass jars with airtight lids used to preserve fruits, vegetables, and other food by sealing them after heat processing.",
    why: "Heat alone kills the microbes causing spoilage, but the food still needs to stay sealed away from air and new contamination afterward — an airtight jar keeps that seal indefinitely, letting preserved food sit on a shelf for a year or more instead of days in the open.",
    has: ["glass", "jar lid"],
  },
  {
    slug: "root-bins",
    name: "Root Bins",
    what: "Open wooden bins or sand-filled boxes in a root cellar that hold loose root vegetables like potatoes and carrots.",
    why: "Loose vegetables piled directly on a shelf touch each other and rot spreads fast between them — separate bins, sometimes packed in sand, keep each vegetable from direct contact and let air move around the pile instead of trapping moisture.",
    has: ["wood"],
  },
  {
    slug: "root-cellar-door",
    name: "Root Cellar Door",
    what: "A heavy, well-sealed door, often set at an angle into a hillside or floor, that closes off a root cellar's entrance.",
    why: "The cellar's cool, humid air needs to stay trapped inside to hold its preserving temperature, while the entrance still needs to seal firmly against outside air swings and pests — a heavy, tightly fitted door does both instead of a lightweight interior door.",
    has: ["wood", "hinges"],
  },
  {
    slug: "canning-funnel",
    name: "Canning Funnel",
    what: "A wide-mouthed funnel sized to fit a canning jar's opening, used to fill jars without spilling.",
    why: "Ladling hot liquid or chunky food directly into a jar's narrow neck spills constantly and can burn a hand — a wide funnel seated in the opening channels it straight down cleanly.",
    has: ["steel"],
  },
];

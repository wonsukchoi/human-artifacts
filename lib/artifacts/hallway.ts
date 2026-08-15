import type { Artifact } from "./types";

export const hallway: Artifact[] = [
  {
    slug: "hallway",
    name: "Hallway",
    what: "A narrow passage connecting rooms inside a home.",
    why: "Rooms need a shared route between them that doesn't require walking through one room to reach another — a dedicated passage keeps movement from interrupting whatever's happening in the rooms it connects.",
    has: ["lamp", "flooring"],
  },
  {
    slug: "flooring",
    name: "Flooring",
    what: "The fixed surface layer covering a room's floor, walked on directly.",
    why: "Bare subfloor is uneven, cold, and wears down fast — a durable finished layer over it is what actually takes the daily wear of footsteps.",
    has: ["wood"],
  },
];

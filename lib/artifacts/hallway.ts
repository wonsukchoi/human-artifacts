import type { Artifact } from "./types";

export const hallway: Artifact[] = [
  {
    slug: "hallway",
    name: "Hallway",
    what: "A narrow passage connecting rooms inside a home.",
    why: "Rooms need a shared route between them that doesn't require walking through one room to reach another — a dedicated passage keeps movement from interrupting whatever's happening in the rooms it connects.",
    has: ["lamp", "flooring", "light switch"],
  },
  {
    slug: "light-switch",
    name: "Light Switch",
    what: "A wall-mounted plate covering a switch that controls the room's overhead or fixture lighting.",
    why: "A hallway's light needs to come on from right at the doorway, not from walking over to a lamp across the room. A fixed wall switch gives instant control at the exact spot a person enters.",
    has: ["switch", "switch plate"],
  },
  {
    slug: "switch-plate",
    name: "Switch Plate",
    what: "A flat rectangular cover fitted over a wall switch's opening and wiring.",
    why: "The switch's opening exposes bare wiring inside the wall. A plate seals that opening for safety and gives a clean, flush surface around the switch itself.",
    has: ["polymer"],
  },
  {
    slug: "flooring",
    name: "Flooring",
    what: "The fixed surface layer covering a room's floor, walked on directly.",
    why: "Bare subfloor is uneven, cold, and wears down fast — a durable finished layer over it is what actually takes the daily wear of footsteps.",
    has: ["wood"],
  },
];

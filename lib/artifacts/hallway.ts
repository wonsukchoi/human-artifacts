import type { Artifact } from "./types";

export const hallway: Artifact[] = [
  {
    slug: "hallway",
    name: "Hallway",
    what: "A narrow passage connecting rooms inside a home.",
    why: "Rooms need a shared route between them that doesn't require walking through one room to reach another — a dedicated passage keeps movement from interrupting whatever's happening in the rooms it connects.",
    has: ["lamp", "flooring", "light switch", "smoke detector", "runner rug", "linen closet"],
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
  {
    slug: "smoke-detector",
    name: "Smoke Detector",
    what: "A ceiling-mounted device that senses smoke particles in the air and sounds a loud alarm.",
    why: "Fire produces smoke well before flames are visible or heat is felt, especially from something smoldering unseen — sensing that smoke early and sounding a loud alarm gives people time to get out before a fire spreads.",
    has: ["smoke sensor", "speaker", "battery"],
  },
  {
    slug: "smoke-sensor",
    name: "Smoke Sensor",
    what: "A small chamber inside a smoke detector that uses a light beam or weak radioactive source to detect smoke particles passing through it.",
    why: "Smoke scatters light or disrupts ion flow in a way clean air doesn't — the sensor is built specifically to catch that disruption the instant smoke enters the chamber, well before a person would smell it.",
    has: [],
  },
  {
    slug: "runner-rug",
    name: "Runner Rug",
    what: "A long, narrow rug that covers the length of a hallway's floor.",
    why: "A hallway is walked over constantly and often has hard flooring that's cold and loud underfoot — a long narrow rug fits its shape exactly, unlike a room rug sized for a wider space, and takes the brunt of that daily traffic.",
    has: ["fabric", "rubber"],
  },
  {
    slug: "linen-closet",
    name: "Linen Closet",
    what: "A shallow closet in a hallway or bathroom area with shelves for storing folded sheets, towels, and blankets.",
    why: "Bedding and towels are used across every bedroom and bathroom in a house, not tied to one room — a shared closet along a hallway keeps that shared stock in one place everyone can reach, instead of duplicating it in each room.",
    has: ["linen closet shelves", "door"],
  },
  {
    slug: "linen-closet-shelves",
    name: "Linen Closet Shelves",
    what: "Fixed shelves inside a linen closet, spaced to hold stacks of folded sheets and towels.",
    why: "Sheets and towels need to sit in flat stacks sorted by size, not hung — shelving gives each type its own shelf instead of piling everything into one heap.",
    has: ["wood"],
  },
];

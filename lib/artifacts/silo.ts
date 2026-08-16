import type { Artifact } from "./types";

export const silo: Artifact[] = [
  {
    slug: "silo",
    name: "Silo",
    what: "A tall cylindrical tower used to store grain or fermented feed (silage) for livestock.",
    why: "Loose grain piled in a barn takes up a huge footprint and is exposed to moisture and pests — a tall sealed cylinder stores a much larger volume in a small footprint while keeping contents dry and protected.",
    has: ["silo auger", "silo vent", "grain elevator"],
  },
  {
    slug: "silo-auger",
    name: "Silo Auger",
    what: "A large rotating screw at a silo's base that draws stored grain down and out through a discharge chute.",
    why: "Grain piled loose inside a tall silo can't just be scooped from the bottom by hand — a rotating screw draws it down and out steadily, discharging a controlled amount instead of the whole pile collapsing at once.",
    has: ["motor"],
  },
  {
    slug: "silo-vent",
    name: "Silo Vent",
    what: "A vented cap at the top of a silo that lets gases from fermenting silage escape.",
    why: "Fermenting silage releases gases that would build dangerous pressure inside a sealed tower — a vent lets that gas escape continuously instead of trapping it.",
    has: [],
  },
  {
    slug: "grain-elevator",
    name: "Grain Elevator",
    what: "A vertical conveyor with buckets attached to a moving belt, used to lift grain up into the top of a silo.",
    why: "Grain has to be loaded from ground level up to the top of a tall silo, and no auger works uphill that steeply — a chain of buckets on a moving belt is what actually carries loose grain that high.",
    has: ["motor"],
  },
];

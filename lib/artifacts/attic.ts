import type { Artifact } from "./types";

export const attic: Artifact[] = [
  {
    slug: "attic",
    name: "Attic",
    what: "An enclosed space directly under a home's roof, used mainly for storage.",
    why: "Roof framing leaves a wedge of otherwise-unused space above the living floors. Insulating and flooring it just enough to store boxes turns dead space into storage without adding to the home's footprint.",
    has: ["insulation", "flooring", "attic ladder", "storage boxes"],
  },
  {
    slug: "storage-boxes",
    name: "Storage Boxes",
    what: "Stacked cardboard containers kept in the attic for storing seasonal or rarely used items.",
    why: "Attic space is only reached occasionally, so it suits things not needed day to day. Boxes let those items be stacked densely and labeled instead of left loose where they'd get crushed or buried under everything else piled around them.",
    has: ["cardboard", "box lid"],
  },
  {
    slug: "box-lid",
    name: "Box Lid",
    what: "A separate flap or cover fitted over a storage box's opening.",
    why: "Dust and pests settle in over months in an attic. A cover keeps that out of whatever's boxed up without needing the box itself to be airtight.",
    has: ["cardboard"],
  },
  {
    slug: "attic-ladder",
    name: "Attic Ladder",
    what: "A hinged, folding ladder stored flush against an attic's ceiling opening that swings and extends down into the room below.",
    why: "An attic is only visited occasionally, so a permanent staircase would waste floor space below for something rarely used. A folding ladder gives access on demand and folds flush against the ceiling the rest of the time.",
    has: ["rungs", "hinges"],
  },
  {
    slug: "rungs",
    name: "Rungs",
    what: "The horizontal bars a person steps on while climbing a ladder.",
    why: "Bare rails give no foothold. Evenly spaced rungs turn a vertical climb into a stable, repeatable series of steps instead of a sheer surface to scale.",
    has: ["wood"],
  },
];

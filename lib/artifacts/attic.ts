import type { Artifact } from "./types";

export const attic: Artifact[] = [
  {
    slug: "attic",
    name: "Attic",
    what: "An enclosed space directly under a home's roof, used mainly for storage.",
    why: "Roof framing leaves a wedge of otherwise-unused space above the living floors. Insulating and flooring it just enough to store boxes turns dead space into storage without adding to the home's footprint.",
    has: ["insulation", "flooring", "attic ladder", "storage boxes", "attic fan", "rafters", "attic window"],
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
  {
    slug: "attic-fan",
    name: "Attic Fan",
    what: "A vent fan mounted at the peak of an attic that pulls hot air out and pushes it through a roof vent.",
    why: "Heat rises and gets trapped under a roof with nowhere to go, which can push attic temperatures well past the outside air on a sunny day — an exhaust fan actively pulls that trapped heat out instead of waiting for it to passively vent.",
    has: ["motor", "fan blades"],
  },
  {
    slug: "rafters",
    name: "Rafters",
    what: "The sloped structural beams that form an attic's roof frame and support the roofing above.",
    why: "The roof's weight and the force of wind and snow load need to be carried down to the walls — rafters are the beams spanning that slope, doing the structural work everything else in the attic sits beneath.",
    has: ["wood"],
  },
  {
    slug: "attic-window",
    name: "Attic Window",
    what: "A small window set into an attic's gable end, providing natural light and minimal ventilation.",
    why: "An attic used for anything more than blind storage needs some daylight to work by, and a gable is the one flat vertical surface available up there for a window — a small opening gives both light and a bit of airflow without needing full ventilation ductwork.",
    has: ["glass", "wood"],
  },
];

import type { Artifact } from "./types";

export const glassblowingStudio: Artifact[] = [
  {
    slug: "glassblowing-studio",
    name: "Glassblowing Studio",
    what: "A room with a furnace and blowpipes for shaping molten glass into objects.",
    why: "Glass has to be kept at a precise molten temperature to stay workable, and shaping it by blowing and turning takes both hands and constant heat nearby — that combination needs a dedicated space built around the furnace's heat and open floor to swing the pipe.",
    has: ["glass furnace", "blowpipe", "annealing oven", "glory hole"],
  },
  {
    slug: "glass-furnace",
    name: "Glass Furnace",
    what: "A high-temperature furnace that keeps a pot of glass molten and workable throughout a glassblowing session.",
    why: "Glass stiffens and becomes unworkable within seconds of leaving intense heat — keeping a reservoir of it molten in the furnace lets a glassblower return to reheat and keep shaping a piece throughout the whole process.",
    has: ["kiln heating element"],
  },
  {
    slug: "blowpipe",
    name: "Blowpipe",
    what: "A long hollow steel tube used to gather molten glass on one end and blow air through to shape a bubble.",
    why: "Shaping glass into a hollow vessel needs air introduced from inside while the glass is still soft — a long pipe keeps the glassblower's face safely distant from the furnace's heat while still letting them blow air directly into the gathered glass.",
    has: ["steel"],
  },
  {
    slug: "annealing-oven",
    name: "Annealing Oven",
    what: "A slow-cooling oven that gradually lowers a finished glass piece's temperature over several hours.",
    why: "Glass cooled quickly from working temperature builds up internal stress and can shatter on its own days or weeks later — a slow, controlled cooldown lets that stress relax evenly through the glass instead.",
    has: ["insulation"],
  },
  {
    slug: "glory-hole",
    name: "Glory Hole",
    what: "A small secondary furnace opening used to reheat a glass piece mid-work without returning it to the main furnace.",
    why: "A piece being shaped cools and stiffens within seconds away from heat, but dipping it back into the main furnace risks picking up impurities or losing precise control of the gather — a dedicated smaller opening lets it be reheated quickly and repeatedly during shaping.",
    has: ["kiln heating element"],
  },
];

import type { Artifact } from "./types";

export const apiary: Artifact[] = [
  {
    slug: "apiary",
    name: "Apiary",
    what: "A small structure or stand holding beehives, kept apart from daily foot traffic in the yard.",
    why: "Bees defend their hive aggressively within a short radius, so hives need to sit away from where people walk regularly — a dedicated stand keeps them accessible for tending honey without putting them in anyone's path.",
    has: ["beehive", "beekeeping suit", "bee smoker"],
  },
  {
    slug: "beehive",
    name: "Beehive",
    what: "A stacked wooden box structure with removable frames where a honeybee colony builds comb and stores honey.",
    why: "Wild bees build comb wherever they find shelter, which makes honey impossible to harvest without destroying the nest — removable frames let a keeper pull out full combs of honey and return the empty frame for the bees to refill.",
    has: ["wood", "honeycomb frames"],
  },
  {
    slug: "honeycomb-frames",
    name: "Honeycomb Frames",
    what: "Removable wooden frames inside a beehive that bees build wax comb onto, holding honey and larvae in an organized grid.",
    why: "Bees need a structured surface to build comb on, and a keeper needs a way to lift that comb out without cutting or destroying it — a frame gives both, holding the comb rigid and removable as one unit.",
    has: ["wood"],
  },
  {
    slug: "beekeeping-suit",
    name: "Beekeeping Suit",
    what: "A full-body protective suit with a veiled hood, worn to safely open and inspect a hive.",
    why: "Disturbing a hive provokes defensive bees to sting anyone nearby — a sealed suit with a mesh veil lets a keeper work directly at the hive without exposed skin for bees to sting.",
    has: ["fabric"],
  },
  {
    slug: "bee-smoker",
    name: "Bee Smoker",
    what: "A handheld metal canister with a bellows that puffs cool smoke over a hive to calm the bees before it's opened.",
    why: "Smoke masks the alarm pheromone bees release to signal danger and triggers an instinct to feed on stored honey instead of defend — both calm the colony enough for a keeper to safely open and inspect the hive.",
    has: ["steel", "bellows"],
  },
  {
    slug: "bellows",
    name: "Bellows",
    what: "A collapsible accordion-folded chamber that pumps air out through a nozzle when squeezed.",
    why: "A steady puff of air needs to be delivered on demand without an external power source — squeezing the folded chamber forces air out through the nozzle each time, and it refills itself as it's released.",
    has: ["leather"],
  },
];

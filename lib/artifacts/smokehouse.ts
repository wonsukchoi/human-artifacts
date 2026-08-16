import type { Artifact } from "./types";

export const smokehouse: Artifact[] = [
  {
    slug: "smokehouse",
    name: "Smokehouse",
    what: "A small outbuilding where meat is hung and cured over slow-burning wood smoke for preservation and flavor.",
    why: "Before refrigeration, and still for flavor today, smoke both dries meat and coats it in compounds that resist bacteria — a small sealed structure holds that smoke concentrated around hanging meat far longer than an open fire ever could.",
    has: ["smoking racks", "smokehouse chimney", "meat hooks", "wood chips", "meat thermometer", "brine barrel"],
  },
  {
    slug: "smoking-racks",
    name: "Smoking Racks",
    what: "Wooden or metal racks inside a smokehouse that meat hangs from, suspended above the smoke source.",
    why: "Meat needs even exposure to smoke on all sides without touching the fire directly — racks hold it suspended in the rising smoke instead of resting on a surface that would only cure one side.",
    has: ["steel"],
  },
  {
    slug: "smokehouse-chimney",
    name: "Smokehouse Chimney",
    what: "A vented opening at the top of a smokehouse that lets excess smoke and heat slowly escape.",
    why: "Smoke needs to circulate through and around the meat, not just build up and stagnate in a sealed box — a vent lets fresh smoke keep flowing up and out while still holding enough inside to cure the meat.",
    has: [],
  },
  {
    slug: "meat-hooks",
    name: "Meat Hooks",
    what: "S-shaped metal hooks that pierce and suspend cuts of meat from a smokehouse's racks.",
    why: "Meat resting flat on a rack only exposes one side evenly to rising smoke — hanging it from a hook lets smoke circulate on all sides at once for even curing.",
    has: ["steel"],
  },
  {
    slug: "wood-chips",
    name: "Wood Chips",
    what: "Small chunks of hardwood, like hickory or oak, burned slowly in a smokehouse to produce flavorful smoke.",
    why: "Different woods burn at different rates and release different flavor compounds as they smolder — small chips smolder rather than flame up, producing steady smoke instead of open fire that would just cook the meat instead of curing it.",
    has: ["wood"],
  },
  {
    slug: "meat-thermometer",
    name: "Meat Thermometer",
    what: "A probe thermometer inserted into curing meat to check its internal temperature.",
    why: "Smoking has to hold meat at a safe internal temperature for hours without ever cooking it through like a grill would — a probe reading the actual internal temperature is the only reliable way to confirm that without cutting the meat open.",
    has: [],
  },
  {
    slug: "brine-barrel",
    name: "Brine Barrel",
    what: "A large barrel filled with salted water that meat soaks in before smoking.",
    why: "Smoke alone cures the outside of meat but doesn't penetrate deep enough to preserve it fully — soaking in a salt brine first draws moisture out and pulls salt in throughout the meat, which is what actually inhibits bacteria at depth.",
    has: ["wood"],
  },
];

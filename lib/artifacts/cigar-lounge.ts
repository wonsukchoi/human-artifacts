import type { Artifact } from "./types";

export const cigarLounge: Artifact[] = [
  {
    slug: "cigar-lounge",
    name: "Cigar Lounge",
    what: "A ventilated room set aside for smoking cigars, kept separate from the rest of the house.",
    why: "Cigar smoke clings to fabric and lingers in a room's air far longer than most people want throughout their home — sealing that activity into one ventilated room keeps the smell and residue from spreading to furniture and clothing elsewhere.",
    has: ["humidor", "ventilation fan", "leather armchair", "cigar cutter", "ashtray", "cigar box"],
  },
  {
    slug: "humidor",
    name: "Humidor",
    what: "A sealed wooden box or cabinet that holds cigars at a controlled humidity to keep them from drying out.",
    why: "A cigar's wrapper cracks and its flavor turns harsh if it dries out, but too much moisture causes mold — a sealed box holding a steady humidity level keeps cigars in that narrow safe range for months at a time.",
    has: ["wood", "hygrometer"],
  },
  {
    slug: "hygrometer",
    name: "Hygrometer",
    what: "A small gauge that measures the humidity level inside a sealed space.",
    why: "Humidity has to be held in a narrow range that isn't visible or felt directly — a gauge gives an exact reading so a keeper knows to add or remove moisture before the level drifts out of the safe range.",
    has: [],
  },
  {
    slug: "ventilation-fan",
    name: "Ventilation Fan",
    what: "A fan that continuously exhausts smoke-filled air from a cigar lounge to the outside.",
    why: "Smoke fills an enclosed room fast and lingers for hours without airflow — a fan pulling air out and venting it outside clears the room continuously instead of letting smoke settle into everything in it.",
    has: ["motor", "fan blades"],
  },
  {
    slug: "leather-armchair",
    name: "Leather Armchair",
    what: "A large upholstered armchair covered in leather, sized for lounging while smoking.",
    why: "Fabric upholstery absorbs and holds smoke odor permanently, but leather's sealed surface can be wiped down and doesn't soak smell into its fibers the way cloth does — that's why leather furniture is standard in a room built around smoking.",
    has: ["leather", "legs"],
  },
  {
    slug: "cigar-cutter",
    name: "Cigar Cutter",
    what: "A small handheld tool with a sharp circular or guillotine blade that trims the closed end off a cigar before smoking.",
    why: "An unlit cigar's cap end is sealed shut and can't draw air through it — a clean, precise cut opens exactly enough of that end for smoke to pull through evenly without unraveling the wrapper.",
    has: ["blade"],
  },
  {
    slug: "ashtray",
    name: "Ashtray",
    what: "A shallow ceramic or glass dish that holds ash and rests a lit cigar between draws.",
    why: "A lit cigar set down on any surface would scorch it and drop ash everywhere — a dish contains both, giving somewhere safe to rest the cigar between puffs without needing to keep it lit constantly in hand.",
    has: ["ceramic"],
  },
  {
    slug: "cigar-box",
    name: "Cigar Box",
    what: "A small wooden box, often cedar-lined, used to store and transport a handful of cigars for a short period.",
    why: "A full humidor stays in one place, but a smaller box lets a few cigars be carried out to a porch or given as a gift without disturbing the whole collection's humidity — cedar lining still helps preserve them for the shorter term.",
    has: ["wood"],
  },
];

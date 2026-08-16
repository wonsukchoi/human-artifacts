import type { Artifact } from "./types";

export const potteryStudio: Artifact[] = [
  {
    slug: "pottery-studio",
    name: "Pottery Studio",
    what: "A room equipped with a potter's wheel and kiln for shaping and firing clay.",
    why: "Clay needs to be spun and shaped on a wheel, then fired at extreme heat to harden permanently — that combination of a spinning wheel and a kiln reaching over a thousand degrees needs its own dedicated space separate from any other craft room.",
    has: ["potters wheel", "kiln", "clay"],
  },
  {
    slug: "potters-wheel",
    name: "Potter's Wheel",
    what: "A flat rotating disc that a potter centers clay on and shapes by hand while it spins.",
    why: "Shaping clay by hand alone can't produce a perfectly symmetrical round form — spinning it on a wheel lets the potter's hands stay still while the clay itself rotates evenly under them, which is what actually creates that symmetry.",
    has: ["motor"],
  },
  {
    slug: "kiln",
    name: "Kiln",
    what: "A heavily insulated chamber that fires clay pottery at extremely high temperatures to harden it permanently.",
    why: "Air-dried clay stays soft and crumbles apart in water — firing it at high heat permanently fuses the clay particles together into hard, waterproof ceramic, a chemical change that can't be undone by re-wetting.",
    has: ["insulation", "kiln heating element"],
  },
  {
    slug: "kiln-heating-element",
    name: "Kiln Heating Element",
    what: "A resistive coil or gas burner inside a kiln that generates the extreme sustained heat needed to fire clay.",
    why: "Firing clay to ceramic needs far higher and more sustained heat than any oven — a dedicated heating element built to reach and hold those extreme temperatures for hours is what actually drives the chemical change in the clay.",
    has: [],
  },
  {
    slug: "clay",
    name: "Clay",
    what: "A fine-grained natural earth material that becomes pliable when wet and hardens permanently when fired.",
    why: "Its microscopic flat mineral particles slide past each other when wet, letting it be shaped by hand or wheel, then lock rigidly together under heat — no other common natural material combines that moldability with permanent hardening.",
    has: [],
  },
];

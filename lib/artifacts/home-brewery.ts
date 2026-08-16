import type { Artifact } from "./types";

export const homeBrewery: Artifact[] = [
  {
    slug: "home-brewery",
    name: "Home Brewery",
    what: "A room equipped with fermentation and boiling equipment for brewing beer at home.",
    why: "Brewing needs a boil kettle handling near-boiling liquid and fermenters that must sit undisturbed at a steady temperature for weeks — that combination of heat, mess, and space needs its own dedicated setup separate from a kitchen used for everyday cooking.",
    has: ["brew kettle", "fermenter", "airlock", "wort chiller", "bottle capper"],
  },
  {
    slug: "brew-kettle",
    name: "Brew Kettle",
    what: "A large pot used to boil malted grain extract with hops before fermentation.",
    why: "Boiling sanitizes the wort and extracts bitterness and aroma from hops over a precise time — a kettle sized for a full batch holds that boil steady long enough for both to happen completely.",
    has: ["steel"],
  },
  {
    slug: "fermenter",
    name: "Fermenter",
    what: "A sealed vessel where yeast is added to boiled wort and left for days or weeks to convert sugar into alcohol.",
    why: "Fermentation needs to stay sealed off from open air, which would let wild bacteria in and spoil the batch — an airtight vessel lets carbon dioxide escape through a one-way valve while keeping contaminants out during the weeks it takes to ferment.",
    has: ["valve"],
  },
  {
    slug: "airlock",
    name: "Airlock",
    what: "A small water-filled valve fitted to a fermenter's lid that lets carbon dioxide bubble out while blocking air from getting in.",
    why: "Fermentation produces carbon dioxide that has to escape or pressure would build and the vessel could crack, but any open path also lets in wild yeast and bacteria — a water seal lets gas bubble out one-way while blocking anything from getting back in.",
    has: ["polymer"],
  },
  {
    slug: "wort-chiller",
    name: "Wort Chiller",
    what: "A coiled copper tube that rapidly cools boiled wort before yeast is added.",
    why: "Yeast added to still-hot wort dies instantly and bacteria thrive in the slow cooldown of a large pot left to sit — a coil run with cold water pulls heat out fast enough to hit pitching temperature in minutes instead of hours.",
    has: ["steel"],
  },
  {
    slug: "bottle-capper",
    name: "Bottle Capper",
    what: "A hand-operated tool that presses a crown cap onto a filled beer bottle's lip to seal it.",
    why: "Bottled beer needs an airtight seal to hold in the carbon dioxide produced by a second fermentation inside the bottle — the capper's jaws crimp a cap's skirt around the bottle's lip tight enough to hold that pressure without leaking or popping loose.",
    has: ["crown cap", "steel"],
  },
  {
    slug: "crown-cap",
    name: "Crown Cap",
    what: "A corrugated metal disc with a rubber-lined underside that crimps around a bottle's lip to seal it.",
    why: "The seal has to grip glass tightly enough to hold pressurized carbon dioxide in for months, yet still come off with a simple opener — the corrugated skirt bends around the lip when crimped and the liner presses flush against the glass to close the gap.",
    has: ["steel", "rubber"],
  },
];

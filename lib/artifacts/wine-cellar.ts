import type { Artifact } from "./types";

export const wineCellar: Artifact[] = [
  {
    slug: "wine-cellar",
    name: "Wine Cellar",
    what: "A cool, dark underground or insulated room where wine bottles are stored for aging.",
    why: "Wine ages best at a steady cool temperature and away from light and vibration — conditions an ordinary room can't hold consistently across seasons, so a dedicated insulated space is built specifically to maintain them.",
    has: ["wine rack", "thermometer", "insulation", "wine bottle", "wine glass", "cellar cooling unit", "wine opener"],
  },
  {
    slug: "wine-bottle",
    name: "Wine Bottle",
    what: "A glass bottle sealed with a cork, used to store and age wine.",
    why: "Wine reacts with the air it's exposed to, slowly turning to vinegar once oxidation starts — a tight cork seal keeps air out during years of aging, and dark glass blocks the light that would otherwise break down the wine's compounds long before it's ready to drink.",
    has: ["glass", "cork", "wine label"],
  },
  {
    slug: "wine-label",
    name: "Wine Label",
    what: "A printed paper sticker adhered to a wine bottle identifying the winery, vintage, and varietal.",
    why: "A cellar full of identical dark bottles gives no way to tell one wine from another once it's racked away for years — the label is what lets a keeper pull the right vintage without uncorking every bottle to check.",
    has: [],
  },
  {
    slug: "thermometer",
    name: "Thermometer",
    what: "A device that measures and displays the ambient temperature of a room.",
    why: "Wine needs to stay within a narrow temperature band to age properly, and small swings do slow damage that's invisible from outside a bottle — a thermometer is what lets a keeper actually verify the room is holding steady instead of guessing.",
    has: [],
  },
  {
    slug: "wine-glass",
    name: "Wine Glass",
    what: "A stemmed glass with a bowl shaped to concentrate a wine's aroma toward the drinker's nose.",
    why: "A wide-mouthed glass lets aroma dissipate before it reaches the nose, which is half of how wine is tasted — the bowl's curve traps and funnels that aroma upward, and the stem keeps a warm hand from raising the wine's temperature.",
    has: ["glass", "stem"],
  },
  {
    slug: "stem",
    name: "Stem",
    what: "The narrow vertical support connecting a wine glass's bowl to its base.",
    why: "Holding the bowl directly would warm the wine with body heat and leave fingerprints on the surface used to judge its color — the stem keeps a hand well clear of both.",
    has: [],
  },
  {
    slug: "cellar-cooling-unit",
    name: "Cellar Cooling Unit",
    what: "A small refrigeration unit built into a wine cellar's wall that holds the room at a steady cool temperature.",
    why: "Wine needs a temperature that stays within a narrow band year-round, and most climates swing well outside that range across seasons — an active cooling unit holds the room steady instead of leaving it to drift with the weather outside.",
    has: ["compressor", "refrigerant"],
  },
  {
    slug: "wine-opener",
    name: "Wine Opener",
    what: "A handheld tool with a metal spiral that screws into a cork and levers it out of the bottle.",
    why: "A cork wedged tight in a bottle's neck can't be pulled out by fingers alone — the spiral bites into the cork's body and the lever arm multiplies pulling force enough to draw it straight out.",
    has: ["steel"],
  },
];

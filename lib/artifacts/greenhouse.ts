import type { Artifact } from "./types";

export const greenhouse: Artifact[] = [
  {
    slug: "greenhouse",
    name: "Greenhouse",
    what: "A glass-walled structure that traps sunlight to grow plants in a controlled, warmer climate than the surrounding outdoors.",
    why: "Many plants can't survive outdoor temperature swings or a short growing season — a sealed glass structure traps solar heat during the day and holds it longer than open air, extending the growing season well past what the local climate alone allows.",
    has: ["greenhouse glass panels", "potting bench", "watering can", "seed trays", "irrigation system", "compost bin"],
  },
  {
    slug: "greenhouse-glass-panels",
    name: "Greenhouse Glass Panels",
    what: "Overlapping glass panes forming a greenhouse's walls and roof, sealed to trap solar heat inside.",
    why: "Sunlight passes through glass easily, but the longer-wavelength heat it creates once absorbed by soil and plants can't pass back out as easily — that one-way trapping is what keeps a greenhouse's interior warmer than the outside air.",
    has: ["glass"],
  },
  {
    slug: "potting-bench",
    name: "Potting Bench",
    what: "A waist-high outdoor-grade table where plants are repotted and seedlings started.",
    why: "Repotting plants at ground level means kneeling and bending repeatedly through a session — a table at working height does that same job standing, and its surface takes the spilled soil a household table wouldn't.",
    has: ["wood"],
  },
  {
    slug: "watering-can",
    name: "Watering Can",
    what: "A handheld container with a spout and perforated head that pours water in a gentle, spread-out stream.",
    why: "Pouring straight from a hose or bucket blasts a hard jet that can uproot seedlings or wash soil away — the perforated head breaks that stream into a gentle shower spread wide enough to cover a tray of plants evenly.",
    has: ["spout", "polymer"],
  },
  {
    slug: "seed-trays",
    name: "Seed Trays",
    what: "Shallow trays divided into small individual cells, each holding one seedling's soil until it's ready to transplant.",
    why: "A single seed sown directly in a garden bed is exposed to weather, pests, and competition before it's established — starting it in its own small contained cell indoors lets it grow strong roots first, transplanted out only once it can survive on its own.",
    has: ["polymer"],
  },
  {
    slug: "irrigation-system",
    name: "Irrigation System",
    what: "A network of tubes with drip emitters that deliver a steady trickle of water directly to each plant's roots.",
    why: "Hand-watering dozens of plants individually every day doesn't scale, and overhead sprinklers waste water and can encourage fungal growth on leaves — a fixed network of tubes delivers water precisely where it's needed, automatically and without wetting the foliage.",
    has: ["drip emitters", "tubing"],
  },
  {
    slug: "drip-emitters",
    name: "Drip Emitters",
    what: "Small perforated fittings along an irrigation line that release water at a slow, controlled drip.",
    why: "Water flowing freely through a tube would just gush out the end — an emitter restricts that flow to match how much water a single plant's root zone can actually absorb without runoff.",
    has: [],
  },
  {
    slug: "tubing",
    name: "Tubing",
    what: "Flexible plastic tube that carries water from a supply line to each drip emitter.",
    why: "Water needs to reach every plant across the width of a greenhouse from one central source — flexible tubing can be routed and branched to each spot without the rigid fittings a solid pipe network would need.",
    has: ["polymer"],
  },
  {
    slug: "compost-bin",
    name: "Compost Bin",
    what: "A ventilated bin that holds decomposing plant scraps, turning them into nutrient-rich soil over time.",
    why: "Kitchen and garden scraps thrown in the trash just add bulk to a landfill, but left to decompose in a contained bin they break down into soil that feeds the very plants growing nearby — closing the loop instead of hauling nutrients away and buying more in.",
    has: ["wire", "wood"],
  },
];

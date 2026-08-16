import type { Artifact } from "./types";

export const wellHouse: Artifact[] = [
  {
    slug: "well-house",
    name: "Well House",
    what: "A small structure built over a water well, sheltering its pump and controls from weather.",
    why: "A well's pump and pressure switch are electrical and need protection from rain and freezing — a small roofed enclosure keeps that equipment dry and above-freezing while still giving direct access to the wellhead below.",
    has: ["well pump", "pressure tank", "wellhead cap", "water filter"],
  },
  {
    slug: "well-pump",
    name: "Well Pump",
    what: "An electric pump that draws water up from a well and pushes it into a home's plumbing system.",
    why: "Water sitting in a well doesn't rise on its own to reach a house's taps — a pump actively draws it up and pressurizes it into the plumbing, doing the job gravity alone can't.",
    has: ["motor"],
  },
  {
    slug: "pressure-tank",
    name: "Pressure Tank",
    what: "A sealed tank with a pressurized air cushion that holds a reserve of pumped water ready for immediate use.",
    why: "Running the pump every single time a tap opens would wear it out fast and cause pressure to stutter — a pre-pressurized reserve tank supplies water instantly for small draws, only triggering the pump once that reserve runs low.",
    has: ["steel"],
  },
  {
    slug: "wellhead-cap",
    name: "Wellhead Cap",
    what: "A sealed cap fitted over a well's casing at ground level, closing off the opening around the pump's pipe.",
    why: "An open well casing lets surface runoff, insects, and debris fall straight down into the water supply — a sealed cap closes that opening while still letting the pump's pipe and wiring pass through cleanly.",
    has: ["steel"],
  },
  {
    slug: "water-filter",
    name: "Water Filter",
    what: "A cartridge that traps sediment and contaminants from well water before it enters the house's plumbing.",
    why: "Water pulled straight from a well can carry sediment, minerals, and microorganisms that treated municipal water wouldn't have — a filter cartridge strains that out right at the source before it's ever run through a fixture.",
    has: ["polymer"],
  },
];

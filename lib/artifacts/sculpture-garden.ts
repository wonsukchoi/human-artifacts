import type { Artifact } from "./types";

export const sculptureGarden: Artifact[] = [
  {
    slug: "sculpture-garden",
    name: "Sculpture Garden",
    what: "An outdoor area landscaped specifically to display large sculptures among plantings and paths.",
    why: "Large stone or metal sculptures are too big and heavy for an indoor gallery, and weather doesn't harm them the way it would a painting — a landscaped outdoor space lets them be viewed at true scale, walked around, and seen in changing natural light.",
    has: ["garden path", "outdoor sculpture", "garden bench", "fountain"],
  },
  {
    slug: "garden-path",
    name: "Garden Path",
    what: "A paved or graveled walkway winding through a sculpture garden's plantings.",
    why: "Visitors need a defined route between pieces that doesn't trample the plantings or cut across wet grass — a fixed path directs foot traffic while the landscaping around it stays undisturbed.",
    has: ["stone"],
  },
  {
    slug: "outdoor-sculpture",
    name: "Outdoor Sculpture",
    what: "A large weather-resistant sculpture, usually stone, metal, or bronze, installed as a permanent outdoor art piece.",
    why: "A piece meant to stay outdoors year-round has to survive rain, freeze-thaw cycles, and UV exposure that would ruin a painting or a piece in ordinary materials — stone, metal, and bronze all hold up to that exposure indefinitely.",
    has: ["bronze"],
  },
  {
    slug: "garden-bench",
    name: "Garden Bench",
    what: "A weatherproof bench placed along a sculpture garden's path for sitting and viewing a piece.",
    why: "Studying a large sculpture properly takes longer than a passing glance, and standing that whole time tires visitors out — a bench along the path gives somewhere to sit and take it in without blocking the walkway.",
    has: ["stone"],
  },
  {
    slug: "fountain",
    name: "Fountain",
    what: "A water feature with a pump that recirculates water through a basin, often centered among sculptures.",
    why: "Moving water adds sound and motion that static sculpture alone can't provide, masking street noise and drawing the eye — a recirculating pump keeps the same water cycling continuously instead of needing a constant fresh supply.",
    has: ["fountain pump", "basin"],
  },
  {
    slug: "fountain-pump",
    name: "Fountain Pump",
    what: "A small submersible pump that continuously recirculates water from a fountain's basin back up through its spout.",
    why: "A fountain needs the same water cycling endlessly rather than constantly draining away — a submersible pump sitting right in the basin draws water back up and out again in a continuous loop.",
    has: ["motor"],
  },
];

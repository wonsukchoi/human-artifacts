import type { Artifact } from "./types";

export const yard: Artifact[] = [
  {
    slug: "yard",
    name: "Yard",
    what: "The open outdoor ground surrounding a house, usually planted with grass or plants.",
    why: "Weather and rooting plants need open, uncovered ground. The yard is what gives a house room to grow food or lawn, dry laundry, or let people and pets be outside without leaving the property.",
    has: ["lawn", "fence", "garden hose"],
  },
  {
    slug: "lawn",
    name: "Lawn",
    what: "An area of the yard planted with a dense, mowed grass groundcover.",
    why: "Bare dirt turns to mud in rain and dust in dry weather. A dense mowed grass layer holds the soil in place and gives a soft, even surface to walk or sit on.",
    has: [],
  },
  {
    slug: "fence",
    name: "Fence",
    what: "A barrier of posts and panels marking a yard's boundary.",
    why: "Property lines need a physical boundary for privacy and to keep pets, kids, or intruders from wandering across them uncontrolled.",
    has: ["wood", "steel"],
  },
  {
    slug: "garden-hose",
    name: "Garden Hose",
    what: "A long flexible tube connected to an outdoor faucet for watering plants or washing things down.",
    why: "Carrying water by hand in buckets across a yard is slow and limited. A hose delivers a continuous stream exactly where it's needed, as far as its length reaches.",
    has: ["rubber", "faucet"],
  },
];

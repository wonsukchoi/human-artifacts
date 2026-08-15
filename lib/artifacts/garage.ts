import type { Artifact } from "./types";

export const garage: Artifact[] = [
  {
    slug: "garage",
    name: "Garage",
    what: "A room or structure attached to or near a house where a car is parked and tools are stored.",
    why: "A car left outside is exposed to weather, theft, and temperature swings that degrade paint, batteries, and fluids. An enclosed space also gives a dedicated spot for tools and yard equipment that don't belong inside the living space.",
    has: ["garage door", "workbench", "garage shelving"],
  },
  {
    slug: "garage-door",
    name: "Garage Door",
    what: "A large, sectioned door that rolls or tilts up along a track to seal a garage's vehicle entrance.",
    why: "The entrance needs to be wide enough for a vehicle to pass through, which no ordinary hinged door can span without leaving the garage exposed to weather and intruders when closed.",
    has: ["garage door track", "spring"],
  },
  {
    slug: "garage-door-track",
    name: "Garage Door Track",
    what: "A curved steel rail along the ceiling and wall that guides a garage door's rollers as it opens.",
    why: "A garage door needs to travel from vertical to horizontal without a person guiding it — the fixed curved rail is what constrains that path every time.",
    has: ["steel"],
  },
  {
    slug: "workbench",
    name: "Workbench",
    what: "A sturdy flat-topped table built for holding tools and materials during repair or building work.",
    why: "Tinkering and repair need a stable surface at working height that can take scratches, spills, and clamped-down force without damaging household furniture.",
    has: ["tabletop", "legs"],
  },
  {
    slug: "garage-shelving",
    name: "Garage Shelving",
    what: "Open-frame shelving fixed to a garage wall for storing bins, tools, and yard equipment.",
    why: "Floor space in a garage is needed for the car and for moving around it — elevating storage onto wall-mounted shelves keeps clutter up off that floor.",
    has: ["wood", "steel"],
  },
];

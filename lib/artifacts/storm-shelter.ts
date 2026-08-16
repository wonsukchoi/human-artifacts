import type { Artifact } from "./types";

export const stormShelter: Artifact[] = [
  {
    slug: "storm-shelter",
    name: "Storm Shelter",
    what: "A reinforced underground or in-ground room built to protect occupants from tornadoes and severe storms.",
    why: "A house's regular walls and windows can't survive a direct tornado hit, and there's often only minutes of warning — a reinforced enclosed space belowground gives a place strong enough to ride out the storm in the little time available.",
    has: ["reinforced door", "emergency supplies", "ventilation pipe", "shelter bench", "first aid kit", "flashlight"],
  },
  {
    slug: "reinforced-door",
    name: "Reinforced Door",
    what: "A heavy steel door on a storm shelter, rated to withstand high-velocity flying debris.",
    why: "A tornado turns ordinary objects into debris moving fast enough to punch through a standard door — a door built and rated specifically to stop that impact is what keeps the shelter's interior actually safe.",
    has: ["steel", "hinges"],
  },
  {
    slug: "emergency-supplies",
    name: "Emergency Supplies",
    what: "A stocked kit of water, food, flashlights, and a radio kept in a storm shelter for the duration of a stay inside.",
    why: "A shelter might need to be occupied for hours with no way to leave and check outside conditions — supplies kept on hand cover that wait instead of leaving occupants stuck with nothing until it's safe to come out.",
    has: ["water bottle", "battery"],
  },
  {
    slug: "ventilation-pipe",
    name: "Ventilation Pipe",
    what: "A narrow pipe running from a storm shelter up to the surface, supplying fresh air while the heavy door stays sealed shut.",
    why: "A sealed shelter with people inside for hours would run low on breathable air fast — a thin pipe to the surface lets air exchange continuously without needing to crack open the one heavy door that's keeping debris out.",
    has: ["steel"],
  },
  {
    slug: "shelter-bench",
    name: "Shelter Bench",
    what: "A fixed bench along a storm shelter's wall, sized to seat the household during a stay inside.",
    why: "Standing for the length of a storm warning is uncomfortable and tiring, and the shelter's floor space is too tight for loose furniture — a bench built into the wall gives seating without eating into the room needed to move and store supplies.",
    has: ["steel", "wood"],
  },
  {
    slug: "first-aid-kit",
    name: "First Aid Kit",
    what: "A stocked case of bandages, antiseptic, and basic medical supplies kept in a storm shelter.",
    why: "An injury during a storm — from flying debris or a fall in the dark — needs immediate care with no guarantee of reaching a hospital right away, so basic supplies kept on hand cover that gap until help is reachable.",
    has: ["polymer"],
  },
  {
    slug: "flashlight",
    name: "Flashlight",
    what: "A handheld battery-powered light used to see in the dark during a power outage.",
    why: "A shelter's power may cut out along with the rest of the house during a storm, and it could be pitch dark inside — a battery light works independent of house power, giving light exactly when the grid can't.",
    has: ["bulb", "battery"],
  },
];

import type { Artifact } from "./types";

export const boathouse: Artifact[] = [
  {
    slug: "boathouse",
    name: "Boathouse",
    what: "A structure built over or beside water that shelters a boat and its equipment.",
    why: "A boat left exposed to sun and rain degrades fast and its hull can be damaged by waves against a bare dock — a boathouse shelters it overhead and often lifts it out of the water entirely between uses.",
    has: ["boat", "boat lift", "dock", "life jackets"],
  },
  {
    slug: "boat",
    name: "Boat",
    what: "A vessel with a watertight hull that floats and carries people or cargo across water.",
    why: "Water doesn't support foot travel or wheeled vehicles, so crossing open water or working from it needs something buoyant enough to keep its hull and everything on it above the surface.",
    has: ["hull", "motor", "oars"],
  },
  {
    slug: "hull",
    name: "Hull",
    what: "The main watertight shell of a boat that displaces water and keeps everything inside dry.",
    why: "A boat's weight has to be held up by displacing enough water to counter gravity, and that only works if the shell stays sealed — a single crack or seam failure lets water in and sinks the whole structure.",
    has: ["fiberglass"],
  },
  {
    slug: "oars",
    name: "Oars",
    what: "Long poles with a flat blade at one end, used in pairs to row a boat by hand.",
    why: "A boat with a dead or absent motor still needs a way to move — pushing a flat blade against the water and pulling gives enough thrust to propel and steer without any engine at all.",
    has: ["wood"],
  },
  {
    slug: "boat-lift",
    name: "Boat Lift",
    what: "A hydraulic or cable system that raises a boat entirely out of the water for storage between uses.",
    why: "A hull left sitting in water accumulates algae and barnacles and slowly absorbs moisture — lifting it clear of the water after each use stops that buildup and lets the hull dry out completely.",
    has: ["motor", "steel"],
  },
  {
    slug: "dock",
    name: "Dock",
    what: "A fixed or floating platform extending from shore that a boat ties up against to load and unload.",
    why: "A boat can't be boarded directly from open water or a steep bank — a dock gives a level, stable platform right at the boat's side for people and gear to move on and off safely.",
    has: ["wood"],
  },
  {
    slug: "life-jackets",
    name: "Life Jackets",
    what: "Buoyant vests kept in a boathouse and worn to keep a person afloat in water.",
    why: "A person struggling in open water can tire and go under within minutes, even a strong swimmer — a foam-filled vest displaces enough water to keep the head above the surface without any swimming effort needed.",
    has: ["foam", "fabric"],
  },
];

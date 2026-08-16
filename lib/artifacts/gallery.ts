import type { Artifact } from "./types";

export const gallery: Artifact[] = [
  {
    slug: "gallery",
    name: "Gallery",
    what: "A room or long hallway with track lighting, dedicated to displaying framed art and photography.",
    why: "Art hung in a regular living space competes with furniture and everyday clutter for attention and rarely gets even, glare-free light — a room built specifically for display, with track lighting angled to each piece, lets the art be seen the way it's meant to be.",
    has: ["track lighting", "picture frame", "gallery bench", "sculpture pedestal", "velvet rope"],
  },
  {
    slug: "track-lighting",
    name: "Track Lighting",
    what: "A row of adjustable spotlights mounted on a rail, each aimable at a specific piece on the wall.",
    why: "A single ceiling fixture lights a whole room evenly but leaves each piece of art either glaring or dim depending on its position — individual aimable spotlights let each piece get light angled specifically to it instead of one flat wash.",
    has: ["bulb", "lighting rail"],
  },
  {
    slug: "lighting-rail",
    name: "Lighting Rail",
    what: "A metal channel mounted along a ceiling that track lighting fixtures clip onto and slide along.",
    why: "Each spotlight needs to be repositioned as artwork on the wall changes — a continuous rail lets a fixture slide to a new spot and be re-aimed instead of being fixed at one drilled point forever.",
    has: ["steel"],
  },
  {
    slug: "gallery-bench",
    name: "Gallery Bench",
    what: "A simple backless bench placed in the middle of a gallery room, letting a viewer sit back and study a piece from a distance.",
    why: "Some details and the overall composition of a large piece only read properly from several feet back, not standing close — a bench gives a place to sit at that distance for as long as a piece takes to actually look at.",
    has: ["wood"],
  },
  {
    slug: "sculpture-pedestal",
    name: "Sculpture Pedestal",
    what: "A simple raised plinth that displays a freestanding sculpture at eye level, away from the wall.",
    why: "A sculpture meant to be viewed from all sides can't just lean against a wall like a painting — a pedestal lifts it clear of the floor and lets a viewer walk fully around it at a consistent height.",
    has: ["wood"],
  },
  {
    slug: "velvet-rope",
    name: "Velvet Rope",
    what: "A fabric-covered rope strung between stanchions to keep viewers a set distance from a piece of art.",
    why: "Standing too close risks touching or breathing directly on a piece, damaging it over repeated visits — a rope at a fixed distance keeps everyone back without needing a person standing guard at each work.",
    has: ["rope", "fabric"],
  },
];

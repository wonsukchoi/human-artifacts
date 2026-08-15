import type { Artifact } from "./types";

export const entryway: Artifact[] = [
  {
    slug: "entryway",
    name: "Entryway",
    what: "The first room inside a home's main entrance, used to arrive and leave.",
    why: "Coming inside means shedding outdoor gear — shoes, coats, keys — before stepping into the rest of the house. A dedicated space right at the door keeps that transition from spilling dirt and clutter further in.",
    has: ["front door", "shoe rack", "coat hooks", "doormat"],
  },
  {
    slug: "front-door",
    name: "Front Door",
    what: "The main hinged door at a home's primary entrance, opening directly to the outside.",
    why: "It's the main barrier between the house and the outside, so it has to resist forced entry and weather in a way an interior door never needs to.",
    has: ["steel", "hinges"],
  },
  {
    slug: "shoe-rack",
    name: "Shoe Rack",
    what: "A tiered rack near the entrance for holding shoes in pairs.",
    why: "Shoes track in dirt from outside. Pulling them off right at the door and keeping them off the floor stops that dirt from spreading through the rest of the house.",
    has: ["wire", "wood"],
  },
  {
    slug: "coat-hooks",
    name: "Coat Hooks",
    what: "Wall-mounted hooks near the entrance for hanging coats and bags.",
    why: "A coat dropped anywhere else in the house ends up on furniture or the floor. A fixed hook right at the entrance gives it one obvious place to go, every time.",
    has: ["steel"],
  },
  {
    slug: "doormat",
    name: "Doormat",
    what: "A coarse mat placed outside or just inside a door for scraping and wiping shoes.",
    why: "Shoes track in dirt, mud, and moisture from outside — scraping them across a coarse mat right at the threshold catches most of that before it ever reaches the floor inside.",
    has: ["fabric", "rubber"],
  },
];

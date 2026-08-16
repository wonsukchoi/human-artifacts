import type { Artifact } from "./types";

export const porch: Artifact[] = [
  {
    slug: "porch",
    name: "Porch",
    what: "A covered outdoor platform attached to a house's entrance, used for sitting outside while sheltered from sun and rain.",
    why: "Sitting fully exposed to sun, rain, or bugs isn't comfortable for long, but staying indoors misses fresh air entirely — a roofed platform right at the entrance gives a sheltered middle ground between the two.",
    has: ["porch swing", "screen door", "porch light", "porch step", "porch column"],
  },
  {
    slug: "porch-swing",
    name: "Porch Swing",
    what: "A hanging bench suspended from a porch's ceiling by chains, that swings back and forth.",
    why: "A fixed chair takes up floor space and doesn't move — hanging the seat from overhead lets it swing gently under its own weight, something sitting on solid ground can't replicate.",
    has: ["chain", "wood"],
  },
  {
    slug: "screen-door",
    name: "Screen Door",
    what: "A lightweight door with a fine mesh screen instead of a solid panel, mounted just outside or over a front door.",
    why: "A regular door has to stay closed for security, which blocks airflow — a mesh screen lets air and light through while still keeping insects out, so the front door itself can be left open.",
    has: ["screen door mesh", "hinges"],
  },
  {
    slug: "screen-door-mesh",
    name: "Screen Door Mesh",
    what: "A fine woven mesh stretched across a screen door's frame.",
    why: "The gaps need to be small enough to block flying insects but open enough to let air move freely through — a woven mesh does both without blocking airflow the way a solid panel would.",
    has: ["wire"],
  },
  {
    slug: "porch-light",
    name: "Porch Light",
    what: "A wall-mounted light fixture beside a porch's door that illuminates the entrance after dark.",
    why: "Arriving home after dark means finding a keyhole and reading who's at the door blind — a fixed light right at the entrance solves both without needing a flashlight.",
    has: ["bulb", "switch"],
  },
  {
    slug: "porch-step",
    name: "Porch Step",
    what: "A set of short stairs leading from ground level up to a porch's raised floor.",
    why: "A porch floor sits raised a foot or two above the yard to keep it dry and level — steps bridge that gap so it can be walked straight up onto instead of climbed or jumped.",
    has: ["wood"],
  },
  {
    slug: "porch-column",
    name: "Porch Column",
    what: "A vertical wooden or stone post supporting a porch's roof at its outer edge.",
    why: "A porch roof spans out from the house wall and needs support at its far edge to keep from sagging — columns carry that load down to the porch floor instead of the roof relying on the house wall alone.",
    has: ["wood"],
  },
];

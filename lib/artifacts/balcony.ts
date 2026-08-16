import type { Artifact } from "./types";

export const balcony: Artifact[] = [
  {
    slug: "balcony",
    name: "Balcony",
    what: "A railed platform projecting from an upper floor of a house, open to the outside air.",
    why: "Not every room has ground-level access to the outdoors — a projecting platform gives an upstairs room a way to step outside without leaving the building, using the same footprint as the wall it extends from.",
    has: ["railing", "balcony door", "balcony planter", "string lights", "privacy screen"],
  },
  {
    slug: "railing",
    name: "Railing",
    what: "A waist-high barrier of rails or balusters running along a balcony's open edge.",
    why: "An open ledge several stories up is a fall hazard the instant someone leans or a child wanders too close — a fixed barrier at leaning height blocks that edge without blocking the view past it.",
    has: ["steel"],
  },
  {
    slug: "balcony-door",
    name: "Balcony Door",
    what: "A door connecting a balcony to the room behind it, usually glazed to keep the view through when closed.",
    why: "The balcony needs a sealed connection back to the room it extends from — one that keeps weather and drafts out while closed but still lets someone step through it, with glazing that keeps the outdoor view visible even shut.",
    has: ["glass", "hinges"],
  },
  {
    slug: "balcony-planter",
    name: "Balcony Planter",
    what: "A long, narrow plant box mounted along a balcony's railing.",
    why: "A balcony's floor space is often too tight to spare for a plant on the ground — mounting a planter box on the railing uses the vertical rail itself as the surface, in a space that would otherwise sit unused.",
    has: ["ceramic", "soil"],
  },
  {
    slug: "string-lights",
    name: "String Lights",
    what: "A strand of small bulbs wired together end to end, hung along a balcony's railing or ceiling.",
    why: "A balcony has no built-in overhead lighting like an indoor room — a lightweight strand that clips or hangs along the railing brings usable light outdoors after dark without any wiring work.",
    has: ["wire", "bulb"],
  },
  {
    slug: "privacy-screen",
    name: "Privacy Screen",
    what: "A slatted or woven panel attached to a balcony's railing that blocks the view in from neighboring units.",
    why: "A balcony often sits within direct sightline of neighbors or the street — a panel fixed along the railing blocks that view without needing to give up the balcony's open air entirely.",
    has: ["wicker"],
  },
];

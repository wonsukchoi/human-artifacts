import type { Artifact } from "./types";

export const chickenCoop: Artifact[] = [
  {
    slug: "chicken-coop",
    name: "Chicken Coop",
    what: "A small enclosed structure in the yard where chickens roost, lay eggs, and shelter from predators.",
    why: "Chickens left to roam freely overnight are easy targets for foxes and other predators, and their eggs need to be found somewhere consistent — an enclosed coop with nesting boxes gives shelter and a fixed, checkable place to collect eggs.",
    has: ["nesting boxes", "chicken wire", "roosting bar", "feed trough", "egg basket"],
  },
  {
    slug: "nesting-boxes",
    name: "Nesting Boxes",
    what: "Small individual compartments inside a coop where a hen lays her eggs.",
    why: "A hen instinctively seeks a small, enclosed, slightly dark space to lay in rather than open floor — a box gives that shelter and, being fixed in place, keeps eggs collected in one predictable spot instead of scattered across the coop.",
    has: ["wood"],
  },
  {
    slug: "chicken-wire",
    name: "Chicken Wire",
    what: "A lightweight mesh of thin twisted wire, used to enclose a coop's run while letting light and air through.",
    why: "Solid walls would block the airflow and light a coop's outdoor run needs, but no barrier at all lets predators straight in — a wire mesh keeps hawks and foxes out while still leaving the space open and ventilated.",
    has: ["wire"],
  },
  {
    slug: "roosting-bar",
    name: "Roosting Bar",
    what: "A raised horizontal bar inside a coop that chickens grip and sleep on overnight.",
    why: "Chickens instinctively sleep perched off the ground to stay safer from crawling predators — a raised bar gives them that perch instead of huddling on the coop floor overnight.",
    has: ["wood"],
  },
  {
    slug: "feed-trough",
    name: "Feed Trough",
    what: "A long shallow trough inside or beside a coop that holds chicken feed.",
    why: "Feed scattered loose on the ground gets trampled, soiled, and picked at by rodents overnight — a raised trough keeps it contained and reachable by every bird at once instead of scattered and wasted.",
    has: ["steel"],
  },
  {
    slug: "egg-basket",
    name: "Egg Basket",
    what: "A shallow woven basket used to carry collected eggs from the coop to the house.",
    why: "Eggs are fragile and need to be carried gently in a single layer — a shallow basket keeps them from piling on top of each other and cracking during the short walk back.",
    has: ["wicker"],
  },
];

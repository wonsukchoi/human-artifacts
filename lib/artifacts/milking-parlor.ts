import type { Artifact } from "./types";

export const milkingParlor: Artifact[] = [
  {
    slug: "milking-parlor",
    name: "Milking Parlor",
    what: "A dedicated room or structure on a small farm where dairy animals are milked, usually with a raised platform and milking equipment.",
    why: "Milking bent over on open ground strains a farmer's back through dozens of repetitions twice a day — a raised platform brings the animal to standing height, and a dedicated space keeps the process clean and consistent.",
    has: ["milking stanchion", "milk pail", "cream separator", "milk cans", "butter churn"],
  },
  {
    slug: "milking-stanchion",
    name: "Milking Stanchion",
    what: "A head-locking frame that holds an animal still and positioned during milking.",
    why: "An animal shifting or wandering mid-milking makes the process slow and risks a kicked-over pail — a stanchion locks its head in place at a fixed spot, keeping it steady through the whole process.",
    has: ["steel"],
  },
  {
    slug: "milk-pail",
    name: "Milk Pail",
    what: "A wide-mouthed metal bucket used to collect milk directly beneath an animal during milking.",
    why: "Milk needs to be caught the instant it's drawn, in a container wide enough to catch an imprecise stream — a wide-mouthed pail does that without spilling or requiring precise aim.",
    has: ["steel"],
  },
  {
    slug: "cream-separator",
    name: "Cream Separator",
    what: "A hand-cranked or motorized machine that spins fresh milk fast enough to separate cream from the rest.",
    why: "Cream is less dense than milk and naturally rises on its own, but that takes hours sitting still — spinning the milk at high speed forces that separation in minutes through centrifugal force instead of waiting.",
    has: ["motor"],
  },
  {
    slug: "milk-cans",
    name: "Milk Cans",
    what: "Large lidded metal cans that store and transport milk from the parlor to a collection point.",
    why: "Fresh milk needs to be kept sealed and cool between milking and pickup — sturdy cans with tight lids let it be carried and stacked without spilling or picking up contamination before it reaches a dairy.",
    has: ["steel"],
  },
  {
    slug: "butter-churn",
    name: "Butter Churn",
    what: "A hand-cranked or motorized container that agitates cream until it separates into butter and buttermilk.",
    why: "Cream on its own stays liquid indefinitely — sustained agitation breaks down the fat globules' membrane until they clump together into solid butter, separating out the liquid buttermilk left behind.",
    has: ["wood", "motor"],
  },
];

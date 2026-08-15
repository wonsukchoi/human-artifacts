import type { Artifact } from "./types";

export const homeGym: Artifact[] = [
  {
    slug: "home-gym",
    name: "Home Gym",
    what: "A room set up with equipment for exercising at home.",
    why: "Consistent exercise needs equipment on hand at all times — a dedicated room removes the friction of traveling to a gym, which is often the difference between a habit and a missed workout.",
    has: ["treadmill", "dumbbells", "yoga mat"],
  },
  {
    slug: "treadmill",
    name: "Treadmill",
    what: "A machine with a moving belt that lets a person walk or run in place.",
    why: "Outdoor running depends on weather and daylight — a belt-driven surface lets the same motion happen indoors on a fixed, controlled schedule regardless of conditions outside.",
    has: ["running belt", "motor"],
  },
  {
    slug: "running-belt",
    name: "Running Belt",
    what: "A continuous loop of rubber-coated fabric that spins beneath a treadmill's deck.",
    why: "A runner's stride needs a surface that keeps moving backward under their feet at a matched pace, or they'd simply walk off the front of a fixed deck.",
    has: ["rubber"],
  },
  {
    slug: "dumbbells",
    name: "Dumbbells",
    what: "A pair of handheld weights, one gripped in each hand, used for resistance exercise.",
    why: "Muscle grows in response to resistance beyond what body weight alone provides — a fixed, gripped weight lets that resistance be applied precisely to isolated muscle groups.",
    has: ["steel", "dumbbell handle"],
  },
  {
    slug: "dumbbell-handle",
    name: "Dumbbell Handle",
    what: "The straight knurled bar between a dumbbell's two weighted ends.",
    why: "A smooth bar would slip out of a sweating hand mid-lift — the knurled texture bites into the grip instead, especially as the load gets heavier.",
    has: ["steel"],
  },
  {
    slug: "yoga-mat",
    name: "Yoga Mat",
    what: "A thin cushioned mat unrolled on the floor for exercises done lying or kneeling down.",
    why: "A bare hard floor is uncomfortable against joints and slips underfoot during floor exercises — a mat's grip and cushioning let a person hold poses without sliding or bruising knees and elbows.",
    has: ["rubber"],
  },
];

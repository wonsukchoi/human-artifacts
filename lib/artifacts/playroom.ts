import type { Artifact } from "./types";

export const playroom: Artifact[] = [
  {
    slug: "playroom",
    name: "Playroom",
    what: "A room set aside for children to play, filled with toys and low, kid-scaled furniture.",
    why: "Toys scattered through the rest of the house create clutter and trip hazards in shared spaces — a dedicated room lets play spread out and stay messy without disrupting the rest of the home.",
    has: ["toy chest", "building blocks", "rocking horse"],
  },
  {
    slug: "toy-chest",
    name: "Toy Chest",
    what: "A large lidded box for storing toys, sized to hold many at once.",
    why: "Toys left scattered across the floor are a constant trip hazard and take longer to find in a pile — a single chest gives one place to sweep everything into at the end of the day.",
    has: ["wood", "hinges"],
  },
  {
    slug: "building-blocks",
    name: "Building Blocks",
    what: "Small interlocking or stackable blocks that children arrange into towers and shapes.",
    why: "A child's hands and mind develop fine motor control and spatial reasoning through repeated stacking and fitting — blocks give that practice through open-ended play with no fixed outcome.",
    has: ["polymer"],
  },
  {
    slug: "rocking-horse",
    name: "Rocking Horse",
    what: "A horse-shaped toy mounted on curved rockers that a child sits on and rocks back and forth.",
    why: "Rhythmic rocking motion is soothing and builds a toddler's balance and core strength — a fixed horse shape gives that motion a focused, safe outlet instead of climbing on unstable furniture.",
    has: ["rockers", "wood"],
  },
  {
    slug: "rockers",
    name: "Rockers",
    what: "The two curved wooden runners under a rocking horse that let it tip forward and back.",
    why: "A flat base wouldn't move at all — the curve is what converts a child's shifting weight into the back-and-forth rocking motion.",
    has: ["wood"],
  },
];

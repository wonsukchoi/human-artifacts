import type { Artifact } from "./types";

export const iceHouse: Artifact[] = [
  {
    slug: "ice-house",
    name: "Ice House",
    what: "A small insulated structure that stores blocks of ice, cut from frozen ponds in winter, to keep food cold through warmer months.",
    why: "Before mechanical refrigeration, ice cut in winter was the only way to keep food cold in summer — a heavily insulated structure slowed that stored ice from melting for months instead of days.",
    has: ["ice blocks", "insulation", "ice tongs", "ice pick"],
  },
  {
    slug: "ice-blocks",
    name: "Ice Blocks",
    what: "Large rectangular blocks of ice, cut from a frozen pond or lake and packed in sawdust for storage.",
    why: "A block's low surface-area-to-volume ratio melts far slower than crushed or shaped ice would — packing it further in insulating sawdust slows that melt even more, letting a single winter's harvest last through summer.",
    has: [],
  },
  {
    slug: "ice-tongs",
    name: "Ice Tongs",
    what: "A large pair of hinged metal tongs with sharp pincers, used to grip and carry an ice block without touching it directly.",
    why: "A block heavy and slick with meltwater is nearly impossible to lift by hand without it slipping — pincers that bite into the ice's surface give a secure one-handed grip a bare hand never could.",
    has: ["steel"],
  },
  {
    slug: "ice-pick",
    name: "Ice Pick",
    what: "A short spike-tipped hand tool used to break a large ice block into smaller usable chunks.",
    why: "A block cut for storage is too large to use directly for cooling drinks or food — a pick chips it down into smaller pieces sized for actual use without needing a saw.",
    has: ["steel", "wood"],
  },
];

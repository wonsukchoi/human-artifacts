import type { Artifact } from "./types";

export const stable: Artifact[] = [
  {
    slug: "stable",
    name: "Stable",
    what: "A building divided into individual stalls where horses are housed, fed, and sheltered.",
    why: "A horse needs a dry, enclosed space of its own to rest and eat separate from other horses, who might fight over feed or kick if crowded together — individual stalls give each horse that protected space while keeping them all under one roof.",
    has: ["horse stall", "hay loft", "horse feed bin", "horse blanket"],
  },
  {
    slug: "horse-stall",
    name: "Horse Stall",
    what: "An individual partitioned enclosure inside a stable sized for one horse to stand, lie down, and turn around in.",
    why: "Horses housed loose together compete for space and food and can injure each other — a partitioned stall gives each horse guaranteed personal space and its own feed without needing to fight for it.",
    has: ["wood"],
  },
  {
    slug: "hay-loft",
    name: "Hay Loft",
    what: "An elevated storage floor above a stable's stalls where baled hay is kept dry until needed.",
    why: "Hay stored at ground level in a stable picks up moisture and horse waste and molds fast — raising it to a loft keeps it dry and away from the animals, with gravity making it easy to drop bales down as needed.",
    has: ["wood"],
  },
  {
    slug: "horse-feed-bin",
    name: "Horse Feed Bin",
    what: "A sturdy bin mounted at horse-mouth height in each stall that holds grain feed.",
    why: "Grain poured on the ground gets trampled and mixed with bedding and waste — a raised bin keeps it clean and at a natural eating height, away from the floor a horse also stands and lies on.",
    has: ["wood"],
  },
  {
    slug: "horse-blanket",
    name: "Horse Blanket",
    what: "A fitted fabric covering strapped over a horse's back and sides to keep it warm in cold weather.",
    why: "A horse's short-haired summer coat doesn't grow back thick enough in time for a sudden cold snap, or a clipped show horse has no natural insulation at all — a blanket makes up that missing warmth without needing to keep it stalled indoors.",
    has: ["fabric"],
  },
];

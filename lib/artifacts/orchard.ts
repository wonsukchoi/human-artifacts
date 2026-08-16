import type { Artifact } from "./types";

export const orchard: Artifact[] = [
  {
    slug: "orchard",
    name: "Orchard",
    what: "A planted area of fruit or nut trees grown for harvest.",
    why: "Fruit trees take years to mature and need space, sunlight, and rows for access that a regular yard's lawn or garden beds don't provide — a dedicated planted area gives them the room to grow to full size and be harvested efficiently.",
    has: ["fruit trees", "orchard ladder", "grafting knife", "fruit crates"],
  },
  {
    slug: "fruit-trees",
    name: "Fruit Trees",
    what: "Trees cultivated specifically for their edible fruit, planted in evenly spaced rows.",
    why: "A wild tree grows tall and spreads unpredictably, putting fruit out of reach — orchard trees are pruned and spaced deliberately to keep fruit within picking height and give each tree enough sun and room to produce well.",
    has: ["wood"],
  },
  {
    slug: "orchard-ladder",
    name: "Orchard Ladder",
    what: "A tall, narrow three-legged ladder shaped to fit between branches for picking fruit high in a tree.",
    why: "A regular ladder is too wide and rests unevenly against a tree's uneven branches — the narrow tripod shape nestles between limbs and stays stable on soft orchard ground where a flat-footed ladder would sink or tip.",
    has: ["wood"],
  },
  {
    slug: "grafting-knife",
    name: "Grafting Knife",
    what: "A small single-edged knife with a precise blade, used to make clean cuts when grafting one tree's branch onto another's rootstock.",
    why: "A graft only takes if the two cut surfaces sit flush together with clean, undamaged tissue — a razor-sharp precision blade makes that flat, clean cut in one motion, something a regular pocketknife's coarser edge can't reliably do.",
    has: ["blade", "handle"],
  },
  {
    slug: "fruit-crates",
    name: "Fruit Crates",
    what: "Stacked wooden crates used to collect and transport harvested fruit from the orchard.",
    why: "Fruit piled loose in a bag or bucket bruises under its own weight — shallow wooden crates hold it in a single layer and stack without crushing what's underneath, keeping it market-ready.",
    has: ["wood"],
  },
];

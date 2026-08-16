import type { Artifact } from "./types";

export const diningRoom: Artifact[] = [
  {
    slug: "dining-room",
    name: "Dining Room",
    what: "A room set aside for eating meals together at a table.",
    why: "Eating needs a stable surface for food and dishes, and sharing that surface with others is what turns a meal into a shared occasion instead of a solitary one.",
    has: ["dining table", "dining chair", "lamp", "tablecloth", "placemat", "centerpiece", "salt and pepper shakers"],
  },
  {
    slug: "dining-table",
    name: "Dining Table",
    what: "A table sized to seat multiple people around shared food.",
    why: "A coffee table sits too low and holds too little for a full meal — a taller table at chair height gives room for plates, dishes, and everyone's reach at once.",
    has: ["tabletop", "legs"],
  },
  {
    slug: "dining-chair",
    name: "Dining Chair",
    what: "A single seat with a back, sized for sitting upright at a table.",
    why: "Eating at a table-height surface needs a seat that holds the body upright and close to that height — a sofa's low, reclined seat would put the table at chest level instead.",
    has: ["wood", "cushions"],
  },
  {
    slug: "tablecloth",
    name: "Tablecloth",
    what: "A fabric covering laid over a dining table before a meal.",
    why: "Bare wood or stone tabletops mark and stain easily under spilled food and hot dishes — a washable cloth takes that wear and can be pulled off and cleaned instead of the table itself.",
    has: ["fabric"],
  },
  {
    slug: "placemat",
    name: "Placemat",
    what: "An individual mat set at each place setting to protect the table under plates and cutlery.",
    why: "Even with a tablecloth, direct plate-and-cutlery contact scuffs and stains a surface at each seat repeatedly — a placemat takes that concentrated wear right where each person eats.",
    has: ["fabric"],
  },
  {
    slug: "centerpiece",
    name: "Centerpiece",
    what: "A decorative arrangement, often flowers or candles, placed in the middle of a dining table.",
    why: "A long table's center sits empty and visually dead during a meal — a centerpiece fills that gap and gives the table a focal point without occupying space actually needed for plates and dishes.",
    has: ["ceramic"],
  },
  {
    slug: "salt-and-pepper-shakers",
    name: "Salt and Pepper Shakers",
    what: "A matched pair of small perforated containers that sprinkle salt and pepper onto food at the table.",
    why: "Passing a whole container of loose salt around a table would spill constantly — a shaker's perforated top releases just a light dusting per shake, letting each person season their own plate without a mess.",
    has: ["glass", "jar lid"],
  },
];

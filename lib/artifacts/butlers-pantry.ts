import type { Artifact } from "./types";

export const butlersPantry: Artifact[] = [
  {
    slug: "butlers-pantry",
    name: "Butler's Pantry",
    what: "A small transitional room between a kitchen and dining room used for staging dishes, extra storage, and prep overflow.",
    why: "A busy kitchen doesn't have counter space to stage a full dinner service mid-meal, and dining rooms have no storage at all — a room between the two gives a dedicated staging and overflow-storage area without crowding either.",
    has: ["butlers pantry counter", "china cabinet", "silverware drawer", "wine fridge", "silver polish kit", "linen napkins"],
  },
  {
    slug: "butlers-pantry-counter",
    name: "Butler's Pantry Counter",
    what: "A narrow countertop running along a butler's pantry's wall, used to stage plates and dishes between kitchen and table.",
    why: "Dishes need somewhere to sit assembled and ready right before they're carried out, not crowding the kitchen's active cooking counters — a dedicated staging counter gives that holding space exactly between where food is made and where it's served.",
    has: ["wood"],
  },
  {
    slug: "china-cabinet",
    name: "China Cabinet",
    what: "A glass-fronted cabinet that displays and stores fine dishware not used for everyday meals.",
    why: "Good china is used rarely and needs to stay dust-free and undamaged between uses — a glass-fronted cabinet keeps it visible and protected instead of stacked away out of sight in a regular cupboard.",
    has: ["glass", "wood"],
  },
  {
    slug: "silverware-drawer",
    name: "Silverware Drawer",
    what: "A drawer lined with molded compartments that separates and organizes forks, knives, and spoons.",
    why: "Loose silverware tossed in a flat drawer clatters and tangles, making one piece hard to grab without pulling out several others — molded slots keep each type separated and facing the same direction for a quick, single-piece grab.",
    has: ["drawer", "polymer"],
  },
  {
    slug: "wine-fridge",
    name: "Wine Fridge",
    what: "A small, precisely temperature-controlled refrigerator sized for storing wine bottles ready to serve.",
    why: "A full-size kitchen fridge runs too cold and its constant door-opening and vibration disturbs wine — a small dedicated unit holds a steadier, wine-appropriate temperature for bottles kept on hand for near-term serving, unlike a cellar meant for long aging.",
    has: ["compressor", "insulated cabinet"],
  },
  {
    slug: "silver-polish-kit",
    name: "Silver Polish Kit",
    what: "A small kit of polish and soft cloths kept in a butler's pantry for cleaning tarnish off silverware and serving pieces.",
    why: "Silver reacts with sulfur compounds in the air and slowly tarnishes dark even sitting untouched in a cabinet — a polish kept on hand lets tarnish be buffed off right before pieces are used instead of needing a special trip to find supplies.",
    has: ["fabric", "polymer"],
  },
  {
    slug: "linen-napkins",
    name: "Linen Napkins",
    what: "A stack of folded cloth napkins kept ready for formal table settings.",
    why: "Paper napkins feel disposable for a formal meal, and washable cloth ones hold up to repeated use — keeping a folded stack ready in the pantry means they're on hand the moment a table needs to be set.",
    has: ["fabric"],
  },
];

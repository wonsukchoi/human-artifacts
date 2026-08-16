import type { Artifact } from "./types";

export const sauna: Artifact[] = [
  {
    slug: "sauna",
    name: "Sauna",
    what: "A small enclosed wooden room heated to high temperature, used for sweating and relaxation.",
    why: "Sitting in dry heat raises skin and core temperature enough to induce heavy sweating and blood vessel dilation, something normal room temperature can't replicate — a small sealed wooden room holds that heat efficiently instead of losing it to a much larger space.",
    has: ["sauna heater", "wooden benches", "sauna door", "thermometer", "bucket and ladle", "sauna timer"],
  },
  {
    slug: "sauna-heater",
    name: "Sauna Heater",
    what: "An electric unit inside a sauna that heats a bed of rocks to radiate intense, steady heat.",
    why: "Heating the air directly and heating rocks that then radiate heat produce very different results — hot rocks store and release heat steadily and can have water poured over them for a burst of steam, something a plain space heater can't do.",
    has: ["sauna heating coil", "rocks"],
  },
  {
    slug: "sauna-heating-coil",
    name: "Sauna Heating Coil",
    what: "A resistive coil inside a sauna heater that heats a bed of rocks piled on top of it.",
    why: "Rocks need direct, sustained contact with a heat source to hold and later release warmth evenly — a coil embedded beneath the rock bed transfers heat straight into the stones instead of just warming the air around them.",
    has: ["wire"],
  },
  {
    slug: "rocks",
    name: "Rocks",
    what: "Natural stones piled on top of a sauna heater that absorb and radiate heat.",
    why: "Stone holds heat far longer than metal or air alone and releases it slowly and evenly — that's what keeps a sauna hot steadily, and what lets water thrown on the rocks flash instantly into a burst of steam.",
    has: [],
  },
  {
    slug: "wooden-benches",
    name: "Wooden Benches",
    what: "Tiered wooden benches inside a sauna that sitters use, with higher tiers reaching hotter air.",
    why: "Heat rises and layers inside a small closed room, so a bench near the ceiling sits in noticeably hotter air than one near the floor — tiered seating lets a sitter choose their own heat intensity instead of one fixed level for everyone.",
    has: ["wood"],
  },
  {
    slug: "sauna-door",
    name: "Sauna Door",
    what: "A heavily insulated door, often with a small window, that seals a sauna's heat inside.",
    why: "A sauna needs to hold a stable high temperature for the length of a session — a well-sealed door keeps that heat from escaping every time it's opened or through gaps around a regular door, while a small window lets someone check if it's occupied without opening it.",
    has: ["wood", "glass"],
  },
  {
    slug: "bucket-and-ladle",
    name: "Bucket and Ladle",
    what: "A small wooden bucket and long-handled ladle used to pour water over a sauna's heated rocks.",
    why: "Dry heat alone gives one kind of sauna experience, but pouring water onto the hot rocks flashes it instantly into steam that raises humidity and intensifies the heat — the bucket holds a ready supply and the ladle's long handle keeps a hand well clear of the hot rocks while pouring.",
    has: ["wood"],
  },
  {
    slug: "sauna-timer",
    name: "Sauna Timer",
    what: "A sand or mechanical timer used to track how long a sauna session has run.",
    why: "Staying in a sauna too long risks overheating or dehydration, but a clock is hard to check accurately in the heat and steam — a simple timer gives a clear countdown without needing to read a watch through fogged vision.",
    has: ["glass"],
  },
];

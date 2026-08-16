import type { Artifact } from "./types";

export const poolHouse: Artifact[] = [
  {
    slug: "pool-house",
    name: "Pool House",
    what: "A small standalone structure near a backyard pool used for changing, storing pool gear, and providing shade.",
    why: "Wet swimmers tracking water and chlorine through the main house is a hassle to clean up after — a separate structure right at the pool gives a place to change and rinse off before ever walking back inside.",
    has: ["changing area", "shower", "towel", "pool floats", "storage locker", "pool skimmer"],
  },
  {
    slug: "changing-area",
    name: "Changing Area",
    what: "A small partitioned space inside a pool house where swimmers change in and out of wet clothes.",
    why: "Changing in the open by the pool has no privacy — a partitioned space gives that privacy right at the poolside instead of walking dripping wet all the way back to a bedroom.",
    has: ["wood"],
  },
  {
    slug: "pool-floats",
    name: "Pool Floats",
    what: "Inflatable foam or plastic devices that keep a swimmer buoyant in the water.",
    why: "Water offers no support on its own, and not everyone can tread water or swim confidently the whole time they want to be in a pool — a float displaces enough water to hold a person up without any swimming effort.",
    has: ["polymer"],
  },
  {
    slug: "storage-locker",
    name: "Storage Locker",
    what: "A small lockable cabinet inside a pool house for stowing towels, goggles, and other pool gear between visits.",
    why: "Pool gear left out gets wet, sun-faded, or wanders off between uses — a lockable cabinet keeps a family's shared gear in one place and dry until it's needed again.",
    has: ["steel", "lock"],
  },
  {
    slug: "lock",
    name: "Lock",
    what: "A mechanism that keeps a door or lid latched shut until released by a key or combination.",
    why: "A simple latch can be opened by anyone — a lock adds a barrier that only opens for someone with the right key or code, keeping gear secure between visits.",
    has: [],
  },
  {
    slug: "pool-skimmer",
    name: "Pool Skimmer",
    what: "A long-handled net with a flat mesh scoop, used to skim leaves and debris off a pool's surface.",
    why: "Leaves and bugs on the water surface sink and rot if left, clouding the water and clogging filters — a shallow net skims them off the surface before they sink, quicker than waiting for the filter to catch everything.",
    has: ["polymer", "wire"],
  },
];

import type { Artifact } from "./types";

export const gardenShed: Artifact[] = [
  {
    slug: "garden-shed",
    name: "Garden Shed",
    what: "A small standalone outbuilding that stores yard and gardening tools separate from the house or garage.",
    why: "Garden tools are bulky, dirty, and used only outdoors — keeping them in the garage crowds out the car, and leaving them outside rusts the metal parts and rots the wood handles, so a dedicated small structure right next to where they're used solves both problems at once.",
    has: ["shed shelving", "rake", "shovel"],
  },
  {
    slug: "shed-shelving",
    name: "Shed Shelving",
    what: "Wall-mounted shelves inside a shed that hold smaller tools, pots, and supplies off the floor.",
    why: "A shed's floor space fills up fast with long-handled tools leaning everywhere — shelving lifts smaller items up and out of the way so the handled tools stay reachable near the door.",
    has: ["wood"],
  },
  {
    slug: "rake",
    name: "Rake",
    what: "A long-handled tool with a row of rigid tines that gathers loose material like leaves or clippings.",
    why: "Leaves and grass clippings are too spread out and light to gather by hand efficiently — a row of tines lets one sweeping motion pull a wide swath of material into a pile.",
    has: ["rake tines", "wood"],
  },
  {
    slug: "rake-tines",
    name: "Rake Tines",
    what: "The row of thin, curved metal prongs at a rake's head that catch and drag loose material.",
    why: "A flat blade would just push material along the ground instead of lifting it — separate curved tines slip under loose leaves and clippings and carry them forward as the rake is pulled.",
    has: ["steel"],
  },
  {
    slug: "shovel",
    name: "Shovel",
    what: "A long-handled tool with a broad, slightly concave blade used to dig, lift, and move loose material like soil.",
    why: "Digging by hand can't generate enough force or leverage to break into packed soil — a flat blade on a long handle lets body weight and arm leverage do the cutting and lifting instead.",
    has: ["shovel blade", "wood"],
  },
  {
    slug: "shovel-blade",
    name: "Shovel Blade",
    what: "The broad, slightly curved metal scoop at a shovel's working end that cuts into and holds dug material.",
    why: "A flat rigid plate wouldn't hold loose soil as it's lifted — a slight curve gives the blade enough of a scoop shape to carry material without it sliding straight back off.",
    has: ["steel"],
  },
];

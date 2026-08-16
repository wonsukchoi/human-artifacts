import type { Artifact } from "./types";

export const tackRoom: Artifact[] = [
  {
    slug: "tack-room",
    name: "Tack Room",
    what: "A small room attached to a barn or stable where horse riding equipment is stored.",
    why: "Saddles and bridles are expensive and need to stay dry and off the ground to hold their shape — a dedicated room with racks built for that gear keeps it organized and protected instead of piled in a barn corner.",
    has: ["saddle rack", "bridle hooks", "grooming kit", "riding helmet"],
  },
  {
    slug: "saddle-rack",
    name: "Saddle Rack",
    what: "A curved wall-mounted bracket shaped to hold a saddle's contour, keeping its shape between rides.",
    why: "A saddle set flat or leaned against a wall flexes and can warp its leather over time — a curved rack supports it in the same shape it holds on a horse's back, preventing that distortion.",
    has: ["wood"],
  },
  {
    slug: "bridle-hooks",
    name: "Bridle Hooks",
    what: "Wall-mounted hooks that hold a bridle's straps untangled and ready to grab.",
    why: "A bridle's many straps and buckles knot together instantly if left in a pile — hanging it on a hook keeps every strap gravity-straightened and ready to put on without untangling first.",
    has: ["steel"],
  },
  {
    slug: "grooming-kit",
    name: "Grooming Kit",
    what: "A set of brushes and combs kept in a tack room for cleaning a horse's coat, mane, and hooves before and after riding.",
    why: "Dirt and sweat trapped under tack rubs a horse's skin raw during a ride — brushing it out beforehand prevents that irritation, and grooming afterward clears sweat and mud before it dries into the coat.",
    has: ["grooming brush", "hoof pick"],
  },
  {
    slug: "grooming-brush",
    name: "Grooming Brush",
    what: "A stiff-bristled brush used to sweep dirt and loose hair out of a horse's coat.",
    why: "A horse's coat traps dirt and shed hair close to the skin that a hand alone can't loosen — stiff bristles dragged against the grain lift that debris out before it works its way under tack and irritates the skin.",
    has: ["wood"],
  },
  {
    slug: "hoof-pick",
    name: "Hoof Pick",
    what: "A small hooked metal tool used to scrape packed dirt and stones out of a horse's hoof.",
    why: "Dirt and small stones wedged into the underside of a hoof can bruise a horse as it walks — a hooked pick reaches into that tight space to clear it out before riding, something fingers can't safely or effectively do.",
    has: ["steel"],
  },
  {
    slug: "riding-helmet",
    name: "Riding Helmet",
    what: "A hard protective helmet worn while riding, sized to absorb impact in a fall.",
    why: "A fall from horseback drops a rider's head from several feet with real speed behind it — a rigid shell over crushable foam absorbs that impact instead of it transferring straight to the skull.",
    has: ["foam", "polymer"],
  },
];

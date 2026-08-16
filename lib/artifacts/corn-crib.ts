import type { Artifact } from "./types";

export const cornCrib: Artifact[] = [
  {
    slug: "corn-crib",
    name: "Corn Crib",
    what: "A narrow slatted structure raised off the ground, used to dry and store harvested ear corn.",
    why: "Corn stored still on the ear needs constant airflow to dry out and avoid rot, and rodents go straight for grain left at ground level — narrow slatted walls let air pass freely through the pile while a raised floor keeps it out of reach of most pests.",
    has: ["corn crib slats", "raised floor", "moisture tester", "corn husker"],
  },
  {
    slug: "corn-crib-slats",
    name: "Corn Crib Slats",
    what: "Widely spaced wooden slats forming a corn crib's walls, narrow enough to hold corn in but open enough to let air pass through.",
    why: "Solid walls would trap humidity around the corn and cause it to mold before it fully dried — the gaps let a constant breeze move through the whole pile instead.",
    has: ["wood"],
  },
  {
    slug: "raised-floor",
    name: "Raised Floor",
    what: "A floor built up on posts, keeping a structure's contents clear of ground moisture and rodents.",
    why: "Ground-level storage sits in the dampest, most rodent-accessible zone of a structure — raising the floor on posts puts stored contents above both problems at once.",
    has: ["wood"],
  },
  {
    slug: "moisture-tester",
    name: "Moisture Tester",
    what: "A handheld probe device that measures the water content of stored grain.",
    why: "Grain stored too wet molds and rots within weeks, but there's no way to judge moisture content by eye or touch reliably — a probe gives an exact reading so a farmer knows whether it's dry enough to store safely.",
    has: [],
  },
  {
    slug: "corn-husker",
    name: "Corn Husker",
    what: "A small hand tool with a hooked blade used to strip the outer husk off an ear of corn.",
    why: "Pulling husk off by hand is slow and can tear the ear — a hooked blade catches and slits the husk in one motion, peeling it back cleanly in a fraction of the time.",
    has: ["blade", "handle"],
  },
];

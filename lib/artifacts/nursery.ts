import type { Artifact } from "./types";

export const nursery: Artifact[] = [
  {
    slug: "nursery",
    name: "Nursery",
    what: "A room set up for an infant to sleep and be cared for.",
    why: "A newborn needs a controlled, safe sleeping space separate from an adult bed, plus a dedicated surface for the frequent diaper changes and feeding that happen through the day and night.",
    has: ["crib", "changing table", "mobile"],
  },
  {
    slug: "crib",
    name: "Crib",
    what: "An enclosed bed with high slatted sides, sized for an infant to sleep in safely.",
    why: "An infant can't be trusted not to roll or climb out of an open bed, and loose bedding around them is a suffocation risk — closely spaced slats let a caregiver see and reach the baby while keeping them contained.",
    has: ["crib slats", "mattress"],
  },
  {
    slug: "crib-slats",
    name: "Crib Slats",
    what: "Closely spaced vertical bars forming the sides of a crib.",
    why: "The gaps have to be narrow enough that a baby's head can't slip through and get stuck, while still letting air and light pass and a caregiver see in from any angle.",
    has: ["wood"],
  },
  {
    slug: "changing-table",
    name: "Changing Table",
    what: "A raised, padded table used for changing an infant's diaper.",
    why: "Changing a diaper on the floor strains a caregiver's back over dozens of changes a day — a table brings the baby up to waist height, with supplies kept within arm's reach the whole time.",
    has: ["changing pad", "changing table drawer"],
  },
  {
    slug: "changing-pad",
    name: "Changing Pad",
    what: "A waterproof cushioned pad on top of a changing table that the baby lies on.",
    why: "An infant needs a soft, slightly contoured surface to lie still on, and the surface has to be wipeable since it gets soiled repeatedly through the day.",
    has: ["foam", "rubber"],
  },
  {
    slug: "changing-table-drawer",
    name: "Changing Table Drawer",
    what: "A shallow drawer built into a changing table for diapers and wipes.",
    why: "A caregiver's hands are occupied holding the baby steady during a change — supplies stored in a drawer built into the same table stay within one-handed reach instead of across the room.",
    has: ["wood"],
  },
  {
    slug: "mobile",
    name: "Mobile",
    what: "A hanging arrangement of small toys or shapes suspended above a crib that slowly rotates.",
    why: "A newborn's eyes can only focus at short range and are drawn to motion and contrast — a slow-turning mobile within that focal distance gives them something to track and helps develop visual attention.",
    has: ["mobile arm", "polymer"],
  },
  {
    slug: "mobile-arm",
    name: "Mobile Arm",
    what: "A curved arm that clamps to a crib rail and extends the mobile's hanging toys out over the mattress.",
    why: "The toys need to hang centered above where the baby actually lies, not off to the side of the crib — the arm's reach is what positions them there.",
    has: ["steel"],
  },
];

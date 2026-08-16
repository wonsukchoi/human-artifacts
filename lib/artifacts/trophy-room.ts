import type { Artifact } from "./types";

export const trophyRoom: Artifact[] = [
  {
    slug: "trophy-room",
    name: "Trophy Room",
    what: "A room lined with display cases for trophies, medals, and sports memorabilia.",
    why: "Awards earned over years pile up in boxes or scattered shelves where they're rarely seen again — a room with dedicated cases keeps them visible and protected, turning years of accomplishment into something actually looked at instead of stored away.",
    has: ["display case", "trophy shelf", "jersey display", "engraved nameplate", "banner"],
  },
  {
    slug: "display-case",
    name: "Display Case",
    what: "A glass-fronted case that protects and displays smaller trophies and medals from dust and handling.",
    why: "Small items like medals and trophies collect dust and tarnish with repeated handling — a sealed glass case keeps them visible while protecting the surface finish that dulls with too much touching.",
    has: ["glass", "wood"],
  },
  {
    slug: "trophy-shelf",
    name: "Trophy Shelf",
    what: "An open shelf for larger trophies too tall or wide to fit inside a display case.",
    why: "Not every trophy is small — some cups and plaques are large enough that a sealed case would need to be huge just to fit one — an open shelf handles that oversized scale without needing a case at all.",
    has: ["wood"],
  },
  {
    slug: "jersey-display",
    name: "Jersey Display",
    what: "A shadow box frame that mounts a folded sports jersey flat against a backing board behind glass.",
    why: "A jersey hung on a regular hanger sags and twists out of shape over years — a shadow box holds it flat and rigid behind protective glass the same way a picture frame protects a print.",
    has: ["glass", "backing board"],
  },
  {
    slug: "engraved-nameplate",
    name: "Engraved Nameplate",
    what: "A small metal plate engraved with a name, date, or achievement, mounted beneath a trophy or display case item.",
    why: "A trophy alone doesn't say who earned it or when — a nameplate fixed right below it gives that context permanently attached to the object instead of relying on memory or a separate log.",
    has: ["steel"],
  },
  {
    slug: "banner",
    name: "Banner",
    what: "A large fabric flag bearing a team or school name, hung from the ceiling or high on a wall of a trophy room.",
    why: "Trophies and photos sit at eye level and read as personal collectibles — a banner hung high and large signals team or institutional pride at a scale small items on shelves can't match.",
    has: ["fabric"],
  },
];

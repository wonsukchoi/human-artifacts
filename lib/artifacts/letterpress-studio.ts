import type { Artifact } from "./types";

export const letterpressStudio: Artifact[] = [
  {
    slug: "letterpress-studio",
    name: "Letterpress Studio",
    what: "A room with a manual printing press used to print text and images from inked, raised type.",
    why: "Setting individual metal letters by hand and pressing them onto paper produces a tactile, deep-impression print that digital printing can't replicate — a dedicated press and type cases are needed to do that by hand.",
    has: ["printing press", "type cases", "composing stick"],
  },
  {
    slug: "printing-press",
    name: "Printing Press",
    what: "A mechanical press that presses inked, raised type firmly against paper to transfer an impression.",
    why: "Ink alone brushed onto raised type wouldn't transfer clearly to paper — the press applies even, firm pressure across the whole plate at once, driving the inked surface into the paper's fibers for a crisp, deep print.",
    has: ["steel"],
  },
  {
    slug: "type-cases",
    name: "Type Cases",
    what: "Shallow wooden cases with many small compartments that hold individual metal letters sorted by character.",
    why: "A printer needs to grab one specific letter quickly and repeatedly while setting a whole page of text — sorting each character into its own compartment makes that possible instead of digging through a mixed pile every time.",
    has: ["wood"],
  },
  {
    slug: "composing-stick",
    name: "Composing Stick",
    what: "A small adjustable metal tray held in the hand that a typesetter arranges individual letters into, line by line.",
    why: "Setting type letter by letter directly into the press bed would be slow and error-prone to check — a handheld stick lets the typesetter compose and proofread one line at a time before locking it into the full page.",
    has: ["steel"],
  },
];

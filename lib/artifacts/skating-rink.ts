import type { Artifact } from "./types";

export const skatingRink: Artifact[] = [
  {
    slug: "skating-rink",
    name: "Skating Rink",
    what: "A flat frozen surface, either natural or refrigerated, used for ice skating.",
    why: "Skate blades need a hard, smooth, low-friction surface to glide on — ice is one of the few surfaces smooth and slippery enough at a stable temperature to support that gliding motion safely.",
    has: ["ice sheet", "rink boards", "zamboni", "ice skates", "penalty box"],
  },
  {
    slug: "ice-sheet",
    name: "Ice Sheet",
    what: "A thin, level layer of frozen water maintained at a controlled temperature across a rink's entire surface.",
    why: "An uneven or partially melted surface would catch a skate blade and cause a fall — a refrigerated system keeps the whole sheet at a uniform temperature and thickness so a blade glides predictably everywhere on it.",
    has: [],
  },
  {
    slug: "rink-boards",
    name: "Rink Boards",
    what: "A low wall of padded boards running around a rink's perimeter that contains players and the puck or ball within the playing surface.",
    why: "A puck or a skater sliding fast needs something to stop against at the edge instead of flying off into open space — the boards absorb that impact and keep play contained to the ice.",
    has: ["wood", "foam"],
  },
  {
    slug: "zamboni",
    name: "Zamboni",
    what: "A motorized machine that resurfaces an ice rink by shaving, cleaning, and re-flooding the ice with a thin layer of water.",
    why: "Skate blades gouge and roughen the ice with every pass, and that texture builds up fast — a resurfacing machine shaves the top layer flat and lays fresh water that freezes smooth, restoring the surface between sessions instead of letting it degrade.",
    has: ["motor", "zamboni water tank"],
  },
  {
    slug: "zamboni-water-tank",
    name: "Zamboni Water Tank",
    what: "A large onboard tank on a zamboni that holds hot water released onto the ice during resurfacing.",
    why: "Hot water spreads and bonds to the ice surface more evenly than cold water before freezing smooth — the tank carries enough to coat the whole rink in one pass without needing to refill partway through.",
    has: ["steel"],
  },
  {
    slug: "ice-skates",
    name: "Ice Skates",
    what: "Boots with a thin metal blade fixed to the sole, worn to glide across ice.",
    why: "A flat shoe sole has too much surface friction to slide on ice — a narrow blade concentrates weight onto a thin edge that cuts slightly into the surface and glides instead of gripping.",
    has: ["steel", "leather"],
  },
  {
    slug: "penalty-box",
    name: "Penalty Box",
    what: "A small enclosed bench beside the rink where a player serves a timed suspension from play.",
    why: "A player who breaks a rule needs to be removed from play for a set time without leaving the rink entirely — a bench right at rinkside keeps them close enough to return the moment their time is up.",
    has: ["wood", "glass"],
  },
];

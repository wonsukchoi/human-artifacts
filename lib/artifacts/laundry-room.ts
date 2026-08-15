import type { Artifact } from "./types";

export const laundryRoom: Artifact[] = [
  {
    slug: "laundry-room",
    name: "Laundry Room",
    what: "A room equipped with machines for washing and drying clothes.",
    why: "Fabric holds onto sweat, oil, and stains that plain water alone won't lift. Dedicated machines agitate, heat, and spin clothes far more thoroughly than hand-washing, and doing it in one place keeps the mess and noise contained.",
    has: ["washing machine", "dryer", "laundry basket"],
  },
  {
    slug: "laundry-basket",
    name: "Laundry Basket",
    what: "A perforated basket for carrying and holding dirty clothes before they're washed.",
    why: "Dirty clothes pile up between wash days and need somewhere to sit — sealing sweat-damp fabric in a solid bin traps moisture and starts mildew, so the basket's open weave keeps air moving through the pile instead.",
    has: ["polymer", "basket handles"],
  },
  {
    slug: "basket-handles",
    name: "Basket Handles",
    what: "Two molded grips on opposite sides of a basket's rim, sized to be gripped one in each hand.",
    why: "A full basket of clothes is heavy and awkward to hug against the body — a grip on each side lets it be carried steadily with both hands and swung up onto a hip or into a machine.",
    has: ["polymer"],
  },
  {
    slug: "washing-machine",
    name: "Washing Machine",
    what: "A machine that agitates clothes in water and detergent, then spins them to remove the water.",
    why: "Hand-scrubbing clothes is slow and inconsistent. A motor-driven drum agitates every part of a load evenly, and spinning it fast afterward forces most of the water back out before drying.",
    has: ["drum", "motor"],
  },
  {
    slug: "drum",
    name: "Drum",
    what: "The perforated rotating cylinder inside a washing machine or dryer that holds clothes during a cycle.",
    why: "Clothes need to tumble freely without escaping or blocking drainage — the perforations let water or air in and out while the cylinder shape keeps the load moving evenly.",
    has: ["steel"],
  },
  {
    slug: "dryer",
    name: "Dryer",
    what: "A machine that tumbles damp clothes through heated air until the water in them evaporates.",
    why: "Air-drying is slow and space-consuming. Forcing hot air through a tumbling drum evaporates the remaining water in a fraction of the time.",
    has: ["drum", "heating element"],
  },
];

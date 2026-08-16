import type { Artifact } from "./types";

export const blacksmithForge: Artifact[] = [
  {
    slug: "blacksmith-forge",
    name: "Blacksmith Forge",
    what: "A room or structure with a coal or gas forge and anvil for heating and hammering metal into shape.",
    why: "Metal has to be heated red-hot before it becomes soft enough to hammer into shape, and that combination of open flame and repeated heavy hammering needs sturdy, fireproof space distinct from a wood-focused workshop.",
    has: ["forge", "anvil", "blacksmith hammer", "blacksmith tongs"],
  },
  {
    slug: "forge",
    name: "Forge",
    what: "A fuel-fired hearth that heats metal to a glowing, malleable temperature before it's hammered.",
    why: "Metal at room temperature is too rigid to reshape without cracking it — heating it in a forge's concentrated flame softens the metal enough to be worked without breaking, and holds it there as long as needed.",
    has: ["gas jet"],
  },
  {
    slug: "anvil",
    name: "Anvil",
    what: "A heavy steel block with a flat working surface that hot metal is hammered against to shape it.",
    why: "Hammering metal against a soft or springy surface would just absorb the blow instead of transferring force into the metal — the anvil's mass and rigidity bounce that force straight back up into the workpiece, which is what actually deforms it.",
    has: ["steel"],
  },
  {
    slug: "blacksmith-hammer",
    name: "Blacksmith Hammer",
    what: "A heavy-headed hammer used to strike hot metal against the anvil and drive its shape.",
    why: "Shaping metal takes far more repeated force than any hand tool without a swung head could deliver — the hammer's weight and swing concentrate that force into each strike, gradually driving the hot metal into shape blow by blow.",
    has: ["steel", "handle"],
  },
  {
    slug: "blacksmith-tongs",
    name: "Blacksmith Tongs",
    what: "Long-handled pincers used to grip and hold hot metal steady on the anvil without touching it directly.",
    why: "Metal fresh from the forge is far too hot to hold by hand — long tongs keep fingers a safe distance away while still gripping the workpiece firmly enough to position it precisely under the hammer.",
    has: ["steel"],
  },
];

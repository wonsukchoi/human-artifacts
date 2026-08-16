import type { Artifact } from "./types";

export const homeDistillery: Artifact[] = [
  {
    slug: "home-distillery",
    name: "Home Distillery",
    what: "A room equipped with a still for distilling fermented liquid into spirits like whiskey or brandy.",
    why: "Fermentation alone only produces beer- or wine-strength alcohol — distilling heats that liquid to separate and concentrate the alcohol into much higher-proof spirits, a process regulated and complex enough to need its own dedicated setup.",
    has: ["still", "condenser", "spirit safe", "hydrometer"],
  },
  {
    slug: "still",
    name: "Still",
    what: "A heated vessel that boils fermented liquid so its alcohol vapor rises off before the rest of the liquid.",
    why: "Alcohol boils at a lower temperature than water — heating the mash just past that point releases mostly alcohol vapor while leaving most of the water behind, concentrating the alcohol that gets collected downstream.",
    has: ["steel"],
  },
  {
    slug: "condenser",
    name: "Condenser",
    what: "A coiled tube, cooled by surrounding water, that cools rising alcohol vapor back into liquid form.",
    why: "The vapor coming off the still needs to be turned back into a collectible liquid — running it through a cold coiled tube pulls heat out fast enough to condense it before it's lost as vapor.",
    has: ["steel"],
  },
  {
    slug: "spirit-safe",
    name: "Spirit Safe",
    what: "A locked glass-walled box downstream of the condenser that lets a distiller watch and measure spirit output without touching it directly.",
    why: "Distilled spirit needs to be checked for clarity and proof as it comes off the still, but historically also had to be sealed from tampering before tax was paid — a locked glass box lets the flow be observed and sampled through a valve without ever opening direct access to the raw spirit.",
    has: ["glass", "valve"],
  },
  {
    slug: "hydrometer",
    name: "Hydrometer",
    what: "A weighted glass float that measures the alcohol content of a liquid by how deep it sinks.",
    why: "Alcohol is less dense than water, so a fermented or distilled liquid's density directly indicates its alcohol content — a calibrated float reads that density at a glance instead of needing a lab test.",
    has: ["glass"],
  },
];

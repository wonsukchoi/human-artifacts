import type { Artifact } from "./types";

export const crawlSpace: Artifact[] = [
  {
    slug: "crawl-space",
    name: "Crawl Space",
    what: "A narrow, low-clearance space between a house's floor and the ground, used to access plumbing and wiring.",
    why: "A house built without a full basement still needs room underneath for pipes, ducts, and wiring to run and be serviced — a shallow crawl space gives just enough clearance to reach that access without excavating a full basement.",
    has: ["vapor barrier", "access hatch", "pier and beam", "plumbing pipes", "dehumidifier", "termite bait stations"],
  },
  {
    slug: "vapor-barrier",
    name: "Vapor Barrier",
    what: "A sheet of plastic laid over a crawl space's dirt floor to block ground moisture from rising into the space.",
    why: "Bare soil constantly releases moisture into the air above it, which would soak into floor joists and encourage rot and mold — a sealed plastic sheet blocks that moisture at the source instead of letting it rise unchecked.",
    has: ["polymer"],
  },
  {
    slug: "access-hatch",
    name: "Access Hatch",
    what: "A small hinged panel, usually in an exterior wall or floor, that opens into a crawl space for occasional entry.",
    why: "A crawl space is only entered rarely for repairs, so it doesn't need a full door — a small hatch gives just enough opening for a person to squeeze through and reseals flush against pests and drafts the rest of the time.",
    has: ["wood", "hinges"],
  },
  {
    slug: "pier-and-beam",
    name: "Pier and Beam",
    what: "Short concrete or masonry piers spaced across a crawl space that support the floor beams above.",
    why: "A wood floor spanning the whole width of a house would sag under its own weight and furniture load without intermediate support — piers spaced underneath carry that load down to solid ground at regular intervals instead of relying on the perimeter foundation alone.",
    has: ["support beam"],
  },
  {
    slug: "plumbing-pipes",
    name: "Plumbing Pipes",
    what: "Rigid pipes running through a crawl space that carry water supply and drainage between a house's foundation and its fixtures.",
    why: "Water needs to travel between the street connection and every sink, toilet, and shower in the house — routing that plumbing through the crawl space keeps it accessible for repairs without running exposed through living spaces above.",
    has: ["steel"],
  },
  {
    slug: "dehumidifier",
    name: "Dehumidifier",
    what: "A small appliance that pulls moisture out of the air in an enclosed space like a crawl space.",
    why: "Even with a vapor barrier and vents, trapped humid air in a crawl space still promotes mold and wood rot over time — actively pulling moisture out keeps humidity low even on days when passive ventilation alone isn't enough.",
    has: ["compressor", "dehumidifier tank"],
  },
  {
    slug: "dehumidifier-tank",
    name: "Dehumidifier Tank",
    what: "A removable reservoir on a dehumidifier that collects water condensed out of the air.",
    why: "Water pulled from humid air has to go somewhere instead of dripping onto the floor — a sealed removable tank catches it so it can be emptied periodically instead of needing a permanent drain line.",
    has: ["polymer"],
  },
  {
    slug: "termite-bait-stations",
    name: "Termite Bait Stations",
    what: "Small in-ground stations placed around a foundation's perimeter that lure and poison termites before they reach the structure.",
    why: "Termites tunnel underground and can reach a house's wood framing completely unseen until real damage is done — bait stations intercept them at the perimeter, killing the colony before it ever gets inside.",
    has: ["polymer"],
  },
];

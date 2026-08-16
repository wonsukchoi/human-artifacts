import type { Artifact } from "./types";

export const sunroom: Artifact[] = [
  {
    slug: "sunroom",
    name: "Sunroom",
    what: "A glass-walled room attached to a house that lets in natural light and outdoor views while staying enclosed.",
    why: "Sitting directly outside means dealing with bugs, wind, and changing weather — a room enclosed almost entirely in glass gets the light and view of being outside while staying climate-controlled and sheltered.",
    has: ["skylight", "wicker chair", "sliding glass door", "wicker table", "thermal curtains"],
  },
  {
    slug: "skylight",
    name: "Skylight",
    what: "A fixed glass panel set into a roof or ceiling that lets sunlight in from above.",
    why: "Wall windows only let light in from the side, which leaves a deep room dim in the middle — an opening straight up through the roof lights the whole space evenly all day.",
    has: ["glass", "skylight frame"],
  },
  {
    slug: "skylight-frame",
    name: "Skylight Frame",
    what: "The sealed frame set into the roof that holds a skylight's glass panel and keeps rain out.",
    why: "A pane of glass alone can't seal against a sloped roof — the frame is what's actually fitted and flashed into the roofing to keep water from leaking in around the edges.",
    has: ["steel"],
  },
  {
    slug: "wicker-chair",
    name: "Wicker Chair",
    what: "A chair woven from thin, flexible strips of natural or synthetic cane.",
    why: "Solid wood furniture left in a humid, sun-exposed sunroom can warp and crack — woven cane flexes slightly and sheds moisture through its open weave instead of holding it against a solid surface.",
    has: ["wicker"],
  },
  {
    slug: "sliding-glass-door",
    name: "Sliding Glass Door",
    what: "A large glass panel door that slides horizontally along a track to open a sunroom to the yard.",
    why: "A hinged door swinging open would need clear floor space on both sides and lets in a rush of outside air all at once — a sliding panel opens the same width along a fixed track without swinging into the room or the outside space.",
    has: ["glass", "sliding door track"],
  },
  {
    slug: "sliding-door-track",
    name: "Sliding Door Track",
    what: "A grooved metal channel along a sliding glass door's frame that guides its rollers as it opens and closes.",
    why: "The door has to move in a perfectly straight line without swinging or binding — the track constrains that motion to a single smooth path instead of leaving the panel free to wobble.",
    has: ["steel"],
  },
  {
    slug: "wicker-table",
    name: "Wicker Table",
    what: "A low table woven from the same cane or synthetic wicker as a sunroom's chairs.",
    why: "A wood or glass table brought into a humid, sun-exposed sunroom would warp or overheat to the touch — a woven wicker table matches the chairs' material and tolerates the same conditions without needing separate upkeep.",
    has: ["wicker"],
  },
  {
    slug: "thermal-curtains",
    name: "Thermal Curtains",
    what: "Heavy insulated curtains hung over a sunroom's glass walls to block heat loss or excess sun.",
    why: "A room walled almost entirely in glass loses heat fast on cold nights and overheats in direct summer sun — thick insulated curtains drawn over the glass block that heat transfer in either direction, something the glass alone can't regulate.",
    has: ["fabric", "curtain rod"],
  },
];

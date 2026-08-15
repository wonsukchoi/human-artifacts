import type { Artifact } from "./types";

export const homeTheater: Artifact[] = [
  {
    slug: "home-theater",
    name: "Home Theater",
    what: "A room set up with a large screen, surround sound, and dedicated seating for watching movies.",
    why: "A regular living room's TV and seating are angled for everyday use, not focused viewing — a dedicated theater room controls light, sound, and sightlines the way a commercial theater does, just at home.",
    has: ["projector", "theater seating", "surround speakers"],
  },
  {
    slug: "projector",
    name: "Projector",
    what: "A device that casts a large image onto a screen or wall using a bright internal light source.",
    why: "A flat-panel screen only gets so big before cost and size become impractical — projecting light onto a separate surface produces a far larger image for a fraction of the cost of an equivalent flat panel.",
    has: ["projector lens", "projector bulb"],
  },
  {
    slug: "projector-lens",
    name: "Projector Lens",
    what: "A precisely shaped glass lens that focuses and enlarges a projector's internal image onto a distant screen.",
    why: "Light leaving the source alone would just spread into a blurry glow — the lens bends and focuses it into a sharp, enlarged, correctly proportioned image at whatever distance the screen sits.",
    has: ["glass"],
  },
  {
    slug: "projector-bulb",
    name: "Projector Bulb",
    what: "An extremely bright lamp inside a projector that provides the light source for the projected image.",
    why: "Enlarging an image dozens of times over spreads its light thin — the bulb has to be far brighter than a normal light source just to keep the final projected image visible in a lit room.",
    has: [],
  },
  {
    slug: "theater-seating",
    name: "Theater Seating",
    what: "Reclined, cushioned individual seats arranged in rows facing a screen.",
    why: "Watching a long movie needs sustained comfort a sofa's upright cushions don't give for hours at a stretch — reclined individual seats support the body the way a commercial theater's seats do.",
    has: ["cushions", "legs"],
  },
  {
    slug: "surround-speakers",
    name: "Surround Speakers",
    what: "Multiple speakers placed around a room's perimeter that reproduce sound from different directions at once.",
    why: "A single set of front speakers can't recreate sound coming from behind or beside a viewer — placing speakers around the room reproduces the directional sense a movie's mix is built to use.",
    has: ["speaker", "wire"],
  },
];

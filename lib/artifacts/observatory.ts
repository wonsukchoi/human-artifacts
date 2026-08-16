import type { Artifact } from "./types";

export const observatory: Artifact[] = [
  {
    slug: "observatory",
    name: "Observatory",
    what: "A small dome-roofed room, often on a rooftop, built to house a telescope for viewing the night sky.",
    why: "A telescope needs a clear, unobstructed view straight up with nothing blocking the sky, and stray indoor light ruins night vision — a dedicated dome with an opening slit gives both, something no regular window or balcony can offer.",
    has: ["telescope", "observatory dome", "star chart", "observatory chair", "red flashlight"],
  },
  {
    slug: "telescope",
    name: "Telescope",
    what: "An optical instrument that gathers and magnifies distant light, used to view stars and planets.",
    why: "The human eye alone gathers far too little light to resolve detail on faint, distant objects — a telescope's larger lens or mirror collects much more light and focuses it into a magnified image the eye actually can resolve.",
    has: ["telescope lens", "telescope tripod"],
  },
  {
    slug: "telescope-lens",
    name: "Telescope Lens",
    what: "A large precision-ground glass lens or mirror at a telescope's front that gathers and focuses incoming light.",
    why: "The bigger the light-gathering surface, the fainter the object it can resolve — this lens is what actually determines how much of that faint distant light gets captured before the eyepiece magnifies it.",
    has: ["glass"],
  },
  {
    slug: "telescope-tripod",
    name: "Telescope Tripod",
    what: "An adjustable stand that holds a telescope steady and lets it be aimed precisely at a point in the sky.",
    why: "Even a tiny hand tremor gets magnified along with the image, blurring anything held by hand — a fixed stand holds the telescope perfectly still, and fine adjustment knobs let it track a slowly moving target.",
    has: ["steel"],
  },
  {
    slug: "observatory-dome",
    name: "Observatory Dome",
    what: "A rotating dome roof with a narrow retractable slit, sheltering an observatory while allowing the telescope to view any part of the sky.",
    why: "The telescope needs to point anywhere in the sky while staying protected from wind and weather the rest of the time — a dome that rotates and opens only a narrow slit gives an unobstructed view in any direction without exposing the whole room.",
    has: ["steel"],
  },
  {
    slug: "star-chart",
    name: "Star Chart",
    what: "A printed or digital map showing the position of stars and constellations in the night sky.",
    why: "The sky looks like an undifferentiated scatter of points without a reference — a chart matches those points to named stars and constellations, letting an observer find and identify a specific object instead of aiming blindly.",
    has: [],
  },
  {
    slug: "observatory-chair",
    name: "Observatory Chair",
    what: "A height-adjustable seat that lets an observer look through a telescope's eyepiece comfortably at any angle.",
    why: "A telescope's eyepiece ends up at a different height and angle depending on where in the sky it's aimed, from near the ground to straight overhead — a chair that raises, lowers, and tilts lets the observer's eye follow that eyepiece instead of contorting to reach it standing.",
    has: ["legs", "cushions"],
  },
  {
    slug: "red-flashlight",
    name: "Red Flashlight",
    what: "A flashlight fitted with a red lens or bulb, used to see in the dark without ruining night-adapted vision.",
    why: "Eyes take up to half an hour to fully adjust to darkness for viewing faint stars, and a moment of white light resets that adaptation instantly — red light barely affects the eye's night-adapted rod cells, so it lets someone read a chart or find a dropped eyepiece without losing that adjustment.",
    has: ["bulb", "battery"],
  },
];

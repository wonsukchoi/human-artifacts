import type { Artifact } from "./types";

export const office: Artifact[] = [
  {
    slug: "office",
    name: "Office",
    what: "A room set up for focused desk work — reading, writing, or using a computer.",
    why: "Concentrated mental work needs a dedicated, quiet surface and seat separate from where people eat or relax, or focus keeps breaking against distraction and bad posture.",
    has: ["desk", "office chair", "computer"],
  },
  {
    slug: "desk",
    name: "Desk",
    what: "A flat-topped table sized and positioned for sitting work, usually with a drawer for supplies.",
    why: "Reading, writing, and typing need a stable surface at the right height for the hands and eyes, with storage nearby for what's actively in use.",
    has: ["tabletop", "drawer"],
  },
  {
    slug: "office-chair",
    name: "Office Chair",
    what: "A chair with an adjustable seat height and wheels, built for sitting at a desk for extended periods.",
    why: "Sitting still at a desk for hours strains the lower back and hips differently than sitting on a sofa — height adjustment and swivel let the body reposition without standing up.",
    has: ["cushions", "wheels"],
  },
  {
    slug: "wheels",
    name: "Wheels",
    what: "Small rollers fixed to the base of a chair that let it roll and swivel across the floor.",
    why: "Reaching for something across the desk means sliding the whole chair, not standing up each time — wheels are what make that a smooth roll instead of a drag.",
    has: [],
  },
  {
    slug: "computer",
    name: "Computer",
    what: "An electronic device for processing and displaying digital information, used for work at a desk.",
    why: "Most desk work today is digital — writing, calculating, and communicating happen faster and more flexibly on a screen than on paper.",
    has: ["screen", "keyboard"],
  },
  {
    slug: "keyboard",
    name: "Keyboard",
    what: "A grid of mechanical buttons, each mapped to a character or command, used to enter text and instructions.",
    why: "Typing requires converting a huge set of discrete symbols into signals a computer can process — dedicated keys, one per symbol, are faster and more reliable than any other manual input method devised so far.",
    has: ["buttons"],
  },
];

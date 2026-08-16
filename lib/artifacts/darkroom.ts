import type { Artifact } from "./types";

export const darkroom: Artifact[] = [
  {
    slug: "darkroom",
    name: "Darkroom",
    what: "A light-sealed room used to develop photographic film using chemical baths.",
    why: "Undeveloped film reacts to any light exposure, ruining the image before it's fixed — a fully sealed, lightless room is the only environment the film can be safely handled and processed in before it's chemically stabilized.",
    has: ["safelight", "developing trays", "enlarger", "print washer", "film reel"],
  },
  {
    slug: "safelight",
    name: "Safelight",
    what: "A dim red or amber lamp that provides just enough light to work by without exposing photographic paper.",
    why: "Working in complete darkness makes handling chemicals and timing exposures nearly impossible — most photographic paper is far less sensitive to red light than to the full spectrum, so a red bulb gives just enough visibility without ruining the print.",
    has: ["bulb"],
  },
  {
    slug: "developing-trays",
    name: "Developing Trays",
    what: "A set of shallow trays holding chemical baths that photographic paper is dipped through in sequence to develop, stop, and fix the image.",
    why: "Each stage of development needs its own separate chemical bath applied in order — the developer brings out the image, the stop bath halts that reaction, and the fixer makes it permanent — so trays keep each solution separate and reusable dip to dip.",
    has: ["polymer"],
  },
  {
    slug: "enlarger",
    name: "Enlarger",
    what: "A projector-like device that shines light through a film negative onto photographic paper below, enlarging the image.",
    why: "A negative is the same tiny size as the film frame itself — projecting light through it and focusing that projection onto a larger sheet of paper is what actually blows the image up to a usable print size.",
    has: ["enlarger lens", "enlarger bulb"],
  },
  {
    slug: "enlarger-lens",
    name: "Enlarger Lens",
    what: "A precision lens inside an enlarger that focuses the projected image sharply onto the paper below.",
    why: "Light passing through a negative alone would just cast a blurry, unfocused shadow — the lens bends that light into a crisp, correctly proportioned image at the exact distance the paper sits.",
    has: ["glass"],
  },
  {
    slug: "enlarger-bulb",
    name: "Enlarger Bulb",
    what: "A bright, evenly diffused bulb inside an enlarger that shines light through the negative.",
    why: "The light needs to pass evenly through every part of the negative for the whole print to expose uniformly — a diffused, centered bulb avoids the hot spots and shadows a bare point-source bulb would cast.",
    has: [],
  },
  {
    slug: "print-washer",
    name: "Print Washer",
    what: "A tray or tank that continuously circulates fresh water through finished prints to rinse out residual chemicals.",
    why: "Chemicals left in a print's paper fibers keep reacting slowly and yellow the image over years — flushing continuous fresh water through the print for an extended time is what actually clears those chemicals out for good.",
    has: ["polymer"],
  },
  {
    slug: "film-reel",
    name: "Film Reel",
    what: "A spiral reel that holds a coil of film evenly spaced apart while it's submerged in developing chemicals.",
    why: "Film wound in a loose coil would touch itself where chemicals can't reach evenly, ruining parts of the image — a spiral reel keeps every loop spaced apart so developer reaches the entire strip uniformly.",
    has: ["polymer"],
  },
];

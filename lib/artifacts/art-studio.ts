import type { Artifact } from "./types";

export const artStudio: Artifact[] = [
  {
    slug: "art-studio",
    name: "Art Studio",
    what: "A room set up with good natural light and washable surfaces for painting or sculpting.",
    why: "Paint and clay make a mess that ordinary furniture and carpet can't take repeated exposure to, and fine detail work needs even, strong light — a dedicated studio combines both instead of forcing that mess and lighting compromise into another room's décor.",
    has: ["studio easel", "paint palette", "canvas", "brushes", "sculpting tools", "apron"],
  },
  {
    slug: "studio-easel",
    name: "Studio Easel",
    what: "A tall adjustable easel that holds a canvas upright at an adult painter's working height and angle.",
    why: "Painting flat on a table causes paint to pool and distorts perspective as the artist works close in — an upright easel lets gravity pull excess paint down evenly and lets the artist step back periodically to check the whole canvas at a distance.",
    has: ["easel legs"],
  },
  {
    slug: "paint-palette",
    name: "Paint Palette",
    what: "A flat board with a thumb hole that a painter holds to mix and hold small amounts of paint while working.",
    why: "Paint needs to be mixed to the right shade right before it's applied, and colors dry out or get muddled if squeezed straight onto a canvas — a separate mixing surface held in hand lets the painter blend and reload a brush without setting anything down.",
    has: ["wood"],
  },
  {
    slug: "canvas",
    name: "Canvas",
    what: "A sheet of tightly woven fabric stretched over a wooden frame, used as a painting surface.",
    why: "Paint needs a surface with enough texture to grip and hold brushstrokes without paper's tendency to buckle when wet — stretched woven fabric stays taut and slightly absorbent, letting paint sit on top instead of soaking through or wrinkling the surface.",
    has: ["fabric", "canvas frame"],
  },
  {
    slug: "canvas-frame",
    name: "Canvas Frame",
    what: "The wooden stretcher bars that a canvas's fabric is pulled taut over and stapled to.",
    why: "Loose fabric alone would sag and ripple under a brush's pressure — stretching it drum-tight over a rigid frame gives the surface the firm resistance a brushstroke needs to land cleanly.",
    has: ["wood"],
  },
  {
    slug: "brushes",
    name: "Brushes",
    what: "Handled tools with a cluster of bristles at one end, used to apply paint to a canvas.",
    why: "A finger or rag can't control paint with enough precision for fine detail or consistent strokes — a bundle of fine bristles holds and releases paint in a controlled line as it's dragged across the canvas.",
    has: ["paintbrush bristles", "wood"],
  },
  {
    slug: "paintbrush-bristles",
    name: "Paintbrush Bristles",
    what: "A bundle of fine natural or synthetic filaments fixed at one end of a brush, shaped to hold and release paint.",
    why: "Paint needs to be picked up in a controlled amount and released gradually as the brush moves — a bundle of fine filaments holds paint in the gaps between them by capillary action, laying it down evenly instead of dumping it all at once.",
    has: [],
  },
  {
    slug: "sculpting-tools",
    name: "Sculpting Tools",
    what: "A set of small handheld metal and wooden tools used to shape and carve wet clay.",
    why: "Fingers alone can shape broad forms but can't carve fine detail, sharp edges, or reach into narrow recesses — a set of shaped metal loops and wooden picks lets a sculptor cut, smooth, and detail clay with precision fingers can't manage.",
    has: ["steel", "wood"],
  },
  {
    slug: "apron",
    name: "Apron",
    what: "A protective fabric covering worn over clothes while painting or sculpting.",
    why: "Paint and clay splatter unpredictably during work and stain fabric permanently — a removable apron takes that mess instead of the clothes underneath, and comes off clean at the end of a session.",
    has: ["fabric"],
  },
];

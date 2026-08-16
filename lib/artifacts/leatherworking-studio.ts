import type { Artifact } from "./types";

export const leatherworkingStudio: Artifact[] = [
  {
    slug: "leatherworking-studio",
    name: "Leatherworking Studio",
    what: "A room set up with cutting and stitching tools for making and repairing leather goods.",
    why: "Leather is thick and stiff enough that cutting and stitching it needs different tools and more force than fabric sewing — a dedicated space keeps those heavier tools and offcut scraps separate from a regular sewing room.",
    has: ["leather awl", "leather working bench", "leather dye"],
  },
  {
    slug: "leather-awl",
    name: "Leather Awl",
    what: "A sharp pointed hand tool used to punch holes through leather before hand-stitching.",
    why: "A needle alone can't pierce thick leather cleanly — the awl punches the hole first, and thread is worked through afterward, since forcing a needle straight through would bend or snap it.",
    has: ["steel", "handle"],
  },
  {
    slug: "leather-working-bench",
    name: "Leather Working Bench",
    what: "A low, heavy workbench with a clamp that holds a piece of leather steady during cutting and stitching.",
    why: "Leather resists a blade or needle passing through it and would slide out from under light pressure — a low bench and a fixed clamp lets a worker brace their whole body weight against the material instead of just their hands.",
    has: ["wood"],
  },
  {
    slug: "leather-dye",
    name: "Leather Dye",
    what: "A liquid pigment applied to leather's surface to color it permanently.",
    why: "Raw tanned leather is a plain tan or grey and doesn't take regular fabric dye evenly — leather dye is formulated to soak into and bond with its fibrous structure, coloring it through instead of just coating the surface.",
    has: [],
  },
];

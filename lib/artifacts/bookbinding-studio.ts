import type { Artifact } from "./types";

export const bookbindingStudio: Artifact[] = [
  {
    slug: "bookbinding-studio",
    name: "Bookbinding Studio",
    what: "A room equipped with tools for folding, sewing, and binding printed pages into a book.",
    why: "Loose printed sheets need to be folded into signatures, sewn together, and cased into a cover to become a durable book — that sequence of specialized folding and stitching tools doesn't belong in a general sewing or print room.",
    has: ["bone folder", "book press", "awl"],
  },
  {
    slug: "bone-folder",
    name: "Bone Folder",
    what: "A smooth, blunt hand tool used to crease paper into sharp, clean folds.",
    why: "Fingernails crush and tear paper fibers when creasing a fold, leaving a ragged line — a bone folder's smooth hard edge burnishes a crisp, clean crease without damaging the paper.",
    has: [],
  },
  {
    slug: "book-press",
    name: "Book Press",
    what: "A clamping press that squeezes a book's folded and glued pages flat while the binding glue dries.",
    why: "Glued signatures curl and separate slightly as they dry unless held perfectly flat under pressure — the press clamps the whole book tight during drying so the spine sets flat and square instead of warped.",
    has: ["wood", "steel"],
  },
  {
    slug: "awl",
    name: "Awl",
    what: "A sharp pointed hand tool used to pierce evenly spaced holes along a signature's fold before sewing.",
    why: "Pushing a needle straight through several folded sheets at once tears the paper and drags the holes out of line — the awl pierces each hole first through a sewing guide, so the needle only has to follow a clean path already made for it.",
    has: ["steel", "handle"],
  },
];

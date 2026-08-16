import type { Artifact } from "./types";

export const library: Artifact[] = [
  {
    slug: "library",
    name: "Library",
    what: "A room dedicated to storing and reading a personal book collection.",
    why: "A large book collection outgrows a single bookshelf in the living room and needs quiet, focused space to actually read in — a dedicated room holds both the volume of books and the undisturbed environment reading benefits from.",
    has: ["library shelving", "reading chair", "reading lamp", "step stool", "globe", "bookends"],
  },
  {
    slug: "library-shelving",
    name: "Library Shelving",
    what: "Floor-to-ceiling built-in shelving lining a library's walls, holding far more books than a single freestanding bookshelf.",
    why: "A serious book collection outgrows any single piece of furniture — building shelving directly into the walls uses the room's full height and perimeter instead of being limited to one bookshelf's footprint.",
    has: ["wood"],
  },
  {
    slug: "reading-chair",
    name: "Reading Chair",
    what: "A comfortable upholstered armchair positioned for long stretches of reading, often near a window or lamp.",
    why: "A dining chair or stool isn't built for sitting still for an hour at a time — a padded armchair with support at the back and arms lets a reader stay in one position comfortably far longer.",
    has: ["cushions", "legs"],
  },
  {
    slug: "reading-lamp",
    name: "Reading Lamp",
    what: "A small adjustable lamp positioned beside a reading chair to light a page without lighting the whole room.",
    why: "Overhead room lighting often leaves a page in shadow or glares off glossy paper — a lamp aimed directly at the book gives focused light exactly where the eyes are working, without needing to light the entire room just to read one page.",
    has: ["bulb", "lamp arm"],
  },
  {
    slug: "lamp-arm",
    name: "Lamp Arm",
    what: "A jointed or flexible arm connecting a reading lamp's base to its bulb, letting the light be aimed precisely.",
    why: "A fixed lamp head can't follow where a reader is actually looking as they shift position — a jointed arm lets the light be repositioned to exactly where the page is instead of staying fixed in one spot.",
    has: ["steel"],
  },
  {
    slug: "step-stool",
    name: "Step Stool",
    what: "A small folding stool that adds height to reach books on high shelves.",
    why: "Floor-to-ceiling shelving puts the top rows well above arm's reach — a stool bridges that gap safely instead of climbing the shelves themselves, which risks pulling them over.",
    has: ["wood", "folding legs"],
  },
  {
    slug: "globe",
    name: "Globe",
    what: "A sphere printed with a map of the Earth, mounted to spin on a fixed axis.",
    why: "A flat map distorts shape or size somewhere to project a sphere onto paper — a globe shows the planet's true proportions and lets a reader spin it to see any region without that distortion.",
    has: ["globe stand", "polymer"],
  },
  {
    slug: "globe-stand",
    name: "Globe Stand",
    what: "A tilted frame that holds a globe's axis at Earth's actual 23.5-degree tilt while letting it spin freely.",
    why: "Earth's axis isn't perpendicular to its orbit, and that tilt is what causes seasons — mounting the globe at the same angle instead of straight up keeps the model geometrically accurate, not just a spinning ball.",
    has: ["wood"],
  },
  {
    slug: "bookends",
    name: "Bookends",
    what: "A pair of weighted supports placed at either end of a row of books to hold them upright.",
    why: "A partial row of books without support on either end slides and tips over — bookends brace both ends so the row stays standing instead of slumping sideways.",
    has: ["steel"],
  },
];

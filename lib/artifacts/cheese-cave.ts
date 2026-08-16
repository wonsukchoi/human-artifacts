import type { Artifact } from "./types";

export const cheeseCave: Artifact[] = [
  {
    slug: "cheese-cave",
    name: "Cheese Cave",
    what: "A cool, humid room where wheels of cheese age and develop flavor over weeks or months.",
    why: "Cheese needs a narrow band of cool temperature and high humidity to age properly without drying out or growing unwanted mold — natural caves historically provided exactly that environment, and a dedicated room replicates it artificially today.",
    has: ["cheese wheels", "cheese aging shelves", "cheese wax"],
  },
  {
    slug: "cheese-wheels",
    name: "Cheese Wheels",
    what: "Large discs of pressed, salted curd that firm into cheese as they age.",
    why: "Curd on its own is soft and perishable — pressing it into a dense wheel squeezes out excess whey and creates a rind that seals and protects the interior as it ages for months.",
    has: [],
  },
  {
    slug: "cheese-aging-shelves",
    name: "Cheese Aging Shelves",
    what: "Wooden shelves spaced to hold cheese wheels while they age, letting air circulate on all sides.",
    why: "A wheel resting flat without airflow underneath develops uneven mold and moisture pockets — raised slatted shelves let air reach the whole surface evenly as the rind forms.",
    has: ["wood"],
  },
  {
    slug: "cheese-wax",
    name: "Cheese Wax",
    what: "A layer of food-grade wax brushed or dipped onto a cheese wheel's rind to seal it.",
    why: "A bare rind still loses moisture and lets mold spores in over months of aging — a wax coating seals both out almost completely, letting a wheel age far longer without drying out or growing unwanted surface mold.",
    has: [],
  },
];

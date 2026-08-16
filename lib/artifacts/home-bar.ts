import type { Artifact } from "./types";

export const homeBar: Artifact[] = [
  {
    slug: "home-bar",
    name: "Home Bar",
    what: "A dedicated area or room for storing and serving alcoholic drinks at home.",
    why: "Mixing and serving drinks needs bottles, glassware, and tools kept together and within reach — grouping them in one spot turns hunting through kitchen cabinets into a single dedicated station built for it.",
    has: ["bar cart", "wine rack", "bar stool", "cocktail shaker", "beer tap", "ice bucket"],
  },
  {
    slug: "bar-cart",
    name: "Bar Cart",
    what: "A small wheeled cart that holds bottles, glassware, and mixing tools for serving drinks.",
    why: "A bar needs to move to wherever people are gathered, not stay fixed in one corner — wheels let the whole setup roll to the living room or patio instead of everyone crowding around a fixed counter.",
    has: ["wheels", "wood"],
  },
  {
    slug: "wine-rack",
    name: "Wine Rack",
    what: "A slotted rack that holds wine bottles horizontally, keeping their corks moist.",
    why: "A cork stored upright dries out and shrinks, letting air seep in and spoil the wine — lying bottles on their side keeps the cork in constant contact with the wine, keeping it swollen and sealed.",
    has: ["wood"],
  },
  {
    slug: "bar-stool",
    name: "Bar Stool",
    what: "A tall backless stool sized to sit at a bar-height counter.",
    why: "A bar counter sits taller than a dining table, putting a regular chair's seat too low to comfortably reach it — a stool's height matches the counter so hands and elbows land at the right level.",
    has: ["legs", "cushions"],
  },
  {
    slug: "cocktail-shaker",
    name: "Cocktail Shaker",
    what: "A sealed metal container that ice, spirits, and mixers are shaken together in to chill and combine a drink.",
    why: "Stirring alone doesn't cool a drink fast enough or fully blend ingredients of different densities — vigorous shaking against ice chills and mixes a cocktail in seconds, which stirring alone can't match.",
    has: ["steel", "strainer"],
  },
  {
    slug: "strainer",
    name: "Strainer",
    what: "A perforated cap or insert on a shaker that holds back ice while the mixed drink pours through.",
    why: "The ice needs to stay behind in the shaker while only the chilled liquid pours into the glass — small holes let liquid through fast while blocking anything solid.",
    has: [],
  },
  {
    slug: "beer-tap",
    name: "Beer Tap",
    what: "A lever-operated spout mounted on a bar counter that dispenses beer from a keg below.",
    why: "Opening and pouring individual bottles or cans one at a time is slow for serving multiple drinks — a tap connected to a keg dispenses beer continuously on demand from one central source instead.",
    has: ["valve", "tap handle"],
  },
  {
    slug: "tap-handle",
    name: "Tap Handle",
    what: "The lever a bartender pulls to open a beer tap's valve and start the pour.",
    why: "The valve inside the tap needs a way to be opened and closed by hand at exactly the moment a glass is ready — a handle extending up from the tap gives leverage to open it smoothly without needing to reach down to the valve itself.",
    has: [],
  },
  {
    slug: "ice-bucket",
    name: "Ice Bucket",
    what: "An insulated container that holds ice cubes ready for mixing drinks.",
    why: "Fetching ice from the freezer for every drink interrupts serving a group — a bucket keeps a ready supply at the bar, insulated enough to slow melting through a session.",
    has: ["insulation", "steel"],
  },
];

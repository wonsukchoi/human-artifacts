import type { Artifact } from "./artifacts/types";
import { kitchen } from "./artifacts/kitchen";
import { bedroom } from "./artifacts/bedroom";
import { bathroom } from "./artifacts/bathroom";
import { livingRoom } from "./artifacts/living-room";
import { garage } from "./artifacts/garage";
import { office } from "./artifacts/office";
import { diningRoom } from "./artifacts/dining-room";
import { hallway } from "./artifacts/hallway";
import { laundryRoom } from "./artifacts/laundry-room";
import { entryway } from "./artifacts/entryway";
import { attic } from "./artifacts/attic";
import { yard } from "./artifacts/yard";
import { personalItems } from "./artifacts/personal-items";
import { materials } from "./artifacts/materials";
import { nursery } from "./artifacts/nursery";
import { homeGym } from "./artifacts/home-gym";
import { homeTheater } from "./artifacts/home-theater";
import { playroom } from "./artifacts/playroom";
import { musicRoom } from "./artifacts/music-room";
import { basement } from "./artifacts/basement";
import { porch } from "./artifacts/porch";
import { sunroom } from "./artifacts/sunroom";
import { balcony } from "./artifacts/balcony";
import { homeBar } from "./artifacts/home-bar";
import { wineCellar } from "./artifacts/wine-cellar";
import { sauna } from "./artifacts/sauna";
import { workshop } from "./artifacts/workshop";
import { greenhouse } from "./artifacts/greenhouse";
import { artStudio } from "./artifacts/art-studio";
import { rootCellar } from "./artifacts/root-cellar";
import { library } from "./artifacts/library";
import { sewingRoom } from "./artifacts/sewing-room";
import { poolHouse } from "./artifacts/pool-house";
import { darkroom } from "./artifacts/darkroom";
import { butlersPantry } from "./artifacts/butlers-pantry";
import { carport } from "./artifacts/carport";
import { billiardRoom } from "./artifacts/billiard-room";
import { serverRoom } from "./artifacts/server-room";
import { stormShelter } from "./artifacts/storm-shelter";
import { crawlSpace } from "./artifacts/crawl-space";
import { cigarLounge } from "./artifacts/cigar-lounge";
import { observatory } from "./artifacts/observatory";
import { gallery } from "./artifacts/gallery";
import { meditationRoom } from "./artifacts/meditation-room";
import { trophyRoom } from "./artifacts/trophy-room";
import { recordingStudio } from "./artifacts/recording-studio";
import { bowlingAlley } from "./artifacts/bowling-alley";
import { smokehouse } from "./artifacts/smokehouse";
import { arcadeRoom } from "./artifacts/arcade-room";
import { chickenCoop } from "./artifacts/chicken-coop";
import { tackRoom } from "./artifacts/tack-room";
import { homeBrewery } from "./artifacts/home-brewery";
import { homeDistillery } from "./artifacts/home-distillery";
import { iceHouse } from "./artifacts/ice-house";
import { milkingParlor } from "./artifacts/milking-parlor";
import { silo } from "./artifacts/silo";
import { cornCrib } from "./artifacts/corn-crib";
import { wellHouse } from "./artifacts/well-house";
import { apiary } from "./artifacts/apiary";
import { kennel } from "./artifacts/kennel";
import { skatingRink } from "./artifacts/skating-rink";
import { sculptureGarden } from "./artifacts/sculpture-garden";
import { orchard } from "./artifacts/orchard";
import { vineyard } from "./artifacts/vineyard";
import { stable } from "./artifacts/stable";
import { ciderHouse } from "./artifacts/cider-house";
import { cheeseCave } from "./artifacts/cheese-cave";
import { potteryStudio } from "./artifacts/pottery-studio";
import { glassblowingStudio } from "./artifacts/glassblowing-studio";
import { leatherworkingStudio } from "./artifacts/leatherworking-studio";
import { blacksmithForge } from "./artifacts/blacksmith-forge";
import { boathouse } from "./artifacts/boathouse";
import { letterpressStudio } from "./artifacts/letterpress-studio";
import { bookbindingStudio } from "./artifacts/bookbinding-studio";
import { gardenShed } from "./artifacts/garden-shed";
import { deck } from "./artifacts/deck";

export type { Artifact };

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const artifacts: Artifact[] = [
  ...kitchen,
  ...bedroom,
  ...bathroom,
  ...livingRoom,
  ...garage,
  ...office,
  ...diningRoom,
  ...hallway,
  ...laundryRoom,
  ...entryway,
  ...attic,
  ...yard,
  ...personalItems,
  ...materials,
  ...nursery,
  ...homeGym,
  ...homeTheater,
  ...playroom,
  ...musicRoom,
  ...basement,
  ...porch,
  ...sunroom,
  ...balcony,
  ...homeBar,
  ...wineCellar,
  ...sauna,
  ...workshop,
  ...greenhouse,
  ...artStudio,
  ...rootCellar,
  ...library,
  ...sewingRoom,
  ...poolHouse,
  ...darkroom,
  ...butlersPantry,
  ...carport,
  ...billiardRoom,
  ...serverRoom,
  ...stormShelter,
  ...crawlSpace,
  ...cigarLounge,
  ...observatory,
  ...gallery,
  ...meditationRoom,
  ...trophyRoom,
  ...recordingStudio,
  ...bowlingAlley,
  ...smokehouse,
  ...arcadeRoom,
  ...chickenCoop,
  ...tackRoom,
  ...homeBrewery,
  ...homeDistillery,
  ...iceHouse,
  ...milkingParlor,
  ...silo,
  ...cornCrib,
  ...wellHouse,
  ...apiary,
  ...kennel,
  ...skatingRink,
  ...sculptureGarden,
  ...orchard,
  ...vineyard,
  ...stable,
  ...ciderHouse,
  ...cheeseCave,
  ...potteryStudio,
  ...glassblowingStudio,
  ...leatherworkingStudio,
  ...blacksmithForge,
  ...boathouse,
  ...letterpressStudio,
  ...bookbindingStudio,
  ...gardenShed,
  ...deck,
];

export function getArtifact(slug: string): Artifact | undefined {
  return artifacts.find((a) => a.slug === slug);
}

/** Artifacts with no other artifact listing them under "has" — the top level. */
export function getRoots(): Artifact[] {
  const childSlugs = new Set(
    artifacts.flatMap((a) => a.has.map((name) => slugify(name)))
  );
  return artifacts.filter((a) => !childSlugs.has(a.slug));
}

/** Root slugs that aren't tied to any physical room — carried, not contained. */
const NON_SPATIAL_ROOT_SLUGS = new Set(["personal-items"]);

/** Top-level roots split into physical spaces vs. roots not tied to any one space. */
export function getRootGroups(): { spaces: Artifact[]; nonSpatial: Artifact[] } {
  const roots = getRoots();
  return {
    spaces: roots.filter((a) => !NON_SPATIAL_ROOT_SLUGS.has(a.slug)),
    nonSpatial: roots.filter((a) => NON_SPATIAL_ROOT_SLUGS.has(a.slug)),
  };
}

/** The artifact that lists this slug under "has", if any. */
export function getParent(slug: string): Artifact | undefined {
  return artifacts.find((a) => a.has.some((name) => slugify(name) === slug));
}

/** Every artifact that lists this slug under "has" — a node reused across branches has more than one. */
export function getParents(slug: string): Artifact[] {
  return artifacts.filter((a) => a.has.some((name) => slugify(name) === slug));
}

/** Root-to-self chain of artifacts, for breadcrumbs. */
export function getAncestry(slug: string): Artifact[] {
  const chain: Artifact[] = [];
  let current = getArtifact(slug);
  const seen = new Set<string>();
  while (current && !seen.has(current.slug)) {
    chain.unshift(current);
    seen.add(current.slug);
    current = getParent(current.slug);
  }
  return chain;
}

export function getChildSlug(name: string): string {
  return slugify(name);
}

/** Count of distinct artifacts reachable below this one (its whole subtree, not counting itself). */
export function countDescendants(slug: string): number {
  const seen = new Set<string>([slug]);
  function walk(current: Artifact): number {
    let count = 0;
    for (const name of current.has) {
      const childSlug = slugify(name);
      if (seen.has(childSlug)) continue;
      const child = getArtifact(childSlug);
      if (!child) continue;
      seen.add(childSlug);
      count += 1 + walk(child);
    }
    return count;
  }
  const artifact = getArtifact(slug);
  return artifact ? walk(artifact) : 0;
}

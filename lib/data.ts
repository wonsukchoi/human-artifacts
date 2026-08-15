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

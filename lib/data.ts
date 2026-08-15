import type { Artifact } from "./artifacts/types";
import { kitchen } from "./artifacts/kitchen";
import { bedroom } from "./artifacts/bedroom";
import { bathroom } from "./artifacts/bathroom";
import { livingRoom } from "./artifacts/living-room";
import { materials } from "./artifacts/materials";

export type { Artifact };

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export const artifacts: Artifact[] = [
  ...kitchen,
  ...bedroom,
  ...bathroom,
  ...livingRoom,
  ...materials,
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

/** The artifact that lists this slug under "has", if any. */
export function getParent(slug: string): Artifact | undefined {
  return artifacts.find((a) => a.has.some((name) => slugify(name) === slug));
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

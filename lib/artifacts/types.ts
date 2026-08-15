export type Artifact = {
  slug: string;
  name: string;
  what: string;
  why: string;
  has: string[]; // names of parts/contents; if a name's slug matches another artifact, it links there
};

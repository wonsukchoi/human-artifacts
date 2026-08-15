import Link from "next/link";
import { artifacts, getArtifact, getChildSlug, getRoots, type Artifact } from "@/lib/data";

function getChildArtifacts(artifact: Artifact): Artifact[] {
  return artifact.has
    .map((name) => getArtifact(getChildSlug(name)))
    .filter((a): a is Artifact => Boolean(a));
}

function Branch({ artifact }: { artifact: Artifact }) {
  const children = getChildArtifacts(artifact);

  if (children.length === 0) {
    return (
      <li>
        <Link href={`/${artifact.slug}`}>{artifact.name.toLowerCase()}</Link>
      </li>
    );
  }

  return (
    <li>
      <details>
        <summary>
          <Link href={`/${artifact.slug}`}>
            {artifact.name.toLowerCase()}
          </Link>
        </summary>
        <ul className="tree">
          {children.map((child) => (
            <Branch key={child.slug} artifact={child} />
          ))}
        </ul>
      </details>
    </li>
  );
}

export default function Home() {
  const roots = getRoots();

  return (
    <main>
      <h1>human artifacts</h1>
      <p>
        Every place and object here is manmade — built for humans, by
        humans. Each entry says what it is, why it exists, and what it&apos;s
        made of. Anything it&apos;s made of that has its own entry links
        onward, all the way down.
      </p>

      <h2>everything, {artifacts.length} entries</h2>
      <ul className="tree tree-root">
        {roots.map((artifact) => (
          <Branch key={artifact.slug} artifact={artifact} />
        ))}
      </ul>

      <footer>text-based. no images. just what things are and why.</footer>
    </main>
  );
}

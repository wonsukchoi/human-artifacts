import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artifacts, getArtifact, getAncestry, getChildSlug } from "@/lib/data";

export function generateStaticParams() {
  return artifacts.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artifact = getArtifact(slug);
  if (!artifact) return {};
  return {
    title: artifact.name,
    description: artifact.what,
  };
}

export default async function ArtifactPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artifact = getArtifact(slug);
  if (!artifact) notFound();

  const ancestry = getAncestry(slug);

  return (
    <main>
      <div className="crumbs">
        <Link href="/">home</Link>
        {ancestry.map((a) => (
          <span key={a.slug}>
            {" "}
            /{" "}
            {a.slug === slug ? (
              a.name.toLowerCase()
            ) : (
              <Link href={`/${a.slug}`}>{a.name.toLowerCase()}</Link>
            )}
          </span>
        ))}
      </div>

      <h1>{artifact.name.toLowerCase()}</h1>

      <h2>what</h2>
      <p>{artifact.what}</p>

      <h2>why</h2>
      <p>{artifact.why}</p>

      {artifact.has.length > 0 && (
        <>
          <h2>what it has</h2>
          <ul className="plain">
            {artifact.has.map((partName) => {
              const partSlug = getChildSlug(partName);
              const linkedArtifact = getArtifact(partSlug);
              return (
                <li key={partName}>
                  {linkedArtifact ? (
                    <Link href={`/${partSlug}`}>{partName}</Link>
                  ) : (
                    partName
                  )}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
}

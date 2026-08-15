import type { Metadata } from "next";
import Link from "next/link";
import { artifacts, getAncestry } from "@/lib/data";

export const metadata: Metadata = {
  title: "Everything",
  description: "Every place and object in the archive, in one flat list.",
};

export default function AllPage() {
  const sorted = [...artifacts].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main>
      <div className="crumbs">
        <Link href="/">home</Link> / everything
      </div>

      <h1>everything</h1>
      <p>
        Every place and object in the archive, flat and alphabetical — no
        need to expand the tree to find one.
      </p>

      <h2>{artifacts.length} entries</h2>
      <ul className="plain list-links">
        {sorted.map((a) => {
          const path = getAncestry(a.slug)
            .slice(0, -1)
            .map((p) => p.name.toLowerCase())
            .join(" / ");
          return (
            <li key={a.slug}>
              <Link href={`/${a.slug}`}>{a.name.toLowerCase()}</Link>
              {path && <span className="search-path"> — {path}</span>}
            </li>
          );
        })}
      </ul>

      <p className="crumbs">
        <Link href="/materials">materials index</Link> — just the raw
        materials and generic hardware, without everything built from them
      </p>
    </main>
  );
}

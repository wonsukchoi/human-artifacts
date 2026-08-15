import type { Metadata } from "next";
import Link from "next/link";
import { materials } from "@/lib/artifacts/materials";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Every raw material and generic hardware piece reused across the tree.",
};

export default function MaterialsPage() {
  return (
    <main>
      <div className="crumbs">
        <Link href="/">home</Link> / materials
      </div>

      <h1>materials</h1>
      <p>
        The raw materials and generic hardware every branch of the tree
        bottoms out into or reuses — steel, wood, glass, atoms. Listed once
        here, linked to from wherever each one is actually used.
      </p>

      <h2>{materials.length} entries</h2>
      <ul className="plain list-links">
        {materials.map((m) => (
          <li key={m.slug}>
            <Link href={`/${m.slug}`}>{m.name.toLowerCase()}</Link>
          </li>
        ))}
      </ul>

      <p className="crumbs">
        <Link href="/all">everything</Link> — the full archive, materials
        included, in one flat list
      </p>
    </main>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getAncestry, type Artifact } from "@/lib/data";

export function Search({ artifacts }: { artifacts: Artifact[] }) {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!trimmed) return [];
    return artifacts
      .filter(
        (a) =>
          a.name.toLowerCase().includes(trimmed) ||
          a.what.toLowerCase().includes(trimmed) ||
          a.why.toLowerCase().includes(trimmed)
      )
      .slice(0, 30);
  }, [artifacts, trimmed]);

  return (
    <div className="search">
      <input
        type="search"
        placeholder="search what things are and why..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search artifacts"
      />
      {trimmed && (
        <ul className="plain search-results">
          {results.length === 0 ? (
            <li className="search-empty">no matches</li>
          ) : (
            results.map((a) => {
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
            })
          )}
        </ul>
      )}
    </div>
  );
}

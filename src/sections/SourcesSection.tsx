import { SOURCES } from "../data";

export default function SourcesSection() {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 12, color: "var(--gray-400)" }}>
        Sources
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {SOURCES.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, color: "var(--blue-400)" }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}

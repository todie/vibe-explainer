import { SOURCES } from "../data";

export default function SourcesSection() {
  return (
    <section style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--gray-800)" }}>
      <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 14, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
        Sources
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {SOURCES.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 13, color: "var(--blue-400)", transition: "color var(--transition-fast)" }}
          >
            {s.label}
          </a>
        ))}
      </div>
      <div style={{ marginTop: 32, fontSize: 12, color: "var(--gray-600)" }}>
        Built in one session with Claude Code. This site is its own case study.
      </div>
    </section>
  );
}

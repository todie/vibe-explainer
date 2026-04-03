import { SESSION_EXAMPLES } from "../data";
import { SessionCard } from "../components";

export default function SessionsSection() {
  const sorted = [...SESSION_EXAMPLES].sort((a, b) => b.score - a.score);

  return (
    <section style={{ marginTop: 56 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: "var(--gray-200)", letterSpacing: "-0.02em" }}>
        Evidence From Real Sessions
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 8, maxWidth: 640, lineHeight: 1.7 }}>
        Six sessions scored by signal-to-noise ratio. Each one shows the same pattern:
        context accumulates, prompts get shorter, output stays massive.
      </p>
      <p style={{ fontSize: 13, color: "var(--gray-600)", marginBottom: 28, maxWidth: 640 }}>
        The last card is the anti-example — what happens when context isn't there.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {sorted.map((s) => (
          <SessionCard key={s.id} session={s} />
        ))}
      </div>
    </section>
  );
}

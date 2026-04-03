import { SESSION_EXAMPLES } from "../data";
import { SessionCard } from "../components";

export default function SessionsSection() {
  const sorted = [...SESSION_EXAMPLES].sort((a, b) => b.score - a.score);

  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--gray-200)" }}>
        Real Sessions, Real Prompts
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 8, maxWidth: 640 }}>
        Six sessions discovered via SessionSwipe — a tool built in one of these very sessions.
        Each card shows how terse prompting played out in practice, ranked by a composite
        signal-to-noise score.
      </p>
      <p style={{ fontSize: 13, color: "var(--gray-600)", marginBottom: 24, maxWidth: 640 }}>
        Note the anti-example at the bottom: when context from another session wasn't available,
        terse prompts had nothing to resolve against and the session stalled.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {sorted.map((s) => (
          <SessionCard key={s.id} session={s} />
        ))}
      </div>
    </section>
  );
}

import { PERSISTENCE_STRATEGIES } from "../data";
import { StrategyCard } from "../components";

export default function PersistenceSection() {
  return (
    <section style={{ marginTop: 56 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: "var(--gray-200)", letterSpacing: "-0.02em" }}>
        How Context Survives
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 28, maxWidth: 640, lineHeight: 1.7 }}>
        Short prompts only work if context persists between turns.
        These are the mechanisms that keep the shared model intact.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {PERSISTENCE_STRATEGIES.map((s) => (
          <StrategyCard key={s.id} strategy={s} />
        ))}
      </div>
    </section>
  );
}

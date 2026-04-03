import { PERSISTENCE_STRATEGIES } from "../data";
import { StrategyCard } from "../components";

export default function PersistenceSection() {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--gray-200)" }}>
        Persistence Strategies
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 24, maxWidth: 640 }}>
        Terse prompts only work if context survives between turns. These are the mechanisms
        that keep the shared mental model intact across a long session.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {PERSISTENCE_STRATEGIES.map((s) => (
          <StrategyCard key={s.id} strategy={s} />
        ))}
      </div>
    </section>
  );
}

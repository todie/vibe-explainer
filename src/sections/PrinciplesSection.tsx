import { PRINCIPLES } from "../data";
import { PrincipleCard } from "../components";

export default function PrinciplesSection() {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--gray-200)" }}>
        Why It Works
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 24, maxWidth: 640 }}>
        Five principles that explain why senior-engineer shorthand translates into
        correct, comprehensive output from an agentic coding assistant.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {PRINCIPLES.map((p, i) => (
          <PrincipleCard key={p.id} principle={p} index={i} />
        ))}
      </div>
    </section>
  );
}

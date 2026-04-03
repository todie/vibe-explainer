import { PRINCIPLES } from "../data";
import { PrincipleCard } from "../components";

export default function PrinciplesSection() {
  return (
    <section style={{ marginTop: 56 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: "var(--gray-200)", letterSpacing: "-0.02em" }}>
        Why This Works
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 28, maxWidth: 640, lineHeight: 1.7 }}>
        The principles behind the pattern. Not prompt engineering tricks — communication dynamics
        that emerge when the agent and the user share enough context.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
        {PRINCIPLES.map((p, i) => (
          <PrincipleCard key={p.id} principle={p} index={i} />
        ))}
      </div>
    </section>
  );
}

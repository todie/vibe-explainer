import { PROMPT_CHAIN, PHASE_META } from "../data";
import { AmplificationBar } from "../components";

const OUTPUT_LINES: Record<number, number> = {
  1: 80,
  2: 180,
  3: 60,
  4: 30,
  5: 200,
  6: 15,
};

export default function AmplificationSection() {
  return (
    <section style={{ marginTop: 56 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: "var(--gray-200)", letterSpacing: "-0.02em" }}>
        Input vs Output
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 28, maxWidth: 640, lineHeight: 1.7 }}>
        The gap between what you type and what comes out. The prompts are triggers — context does the specification.
      </p>

      <div
        style={{
          background: "var(--gray-900)",
          borderRadius: "var(--radius-xl)",
          padding: "28px",
          border: "1px solid var(--gray-800)",
        }}
      >
        {PROMPT_CHAIN.map((p, i) => (
          <AmplificationBar
            key={p.id}
            label={p.text}
            inputWords={p.wordCount}
            outputScale={OUTPUT_LINES[p.id] ?? 50}
            color={PHASE_META[p.phase].color}
            delay={i * 200}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: 16,
          padding: "18px 22px",
          background: "rgba(168, 85, 247, 0.06)",
          borderRadius: "var(--radius-lg)",
          borderLeft: "3px solid var(--purple-500)",
          fontSize: 14,
          color: "var(--gray-300)",
          lineHeight: 1.7,
        }}
      >
        <strong style={{ color: "var(--purple-300)" }}>The pattern:</strong>{" "}
        The 19-word refactor prompt produced more output than the 9-word genesis prompt.
        As trust builds, fewer words specify more work.
      </div>
    </section>
  );
}

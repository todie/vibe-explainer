import { PROMPT_CHAIN, PHASE_META } from "../data";
import { AmplificationBar } from "../components";

/** Maps each prompt to approximate output lines for the bar visualization. */
const OUTPUT_LINES: Record<number, number> = {
  1: 80,   // benchmark data aggregation
  2: 180,  // full JSX artifact
  3: 60,   // build pipeline + serve scripts
  4: 30,   // diagnostic output
  5: 200,  // complete refactor
  6: 15,   // process restart
};

export default function AmplificationSection() {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--gray-200)" }}>
        Amplification Ratio
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 24, maxWidth: 640 }}>
        Each bar compares prompt word count (input) against approximate output lines.
        Context does the heavy lifting — the prompts are just triggers.
      </p>

      <div
        style={{
          background: "var(--gray-900)",
          borderRadius: "var(--radius-lg)",
          padding: "24px",
        }}
      >
        {PROMPT_CHAIN.map((p, i) => (
          <AmplificationBar
            key={p.id}
            label={p.text.length > 40 ? p.text.slice(0, 37) + "…" : p.text}
            inputWords={p.wordCount}
            outputScale={OUTPUT_LINES[p.id] ?? 50}
            color={PHASE_META[p.phase].color}
            delay={i * 150}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: 16,
          padding: "16px 20px",
          background: "var(--purple-500)" + "12",
          borderRadius: "var(--radius-md)",
          borderLeft: "3px solid var(--purple-500)",
          fontSize: 14,
          color: "var(--gray-300)",
          lineHeight: 1.6,
        }}
      >
        <strong style={{ color: "var(--purple-300)" }}>Key insight:</strong>{" "}
        The 19-word refactor prompt produced more output than the 9-word genesis prompt.
        Trust escalation + accumulated context meant fewer words could specify more work.
      </div>
    </section>
  );
}

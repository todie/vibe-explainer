import { PROMPT_CHAIN } from "../data";
import { PromptCard } from "../components";

export default function PromptChainSection() {
  return (
    <section id="prompt-chain" style={{ marginTop: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "var(--gray-200)" }}>
        The Prompt Chain
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 24, maxWidth: 640 }}>
        Six terse prompts built a typed React SPA, deployed it live, and packaged a template repo.
        Tap any prompt to see what was <em>implied</em> versus what was <em>stated</em>.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {PROMPT_CHAIN.map((p) => (
          <PromptCard key={p.id} prompt={p} />
        ))}
      </div>
    </section>
  );
}

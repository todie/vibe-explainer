import { PROMPT_CHAIN } from "../data";
import { PromptCard } from "../components";

export default function PromptChainSection() {
  return (
    <section id="prompt-chain" style={{ marginTop: 56 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: "var(--gray-200)", letterSpacing: "-0.02em" }}>
        The Prompt Chain
      </h2>
      <p style={{ fontSize: 14, color: "var(--gray-500)", marginBottom: 28, maxWidth: 640, lineHeight: 1.7 }}>
        Every prompt below is real — copy-pasted from the session that built this site.
        Tap any card to see what was <em style={{ color: "var(--gray-400)" }}>implied</em> vs what was <em style={{ color: "var(--gray-400)" }}>typed</em>.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {PROMPT_CHAIN.map((p) => (
          <PromptCard key={p.id} prompt={p} />
        ))}
      </div>
    </section>
  );
}

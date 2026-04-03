import { StatCard } from "./components";
import { STATS } from "./data";
import {
  Header,
  PromptChainSection,
  AmplificationSection,
  SessionsSection,
  PersistenceSection,
  PrinciplesSection,
  SourcesSection,
} from "./sections";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header
        dateline="Case Study — April 2026"
        title="Why Terse Prompts Work"
        subtitle="A real session built a typed React SPA, deployed it live, and packaged a template repo — in 6 prompts averaging 8 words each. Here's why that's possible."
      />

      <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px 80px" }}>
        {/* KPI strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            marginTop: -24,
          }}
        >
          <StatCard label="Critical Path" value={String(STATS.criticalPathPrompts)} sub="prompts" accent="#60a5fa" />
          <StatCard label="Avg Length" value={`${STATS.avgWords}w`} sub="words per prompt" accent="#a855f7" />
          <StatCard label="Shortest" value={`${STATS.shortestWords}w`} sub={`"${STATS.shortestPrompt}"`} accent="#f87171" />
          <StatCard label="Amplification" value={STATS.amplificationRatio} sub="words → lines" accent="#22c55e" />
        </div>

        <PromptChainSection />
        <AmplificationSection />
        <SessionsSection />
        <PersistenceSection />
        <PrinciplesSection />
        <SourcesSection />
      </div>
    </div>
  );
}

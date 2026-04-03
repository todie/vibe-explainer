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
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <Header
        dateline="Case Study — April 2026"
        title="Context Is the Prompt"
        subtitle="6 prompts averaging 8 words each built a typed React SPA, deployed it live, and packaged a template repo. The words were triggers. The context window did the work."
      />

      <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 24px 96px" }}>
        {/* KPI strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
            marginTop: -32,
            position: "relative",
            zIndex: 2,
          }}
        >
          <StatCard label="Prompts" value={String(STATS.criticalPathPrompts)} sub="critical path" accent="#60a5fa" />
          <StatCard label="Avg Length" value={`${STATS.avgWords}w`} sub="words per prompt" accent="#a855f7" />
          <StatCard label="Shortest" value={`${STATS.shortestWords}w`} sub={`"${STATS.shortestPrompt}"`} accent="#f87171" />
          <StatCard label="Amplification" value={STATS.amplificationRatio} sub="words → lines of code" accent="#22c55e" />
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

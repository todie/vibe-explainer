/** The critical-path prompt chain from the real session that built the LLM research SPA. */

export interface PromptEntry {
  readonly id: number;
  readonly phase: Phase;
  readonly text: string;
  readonly wordCount: number;
  readonly impliedContext: readonly string[];
  readonly outputScope: string;
}

export type Phase =
  | "research"
  | "creation"
  | "deployment"
  | "quality"
  | "maintenance";

export const PHASE_META: Record<Phase, { readonly label: string; readonly color: string }> = {
  research:    { label: "Research Sourcing",  color: "#60a5fa" },
  creation:    { label: "Frontend Creation",  color: "#a855f7" },
  deployment:  { label: "Hosting / Deploy",   color: "#22c55e" },
  quality:     { label: "Quality Pass",       color: "#facc15" },
  maintenance: { label: "Maintenance",        color: "#f87171" },
} as const;

export const PROMPT_CHAIN: readonly PromptEntry[] = [
  {
    id: 1,
    phase: "research",
    text: "fair enough find me deeper analysis and benchmarks",
    wordCount: 8,
    impliedContext: [
      "Prior failed attempt to bypass Medium paywall",
      "Topic already established: local LLMs vs Claude Code",
      "User signaled they want data, not opinions",
    ],
    outputScope: "Multi-source benchmark aggregation across SWE-bench, BFCL, real-task evals, and cost models",
  },
  {
    id: 2,
    phase: "creation",
    text: "create a frontend pretty explainer of this research task",
    wordCount: 9,
    impliedContext: [
      "\"this research\" = all benchmark data just collected",
      "\"pretty\" = dark theme, polished, not a markdown dump",
      "\"frontend\" = SPA, not a static document",
      "\"explainer\" = interactive, sectioned, digestible",
    ],
    outputScope: "Full React SPA with typed data layer, interactive tabs, animated bars, stat cards, cost comparison",
  },
  {
    id: 3,
    phase: "deployment",
    text: "host an ngrok static site",
    wordCount: 5,
    impliedContext: [
      "\"static site\" = Vite build output, not dev server",
      "ngrok implies: auth token needed, tunnel config, serve script",
      "Implicitly: build pipeline, package.json scripts, dist/ output",
    ],
    outputScope: "Vite build pipeline, HTTP server, ngrok tunnel, serve.sh with --ngrok flag, public URL",
  },
  {
    id: 4,
    phase: "quality",
    text: "it's broken",
    wordCount: 2,
    impliedContext: [
      "Refers to the live ngrok URL just deployed",
      "\"broken\" could mean: blank page, render error, missing sections, styling bug",
      "Agent must diagnose — screenshot, DOM inspect, console errors",
    ],
    outputScope: "Full diagnostic: Chrome navigation, screenshot capture, DOM analysis, render verification",
  },
  {
    id: 5,
    phase: "quality",
    text: "fix up the whole single page app wiring with best practices and set up a template repository with the results",
    wordCount: 19,
    impliedContext: [
      "\"whole SPA wiring\" = the Babel-in-browser monolith needs proper architecture",
      "\"best practices\" = strict types, component splitting, CSS custom properties",
      "\"template repository\" = git init, commit history, GitHub repo, bundle for push",
      "Implicitly: React 19 + TS 5.9 strict mode, readonly interfaces, as const",
    ],
    outputScope: "Complete refactor: data layer, 7 atomic components, 6 composed sections, CSS custom properties, git repo with 2 commits, GitHub template repo, git bundle",
  },
  {
    id: 6,
    phase: "maintenance",
    text: "fix broken endpoint",
    wordCount: 3,
    impliedContext: [
      "Session compacted — processes died",
      "\"endpoint\" = the ngrok tunnel URL",
      "Agent must: check HTTP server, check ngrok, restart both",
    ],
    outputScope: "Process restart: HTTP server on 8766, ngrok tunnel reconnect, same stable public URL",
  },
] as const;

export const STATS = {
  totalPrompts: 7,
  criticalPathPrompts: PROMPT_CHAIN.length,
  avgWords: Math.round(PROMPT_CHAIN.reduce((s, p) => s + p.wordCount, 0) / PROMPT_CHAIN.length),
  shortestPrompt: "it's broken",
  shortestWords: 2,
  totalOutputFiles: 18,
  totalOutputLines: 1200,
  amplificationRatio: "1 : 150",
} as const;

/** Why terse prompts work: context accumulation and persistence strategies. */

export interface Strategy {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly mechanism: string;
  readonly example: string;
  readonly color: string;
}

export interface Principle {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  readonly icon: string;
}

export const PERSISTENCE_STRATEGIES: readonly Strategy[] = [
  {
    id: "context-window",
    title: "Context Window Accumulation",
    description:
      "Every tool call, file read, error message, and fix attempt stays in the conversation. By prompt 5, the agent has seen the full data layer, every component, the build errors, and the live render — without being told again.",
    mechanism: "Automatic — all prior turns remain in context until compaction",
    example: "\"it's broken\" works because the agent already has the ngrok URL, the dist/ structure, and the expected render state in context.",
    color: "#60a5fa",
  },
  {
    id: "compaction-summary",
    title: "Compaction Summaries",
    description:
      "When the context window fills, the system compacts the conversation into a structured summary preserving file paths, error history, architectural decisions, and pending tasks. The agent resumes without losing critical state.",
    mechanism: "System-triggered when token limit approaches — produces structured summary with all key artifacts",
    example: "After compaction, \"fix broken endpoint\" still works because the summary preserved the ngrok PID, port, tunnel URL, and process dependency chain.",
    color: "#a855f7",
  },
  {
    id: "file-system",
    title: "File System as Memory",
    description:
      "Code on disk is persistent memory. The agent reads its own prior output to recover state. Git history, package.json, tsconfig, and the component tree are all queryable context that survives session boundaries.",
    mechanism: "Agent uses Read/Glob/Grep tools to re-derive context from artifacts it previously wrote",
    example: "The refactor prompt didn't specify React 19 or TypeScript 5.9 — the agent read package.json and tsconfig.json to discover the stack.",
    color: "#22c55e",
  },
  {
    id: "git-history",
    title: "Git Commit History",
    description:
      "Each commit message documents intent and scope. The agent can read git log to understand the arc of changes, what's been tried, and what the current state represents.",
    mechanism: "git log + git diff provide structured change narrative",
    example: "The two commits ('Initial scaffold' → 'fix link contrast') tell the agent the project went from zero to production with one architecture pass and one accessibility fix.",
    color: "#facc15",
  },
  {
    id: "error-chain",
    title: "Error Chain Learning",
    description:
      "Failed attempts aren't wasted — they're context. Each error narrows the solution space. The TSC namespace error, the ngrok auth failure, the JSON parse timeout — all became constraints that informed subsequent decisions.",
    mechanism: "Errors remain in context as negative examples, preventing repeat failures",
    example: "After 'Cannot find namespace JSX' the agent learned React 19 + TS 5.9 requires React.JSX.Element — applied globally without being told twice.",
    color: "#f87171",
  },
] as const;

export const PRINCIPLES: readonly Principle[] = [
  {
    id: "shared-model",
    title: "Shared Mental Model",
    summary:
      "Terse prompts work because both parties hold the same evolving model of the project. \"It's broken\" assumes the agent knows what \"it\" is, what \"working\" looks like, and where to start diagnosing. This is exactly how senior engineers communicate.",
    icon: "🧠",
  },
  {
    id: "progressive-spec",
    title: "Progressive Specification",
    summary:
      "Each prompt adds a constraint to an accumulating spec. \"Research\" → \"make it pretty\" → \"host it\" → \"fix the wiring.\" No single prompt is a full spec, but the chain is. The context window is the spec document.",
    icon: "📐",
  },
  {
    id: "trust-escalation",
    title: "Trust Escalation",
    summary:
      "Early prompts are cautious and scoped. As the agent proves competence, prompts get terser. \"Create a frontend pretty explainer\" (9 words) became \"it's broken\" (2 words). The user delegates more because prior output earned trust.",
    icon: "🤝",
  },
  {
    id: "ambient-context",
    title: "Ambient Context Over Explicit Instruction",
    summary:
      "The best prompt is no prompt — it's prior work the agent can inspect. File structure, type definitions, CSS variables, and git history all encode decisions without the user restating them.",
    icon: "🌊",
  },
  {
    id: "amplification",
    title: "Prompt Amplification Ratio",
    summary:
      "6 critical-path prompts averaging 8 words each produced 18 files, ~1200 lines of typed code, a live deployment, and a git template repo. That's roughly 1:150 word-to-output amplification — but only because context did the heavy lifting.",
    icon: "📈",
  },
] as const;

export const SOURCES: readonly { readonly label: string; readonly url: string }[] = [
  { label: "This session's prompt chain (primary source)", url: "#prompt-chain" },
  { label: "Andrej Karpathy — \"Vibe Coding\" (Twitter, Feb 2025)", url: "https://x.com/karpathy/status/1886192184808149383" },
  { label: "Simon Willison — Context Window as Spec", url: "https://simonwillison.net/tags/prompt-engineering/" },
  { label: "Anthropic — Claude Code Best Practices", url: "https://docs.anthropic.com/en/docs/claude-code" },
] as const;

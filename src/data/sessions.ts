/** Real session examples discovered via SessionSwipe — evidence of terse prompting across sessions. */

export interface SessionExample {
  readonly id: string;
  readonly title: string;
  readonly score: number;
  readonly turns: string;
  readonly tools: readonly string[];
  readonly description: string;
  readonly topics: readonly string[];
  readonly promptStyle: PromptStyle;
  readonly color: string;
}

export interface PromptStyle {
  readonly label: string;
  readonly detail: string;
}

export const SESSION_EXAMPLES: readonly SessionExample[] = [
  {
    id: "sessionswipe",
    title: "Tinder for Claude Sessions",
    score: 97,
    turns: "~30+",
    tools: ["Linear MCP", "list_sessions", "read_transcript", "Chrome (GitHub)", "Write", "Bash", "Skill"],
    description:
      "Went from a one-line idea to a full Linear project with 7 issues, a working Cowork plugin with 2 skills, a validated .plugin file, and a GitHub repo — all in one session. The product eats its own tail: we built a session discovery tool, then immediately used it to discover sessions.",
    topics: ["sessionswipe", "cowork-plugin", "product-development", "meta"],
    promptStyle: {
      label: "Idea → Ship",
      detail: "One sentence spawned an entire product with project management, plugin architecture, and a deployed repo. Context accumulated so fast that by mid-session, single-word responses steered the entire build.",
    },
    color: "#a855f7",
  },
  {
    id: "cache-shim",
    title: "Find Machine Readable Format for API",
    score: 91,
    turns: "~8",
    tools: ["Agent", "Write", "Bash", "WebSearch"],
    description:
      "Dug into Claude API cache busting bugs, identified 4 distinct CLI-layer issues, then built a full transparent reverse-proxy shim (cache_shim.py) that normalizes requests, strips volatile headers, injects cache breakpoints, and monitors hit rate. This is a shippable tool.",
    topics: ["claude-api", "caching", "reverse-proxy", "tooling"],
    promptStyle: {
      label: "Debug → Build",
      detail: "Started as a question about API formats. The agent's investigation uncovered cache invalidation bugs, and the user's terse follow-ups ('fix it', 'make it a proxy') turned a debugging session into a production tool.",
    },
    color: "#22c55e",
  },
  {
    id: "threads-post",
    title: "Explain Claude Harness Ecosystem Simply",
    score: 78,
    turns: "~14",
    tools: [],
    description:
      "Iterated a Threads post about Google inventing the transformer and losing the talent. Went through multiple drafts — terse, punchy, Unicode text effects, 'chaos mode,' 'make it fashion.' The final draft with mixed Unicode weights is actually fire.",
    topics: ["content-creation", "threads", "transformer-history"],
    promptStyle: {
      label: "Vibes Only",
      detail: "Pure creative direction through feel-words: 'make it fashion,' 'chaos mode,' 'more punchy.' No specifications, no word counts. The accumulated drafts in context meant each 2-word note refined the whole piece.",
    },
    color: "#facc15",
  },
  {
    id: "gemma-local",
    title: "Run Gemma Model Locally on RTX 5090",
    score: 72,
    turns: "~10",
    tools: ["Chrome JS", "Bash", "Write"],
    description:
      "Trying to get a local inference setup running on the 5090. Hit the same sandbox credential wall as SessionSwipe. Ended with a push script bundled for WSL.",
    topics: ["local-inference", "gpu", "git-push-workaround"],
    promptStyle: {
      label: "Obstacle Course",
      detail: "Each sandbox restriction became an implicit constraint the agent carried forward. By the third wall, the user just said 'workaround' and the agent already knew the pattern: bundle for WSL.",
    },
    color: "#60a5fa",
  },
  {
    id: "pill-clicker",
    title: "Convert Claude Chat to Code Repository",
    score: 58,
    turns: "~8",
    tools: ["Edit", "Read"],
    description:
      "Pill clicker script with speed control — added runtime interval adjustment. A quick hack, but the pattern of iterating a browser automation tool through terse feedback is the same.",
    topics: ["browser-automation", "scripting"],
    promptStyle: {
      label: "Iterate Fast",
      detail: "Short feedback loops: 'faster,' 'add a slider,' 'that breaks it.' Each prompt assumed the agent remembered the script state. No re-explanation needed.",
    },
    color: "#f87171",
  },
  {
    id: "arch-discussion",
    title: "Engineering Architecture Discussion",
    score: 45,
    turns: "~6",
    tools: [],
    description:
      "Wanted to pull context from other sessions into an architecture discussion about Harbor vs GHCR. The session died because of context isolation — couldn't cross-reference other conversations. This is literally the problem SessionSwipe solves.",
    topics: ["harbor", "ghcr", "container-registry", "cross-session-context"],
    promptStyle: {
      label: "Context Starvation",
      detail: "The anti-example. Terse prompts failed here because the context they referenced lived in a different session. Without persistence across sessions, shorthand has nothing to resolve against.",
    },
    color: "#6b7280",
  },
] as const;

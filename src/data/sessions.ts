/** Real session evidence — how terse prompting plays out across different contexts. */

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
    title: "One sentence → shipped product",
    score: 97,
    turns: "~30+",
    tools: ["Linear MCP", "list_sessions", "read_transcript", "Chrome (GitHub)", "Write", "Bash", "Skill"],
    description:
      "From a one-line idea to a full Linear project with 7 issues, a working Cowork plugin with 2 skills, a validated .plugin file, and a GitHub repo — in one session. The product eats its own tail: we built a session discovery tool, then immediately used it to discover sessions.",
    topics: ["sessionswipe", "cowork-plugin", "product-dev", "meta"],
    promptStyle: {
      label: "Idea → Ship",
      detail: "One sentence spawned an entire product with project management, plugin architecture, and a deployed repo. Context accumulated so fast that by mid-session, single-word responses steered the build.",
    },
    color: "#a855f7",
  },
  {
    id: "cache-shim",
    title: "API question → production proxy tool",
    score: 91,
    turns: "~8",
    tools: ["Agent", "Write", "Bash", "WebSearch"],
    description:
      "Dug into Claude API cache busting bugs, identified 4 distinct CLI-layer issues, then built a transparent reverse-proxy shim that normalizes requests, strips volatile headers, injects cache breakpoints, and monitors hit rate. Shippable.",
    topics: ["claude-api", "caching", "reverse-proxy", "tooling"],
    promptStyle: {
      label: "Debug → Build",
      detail: "Started as a question about API formats. Investigation uncovered cache invalidation bugs, and terse follow-ups ('fix it', 'make it a proxy') turned debugging into a production tool.",
    },
    color: "#22c55e",
  },
  {
    id: "threads-post",
    title: "Draft iteration through vibes alone",
    score: 78,
    turns: "~14",
    tools: [],
    description:
      "Iterated a Threads post about Google inventing the transformer and losing the talent. Multiple drafts — terse, punchy, Unicode text effects, 'chaos mode,' 'make it fashion.' The final draft with mixed Unicode weights is actually fire.",
    topics: ["content-creation", "threads", "transformer-history"],
    promptStyle: {
      label: "Vibes Only",
      detail: "Pure creative direction through feel-words: 'make it fashion,' 'chaos mode,' 'more punchy.' No specifications, no word counts. Accumulated drafts in context meant each 2-word note refined the whole piece.",
    },
    color: "#facc15",
  },
  {
    id: "gemma-local",
    title: "Local inference on RTX 5090",
    score: 72,
    turns: "~10",
    tools: ["Chrome JS", "Bash", "Write"],
    description:
      "Getting a local inference setup running on the 5090. Hit the same sandbox credential wall as SessionSwipe. Ended with a push script bundled for WSL.",
    topics: ["local-inference", "gpu", "git-push-workaround"],
    promptStyle: {
      label: "Obstacle Course",
      detail: "Each sandbox restriction became an implicit constraint carried forward. By the third wall, the user just said 'workaround' and the agent already knew the pattern: bundle for WSL.",
    },
    color: "#60a5fa",
  },
  {
    id: "pill-clicker",
    title: "Browser automation via terse feedback",
    score: 58,
    turns: "~8",
    tools: ["Edit", "Read"],
    description:
      "Pill clicker script with speed control — added runtime interval adjustment. Quick hack, but the pattern of iterating browser automation through terse feedback is the same as everything else.",
    topics: ["browser-automation", "scripting"],
    promptStyle: {
      label: "Iterate Fast",
      detail: "Short feedback loops: 'faster,' 'add a slider,' 'that breaks it.' Each prompt assumed the agent remembered script state. No re-explanation needed.",
    },
    color: "#f87171",
  },
  {
    id: "arch-discussion",
    title: "The anti-example: context starvation",
    score: 45,
    turns: "~6",
    tools: [],
    description:
      "Wanted to pull context from other sessions into an architecture discussion about Harbor vs GHCR. Session died because of context isolation — couldn't cross-reference other conversations. This is the problem SessionSwipe was built to solve.",
    topics: ["harbor", "ghcr", "container-registry", "cross-session"],
    promptStyle: {
      label: "Context Starvation",
      detail: "The anti-example. Terse prompts failed because the context they referenced lived in a different session. Without cross-session persistence, shorthand resolves to nothing.",
    },
    color: "#6b7280",
  },
] as const;

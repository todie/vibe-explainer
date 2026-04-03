import { useState } from "react";
import type { PromptEntry } from "../data";
import { PHASE_META } from "../data";

interface PromptCardProps {
  readonly prompt: PromptEntry;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);
  const meta = PHASE_META[prompt.phase];

  return (
    <div
      style={{
        background: "var(--gray-900)",
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${expanded ? meta.color + "40" : "var(--gray-800)"}`,
        overflow: "hidden",
        transition: "border-color var(--transition-normal)",
      }}
    >
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
          width: "100%",
          padding: "20px 24px",
          background: "transparent",
          border: "none",
          color: "#fff",
          textAlign: "left",
        }}
      >
        {/* Phase dot + number */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minWidth: 32 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "var(--radius-full)",
              background: meta.color + "20",
              color: meta.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "var(--font-mono)",
            }}
          >
            {prompt.id}
          </div>
          <div style={{ fontSize: 10, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {meta.label.split(" ")[0]}
          </div>
        </div>

        {/* Prompt text */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 15,
              color: "var(--gray-200)",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "var(--gray-600)", userSelect: "none" }}>$ </span>
            {prompt.text}
          </div>
          <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 6 }}>
            {prompt.wordCount} words → {prompt.outputScope.slice(0, 60)}…
          </div>
        </div>

        {/* Expand indicator */}
        <div
          style={{
            fontSize: 18,
            color: "var(--gray-600)",
            transition: "transform var(--transition-fast)",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            marginTop: 4,
          }}
        >
          ▾
        </div>
      </button>

      {/* Expandable detail */}
      {expanded && (
        <div style={{ padding: "0 24px 20px 72px", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Implied context */}
          <div>
            <div style={{ fontSize: 11, color: meta.color, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontWeight: 600 }}>
              Implied Context (not stated)
            </div>
            {prompt.impliedContext.map((ctx, i) => (
              <div key={i} style={{ fontSize: 13, color: "var(--gray-400)", lineHeight: 1.7, paddingLeft: 12, borderLeft: `2px solid ${meta.color}30` }}>
                {ctx}
              </div>
            ))}
          </div>

          {/* Output scope */}
          <div>
            <div style={{ fontSize: 11, color: "var(--green-400)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontWeight: 600 }}>
              Actual Output Scope
            </div>
            <div style={{ fontSize: 13, color: "var(--gray-300)", lineHeight: 1.7 }}>
              {prompt.outputScope}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

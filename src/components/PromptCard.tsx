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
        background: expanded
          ? `linear-gradient(135deg, var(--gray-900) 0%, ${meta.color}06 100%)`
          : "var(--gray-900)",
        borderRadius: "var(--radius-xl)",
        border: `1px solid ${expanded ? meta.color + "30" : "var(--gray-800)"}`,
        overflow: "hidden",
        transition: "all var(--transition-normal)",
      }}
    >
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
        {/* Phase number */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, minWidth: 36 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "var(--radius-full)",
              background: meta.color + "15",
              border: `1px solid ${meta.color}30`,
              color: meta.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 700,
              fontFamily: "var(--font-mono)",
            }}
          >
            {prompt.id}
          </div>
          <div style={{ fontSize: 9, color: meta.color, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, opacity: 0.7 }}>
            {meta.label}
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
            <span style={{ color: meta.color, opacity: 0.5, userSelect: "none" }}>$ </span>
            {prompt.text}
          </div>
          <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 6 }}>
            <span style={{ color: meta.color, fontWeight: 600 }}>{prompt.wordCount}w</span>
            {" → "}
            {prompt.outputScope.slice(0, 65)}…
          </div>
        </div>

        {/* Expand */}
        <div
          style={{
            fontSize: 16,
            color: "var(--gray-600)",
            transition: "transform var(--transition-fast)",
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            marginTop: 6,
          }}
        >
          ▾
        </div>
      </button>

      {expanded && (
        <div style={{ padding: "0 24px 24px 76px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div style={{ fontSize: 10, color: meta.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontWeight: 700 }}>
              Implied — not stated
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {prompt.impliedContext.map((ctx, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 13,
                    color: "var(--gray-400)",
                    lineHeight: 1.6,
                    paddingLeft: 14,
                    borderLeft: `2px solid ${meta.color}25`,
                  }}
                >
                  {ctx}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontSize: 10, color: "var(--green-400)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10, fontWeight: 700 }}>
              What actually came out
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

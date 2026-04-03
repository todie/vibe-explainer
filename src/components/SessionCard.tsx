import { useState } from "react";
import type { SessionExample } from "../data";

interface SessionCardProps {
  readonly session: SessionExample;
}

export default function SessionCard({ session }: SessionCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        background: "var(--gray-900)",
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${expanded ? session.color + "40" : "var(--gray-800)"}`,
        overflow: "hidden",
        transition: "border-color var(--transition-normal)",
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
        {/* Score badge */}
        <div
          style={{
            minWidth: 44,
            height: 44,
            borderRadius: "var(--radius-md)",
            background: session.color + "18",
            color: session.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            fontWeight: 700,
            fontFamily: "var(--font-mono)",
          }}
        >
          {session.score}
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--gray-200)", marginBottom: 4 }}>
            {session.title}
          </div>
          <div style={{ fontSize: 13, color: "var(--gray-400)", lineHeight: 1.6 }}>
            {session.description.slice(0, 120)}…
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
            {session.topics.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 11,
                  padding: "2px 8px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--gray-800)",
                  color: "var(--gray-400)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Meta + expand */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, minWidth: 60 }}>
          <div style={{ fontSize: 11, color: "var(--gray-500)" }}>{session.turns} turns</div>
          <div
            style={{
              fontSize: 18,
              color: "var(--gray-600)",
              transition: "transform var(--transition-fast)",
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ▾
          </div>
        </div>
      </button>

      {expanded && (
        <div style={{ padding: "0 24px 20px 84px", display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Prompt style analysis */}
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 600,
                padding: "2px 10px",
                borderRadius: "var(--radius-full)",
                background: session.color + "20",
                color: session.color,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 8,
              }}
            >
              {session.promptStyle.label}
            </div>
            <p style={{ fontSize: 13, color: "var(--gray-300)", lineHeight: 1.7 }}>
              {session.promptStyle.detail}
            </p>
          </div>

          {/* Tools used */}
          {session.tools.length > 0 && (
            <div>
              <div style={{ fontSize: 11, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, fontWeight: 600 }}>
                Tools Used
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {session.tools.map((t) => (
                  <code key={t} style={{ fontSize: 11, color: "var(--gray-300)" }}>{t}</code>
                ))}
              </div>
            </div>
          )}

          {/* Full description */}
          <div>
            <div style={{ fontSize: 11, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6, fontWeight: 600 }}>
              Full Summary
            </div>
            <p style={{ fontSize: 13, color: "var(--gray-400)", lineHeight: 1.7 }}>
              {session.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

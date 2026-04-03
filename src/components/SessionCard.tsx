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
        background: expanded
          ? `linear-gradient(135deg, var(--gray-900) 0%, ${session.color}06 100%)`
          : "var(--gray-900)",
        borderRadius: "var(--radius-xl)",
        border: `1px solid ${expanded ? session.color + "30" : "var(--gray-800)"}`,
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
        {/* Score badge */}
        <div
          style={{
            minWidth: 48,
            height: 48,
            borderRadius: "var(--radius-lg)",
            background: session.color + "12",
            border: `1px solid ${session.color}25`,
            color: session.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 17,
            fontWeight: 800,
            fontFamily: "var(--font-mono)",
          }}
        >
          {session.score}
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: "var(--gray-200)", marginBottom: 4 }}>
            {session.title}
          </div>
          <div style={{ fontSize: 13, color: "var(--gray-400)", lineHeight: 1.6 }}>
            {session.description.slice(0, 120)}…
          </div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
            {session.topics.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: 10,
                  padding: "3px 10px",
                  borderRadius: "var(--radius-full)",
                  background: "var(--gray-800)",
                  border: "1px solid var(--gray-700)",
                  color: "var(--gray-400)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "0.02em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6, minWidth: 64 }}>
          <div style={{ fontSize: 11, color: "var(--gray-500)", fontFamily: "var(--font-mono)" }}>{session.turns} turns</div>
          <div
            style={{
              fontSize: 16,
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
        <div style={{ padding: "0 24px 24px 88px", display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div
              style={{
                display: "inline-block",
                fontSize: 10,
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                background: session.color + "15",
                border: `1px solid ${session.color}25`,
                color: session.color,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 10,
              }}
            >
              {session.promptStyle.label}
            </div>
            <p style={{ fontSize: 13, color: "var(--gray-300)", lineHeight: 1.7 }}>
              {session.promptStyle.detail}
            </p>
          </div>

          {session.tools.length > 0 && (
            <div>
              <div style={{ fontSize: 10, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontWeight: 700 }}>
                Tools
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {session.tools.map((t) => (
                  <code key={t} style={{ fontSize: 11, color: "var(--gray-300)" }}>{t}</code>
                ))}
              </div>
            </div>
          )}

          <div>
            <div style={{ fontSize: 10, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontWeight: 700 }}>
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

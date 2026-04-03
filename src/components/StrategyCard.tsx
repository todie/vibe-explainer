import { useState } from "react";
import type { Strategy } from "../data";

interface StrategyCardProps {
  readonly strategy: Strategy;
}

export default function StrategyCard({ strategy }: StrategyCardProps) {
  const [showExample, setShowExample] = useState(false);

  return (
    <div
      style={{
        background: "var(--gray-900)",
        borderRadius: "var(--radius-lg)",
        padding: "24px",
        borderTop: `3px solid ${strategy.color}`,
      }}
    >
      <h3 style={{ fontSize: 16, fontWeight: 600, color: strategy.color, marginBottom: 8 }}>
        {strategy.title}
      </h3>
      <p style={{ fontSize: 14, color: "var(--gray-300)", lineHeight: 1.7, marginBottom: 12 }}>
        {strategy.description}
      </p>
      <div style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 12 }}>
        <span style={{ fontWeight: 600, color: "var(--gray-400)" }}>Mechanism: </span>
        {strategy.mechanism}
      </div>

      <button
        onClick={() => setShowExample((v) => !v)}
        style={{
          background: strategy.color + "15",
          border: `1px solid ${strategy.color}30`,
          borderRadius: "var(--radius-md)",
          padding: "8px 14px",
          fontSize: 12,
          color: strategy.color,
          fontWeight: 500,
        }}
      >
        {showExample ? "Hide" : "Show"} example from this session
      </button>

      {showExample && (
        <div
          style={{
            marginTop: 12,
            padding: "12px 16px",
            background: strategy.color + "08",
            borderRadius: "var(--radius-md)",
            borderLeft: `3px solid ${strategy.color}40`,
            fontSize: 13,
            color: "var(--gray-300)",
            lineHeight: 1.6,
            fontStyle: "italic",
          }}
        >
          {strategy.example}
        </div>
      )}
    </div>
  );
}

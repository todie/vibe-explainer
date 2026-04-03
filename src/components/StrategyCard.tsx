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
        borderRadius: "var(--radius-xl)",
        padding: "28px",
        border: `1px solid var(--gray-800)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, ${strategy.color}, ${strategy.color}40)`,
        }}
      />
      <h3 style={{ fontSize: 16, fontWeight: 700, color: strategy.color, marginBottom: 10 }}>
        {strategy.title}
      </h3>
      <p style={{ fontSize: 14, color: "var(--gray-300)", lineHeight: 1.7, marginBottom: 14 }}>
        {strategy.description}
      </p>
      <div style={{ fontSize: 12, color: "var(--gray-500)", marginBottom: 16 }}>
        <span style={{ fontWeight: 700, color: "var(--gray-400)", textTransform: "uppercase", fontSize: 10, letterSpacing: "0.06em" }}>Mechanism: </span>
        {strategy.mechanism}
      </div>

      <button
        onClick={() => setShowExample((v) => !v)}
        style={{
          background: strategy.color + "10",
          border: `1px solid ${strategy.color}25`,
          borderRadius: "var(--radius-md)",
          padding: "8px 16px",
          fontSize: 12,
          color: strategy.color,
          fontWeight: 600,
          transition: "all var(--transition-fast)",
        }}
      >
        {showExample ? "Hide" : "Show"} example
      </button>

      {showExample && (
        <div
          style={{
            marginTop: 14,
            padding: "14px 18px",
            background: strategy.color + "08",
            borderRadius: "var(--radius-md)",
            borderLeft: `3px solid ${strategy.color}40`,
            fontSize: 13,
            color: "var(--gray-300)",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          {strategy.example}
        </div>
      )}
    </div>
  );
}

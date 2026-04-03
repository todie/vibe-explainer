import type { Principle } from "../data";

interface PrincipleCardProps {
  readonly principle: Principle;
  readonly index: number;
}

const ACCENT_COLORS = ["#60a5fa", "#a855f7", "#22c55e", "#facc15", "#f87171"] as const;

export default function PrincipleCard({ principle, index }: PrincipleCardProps) {
  const color = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <div
      style={{
        background: `linear-gradient(135deg, var(--gray-900) 0%, ${color}06 100%)`,
        borderRadius: "var(--radius-xl)",
        padding: "28px",
        border: `1px solid ${color}18`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 3,
          background: `linear-gradient(180deg, ${color}, ${color}30)`,
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span style={{ fontSize: 24, lineHeight: 1 }}>{principle.icon}</span>
        <h3 style={{ fontSize: 15, fontWeight: 700, color, letterSpacing: "-0.01em" }}>
          {principle.title}
        </h3>
      </div>
      <p style={{ fontSize: 14, color: "var(--gray-300)", lineHeight: 1.7 }}>
        {principle.summary}
      </p>
    </div>
  );
}

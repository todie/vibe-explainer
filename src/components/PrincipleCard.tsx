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
        background: "var(--gray-900)",
        borderRadius: "var(--radius-lg)",
        padding: "24px",
        borderLeft: `3px solid ${color}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
        <span style={{ fontSize: 22 }}>{principle.icon}</span>
        <h3 style={{ fontSize: 15, fontWeight: 600, color }}>
          {principle.title}
        </h3>
      </div>
      <p style={{ fontSize: 14, color: "var(--gray-300)", lineHeight: 1.7 }}>
        {principle.summary}
      </p>
    </div>
  );
}

interface StatCardProps {
  readonly label: string;
  readonly value: string;
  readonly sub?: string;
  readonly accent?: string;
}

export default function StatCard({ label, value, sub, accent = "#60a5fa" }: StatCardProps) {
  return (
    <div
      style={{
        background: "var(--gray-900)",
        borderRadius: "var(--radius-lg)",
        padding: "20px 24px",
        borderLeft: `3px solid ${accent}`,
      }}
    >
      <div style={{ fontSize: 12, color: "var(--gray-400)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: accent, fontFamily: "var(--font-mono)" }}>
        {value}
      </div>
      {sub && (
        <div style={{ fontSize: 13, color: "var(--gray-500)", marginTop: 4 }}>{sub}</div>
      )}
    </div>
  );
}

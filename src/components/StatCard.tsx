import { useState, useEffect } from "react";

interface StatCardProps {
  readonly label: string;
  readonly value: string;
  readonly sub?: string;
  readonly accent?: string;
}

export default function StatCard({ label, value, sub, accent = "#60a5fa" }: StatCardProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: `linear-gradient(135deg, var(--gray-900) 0%, ${accent}08 100%)`,
        borderRadius: "var(--radius-xl)",
        padding: "24px 24px 20px",
        border: `1px solid ${accent}20`,
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          opacity: 0.6,
        }}
      />
      <div style={{ fontSize: 11, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8, fontWeight: 600 }}>
        {label}
      </div>
      <div
        style={{
          fontSize: 32,
          fontWeight: 800,
          color: accent,
          fontFamily: "var(--font-mono)",
          lineHeight: 1,
          animation: "count-up 0.6s ease-out",
        }}
      >
        {value}
      </div>
      {sub && (
        <div style={{ fontSize: 12, color: "var(--gray-500)", marginTop: 8, lineHeight: 1.4 }}>{sub}</div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";

interface AmplificationBarProps {
  readonly label: string;
  readonly inputWords: number;
  readonly outputScale: number;
  readonly color: string;
  readonly delay?: number;
}

export default function AmplificationBar({ label, inputWords, outputScale, color, delay = 0 }: AmplificationBarProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const maxScale = 200;
  const inputPct = Math.max((inputWords / maxScale) * 100, 2);
  const outputPct = Math.min((outputScale / maxScale) * 100, 100);

  return (
    <div style={{ marginBottom: 20, padding: "12px 0" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, alignItems: "baseline" }}>
        <span
          style={{
            fontSize: 13,
            color: "var(--gray-200)",
            fontFamily: "var(--font-mono)",
            maxWidth: "70%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <span style={{ color: "var(--gray-600)" }}>$ </span>
          {label}
        </span>
        <span style={{ fontSize: 12, color: "var(--gray-500)", fontFamily: "var(--font-mono)" }}>
          {inputWords}w → ~{outputScale} lines
        </span>
      </div>

      {/* Input bar */}
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
        <div style={{ width: 52, fontSize: 10, color: "var(--gray-600)", textAlign: "right", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          in
        </div>
        <div style={{ flex: 1, height: 6, background: "var(--gray-800)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: mounted ? `${inputPct}%` : "0%",
              background: `${color}60`,
              borderRadius: "var(--radius-full)",
              transition: "width 800ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      </div>

      {/* Output bar */}
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div style={{ width: 52, fontSize: 10, color: "var(--gray-600)", textAlign: "right", fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          out
        </div>
        <div style={{ flex: 1, height: 14, background: "var(--gray-800)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: mounted ? `${outputPct}%` : "0%",
              background: `linear-gradient(90deg, ${color}90, ${color})`,
              borderRadius: "var(--radius-full)",
              transition: "width 1400ms cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: mounted ? `0 0 20px ${color}30` : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}

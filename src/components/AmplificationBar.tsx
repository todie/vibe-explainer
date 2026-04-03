import { useState, useEffect } from "react";

interface AmplificationBarProps {
  readonly label: string;
  readonly inputWords: number;
  readonly outputScale: number;
  readonly color: string;
  readonly delay?: number;
}

/** Visualizes the ratio between terse input and large output. */
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
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, color: "var(--gray-300)", fontFamily: "var(--font-mono)" }}>
          {label}
        </span>
        <span style={{ fontSize: 12, color: "var(--gray-500)" }}>
          {inputWords}w → ~{outputScale} lines
        </span>
      </div>

      {/* Input bar (tiny) */}
      <div style={{ display: "flex", gap: 4, alignItems: "center", marginBottom: 4 }}>
        <div style={{ width: 50, fontSize: 10, color: "var(--gray-500)", textAlign: "right" }}>input</div>
        <div style={{ flex: 1, height: 8, background: "var(--gray-800)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: mounted ? `${inputPct}%` : "0%",
              background: color + "80",
              borderRadius: "var(--radius-full)",
              transition: "width 800ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      </div>

      {/* Output bar (large) */}
      <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
        <div style={{ width: 50, fontSize: 10, color: "var(--gray-500)", textAlign: "right" }}>output</div>
        <div style={{ flex: 1, height: 8, background: "var(--gray-800)", borderRadius: "var(--radius-full)", overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: mounted ? `${outputPct}%` : "0%",
              background: color,
              borderRadius: "var(--radius-full)",
              transition: "width 1200ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

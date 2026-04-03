interface HeaderProps {
  readonly dateline: string;
  readonly title: string;
  readonly subtitle: string;
}

export default function Header({ dateline, title, subtitle }: HeaderProps) {
  return (
    <header
      style={{
        position: "relative",
        padding: "100px 24px 64px",
        textAlign: "center",
        background: "linear-gradient(180deg, var(--gray-900) 0%, var(--gray-950) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Background glow orbs */}
      <div
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(ellipse, rgba(96, 165, 250, 0.08) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 70%)",
          pointerEvents: "none",
          animation: "pulse-glow 6s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 16px",
            borderRadius: "var(--radius-full)",
            background: "rgba(96, 165, 250, 0.08)",
            border: "1px solid rgba(96, 165, 250, 0.15)",
            fontSize: 12,
            color: "var(--blue-400)",
            marginBottom: 24,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.04em",
          }}
        >
          {dateline}
        </div>

        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 20,
            background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 40%, #f87171 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.2vw, 20px)",
            color: "var(--gray-400)",
            maxWidth: 680,
            margin: "0 auto",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      </div>
    </header>
  );
}

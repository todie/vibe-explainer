interface HeaderProps {
  readonly dateline: string;
  readonly title: string;
  readonly subtitle: string;
}

export default function Header({ dateline, title, subtitle }: HeaderProps) {
  return (
    <header
      style={{
        padding: "80px 24px 48px",
        textAlign: "center",
        background: "linear-gradient(180deg, var(--gray-900) 0%, var(--gray-950) 100%)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "4px 14px",
          borderRadius: "var(--radius-full)",
          background: "var(--gray-800)",
          fontSize: 12,
          color: "var(--gray-400)",
          marginBottom: 20,
          fontFamily: "var(--font-mono)",
        }}
      >
        {dateline}
      </div>

      <h1
        style={{
          fontSize: "clamp(28px, 5vw, 44px)",
          fontWeight: 700,
          lineHeight: 1.15,
          marginBottom: 16,
          background: "linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #f87171 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          color: "var(--gray-400)",
          maxWidth: 640,
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </p>
    </header>
  );
}

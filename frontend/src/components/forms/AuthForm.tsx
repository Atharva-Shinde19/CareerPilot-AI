import type { CSSProperties } from "react";

type AuthFormProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
};

export function AuthForm({ title, subtitle, buttonLabel }: AuthFormProps) {
  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        padding: "1.5rem",
        borderRadius: "20px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
      }}
    >
      <h2 style={{ marginBottom: "0.35rem" }}>{title}</h2>
      <p style={{ marginTop: 0, color: "#64748b" }}>{subtitle}</p>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        <input placeholder="Email" style={inputStyle} />
        <input placeholder="Password" type="password" style={inputStyle} />
        <button style={buttonStyle}>{buttonLabel}</button>
      </div>
    </div>
  );
}

const inputStyle: CSSProperties = {
  padding: "0.8rem 0.9rem",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "0.95rem",
};

const buttonStyle: CSSProperties = {
  padding: "0.8rem 1rem",
  borderRadius: "10px",
  border: "none",
  background: "#4f46e5",
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: 600,
};

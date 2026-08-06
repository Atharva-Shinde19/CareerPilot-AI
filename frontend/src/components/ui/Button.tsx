import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const styles = {
    primary: {
      background: "#4f46e5",
      color: "#ffffff",
      border: "1px solid #4338ca",
    },
    secondary: {
      background: "#ffffff",
      color: "#0f172a",
      border: "1px solid #cbd5e1",
    },
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.65rem 0.95rem",
        borderRadius: "999px",
        fontWeight: 600,
        cursor: "pointer",
        ...styles[variant],
      }}
    >
      {children}
    </button>
  );
}

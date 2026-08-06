type SectionCardProps = {
  title: string;
  description: string;
  accent?: string;
};

export function SectionCard({ title, description, accent = "#4f46e5" }: SectionCardProps) {
  return (
    <section
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "16px",
        padding: "1rem",
        background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
        boxShadow: "0 10px 30px rgba(15, 23, 42, 0.05)",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "999px",
          background: accent,
          opacity: 0.16,
          marginBottom: "0.75rem",
        }}
      />
      <h3 style={{ margin: "0 0 0.35rem", fontSize: "1.05rem" }}>{title}</h3>
      <p style={{ margin: 0, color: "#64748b", lineHeight: 1.5 }}>{description}</p>
    </section>
  );
}

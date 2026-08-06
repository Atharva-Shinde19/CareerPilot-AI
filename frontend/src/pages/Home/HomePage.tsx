import { SectionCard } from "../../components/common/SectionCard";

export function HomePage() {
  return (
    <div>
      <div style={{ marginBottom: "1.5rem" }}>
        <h2 style={{ marginBottom: "0.35rem" }}>Welcome to your CareerPilot workspace</h2>
        <p style={{ margin: 0, color: "#64748b", maxWidth: "720px", lineHeight: 1.6 }}>
          This starter structure is ready for auth, resumes, mock interviews, reports, and profile management.
        </p>
      </div>

      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <SectionCard title="Resume insights" description="Analyze uploaded resumes and extract coaching-ready feedback." />
        <SectionCard title="Mock interviews" description="Practice role-based questions and track your confidence progress." accent="#0f766e" />
        <SectionCard title="Performance reports" description="Review your experiments, scores, and study recommendations." accent="#b45309" />
      </div>
    </div>
  );
}

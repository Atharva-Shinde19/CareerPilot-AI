import type { ReactNode } from "react";
import { Button } from "../ui/Button";

type ViewKey = "home" | "login" | "register" | "dashboard" | "resume" | "interview" | "reports" | "profile";

type MainLayoutProps = {
  children: ReactNode;
  activeView: ViewKey;
  onNavigate: (view: ViewKey) => void;
};

const navItems: Array<{ label: string; view: ViewKey }> = [
  { label: "Home", view: "home" },
  { label: "Login", view: "login" },
  { label: "Register", view: "register" },
  { label: "Dashboard", view: "dashboard" },
  { label: "Resume", view: "resume" },
  { label: "Interview", view: "interview" },
  { label: "Reports", view: "reports" },
  { label: "Profile", view: "profile" },
];

export function MainLayout({ children, activeView, onNavigate }: MainLayoutProps) {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", color: "#0f172a" }}>
      <header
        style={{
          padding: "1rem 1.5rem",
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "1.2rem" }}>CareerPilot AI</h1>
            <p style={{ margin: "0.2rem 0 0", color: "#64748b" }}>Resume intelligence + interview readiness</p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {navItems.map((item) => (
              <Button
                key={item.view}
                variant={activeView === item.view ? "primary" : "secondary"}
                onClick={() => onNavigate(item.view)}
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1.5rem 3rem" }}>{children}</main>
    </div>
  );
}

import { useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import { ResumePage } from "../pages/Resume/ResumePage";
import { InterviewPage } from "../pages/Interview/InterviewPage";
import { ReportsPage } from "../pages/Reports/ReportsPage";
import { ProfilePage } from "../pages/Profile/ProfilePage";

type ViewKey = "home" | "login" | "register" | "dashboard" | "resume" | "interview" | "reports" | "profile";

export function AppRoutes() {
  const [activeView, setActiveView] = useState<ViewKey>("home");

  const renderView = () => {
    switch (activeView) {
      case "login":
        return <LoginPage />;
      case "register":
        return <RegisterPage />;
      case "dashboard":
        return <DashboardPage />;
      case "resume":
        return <ResumePage />;
      case "interview":
        return <InterviewPage />;
      case "reports":
        return <ReportsPage />;
      case "profile":
        return <ProfilePage />;
      case "home":
      default:
        return <HomePage />;
    }
  };

  return (
    <MainLayout activeView={activeView} onNavigate={setActiveView}>
      {renderView()}
    </MainLayout>
  );
}

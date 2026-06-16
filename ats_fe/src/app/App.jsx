import react from "react";
import CandidateLogin from "../features/auth/pages/CandidateLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import jobRoutes from "@/features/jobs/routes";
import publicRoutes from "@/features/public/routes";
import AdminManageDepartmentPage from "@/features/departments/pages/AdminManageDepartmentPage.jsx";
import DashboardSearch from "@/features/dashboard/pages/DashboardSearch";
function App() {
  // Logic

  // UI
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/login" element={<CandidateLogin />} />
        <Route path="/register" element={<CandidateLogin />} />
        {jobRoutes}
        <Route path="/dashboard/search" element={<DashboardSearch />} />
        {publicRoutes}
        <Route path="/management/department" element={<AdminManageDepartmentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

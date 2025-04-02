import { Routes, Route } from "react-router-dom";
import { SingleElimination } from "./components/SingleElimination";
import LoginPage from "./pages/Login/LoginPage";
import TeamsPage from "./pages/Teams/TeamsPage";
import FirstDay from "./pages/FirstDay/FirstDayPage";
import SecondDay from "./pages/SecondDay/SecondDayPage";
import Sports from "./pages/Sports/SportsPage";
import HomePage from "./pages/Home/HomePage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/equipos" element={<TeamsPage />} />
        <Route path="/primer_dia" element={<FirstDay />} />
        <Route path="/segundo_dia" element={<SecondDay />} />
        <Route path="/deportes" element={<Sports />} />

        <Route path="/tournament" element={<SingleElimination />} />
      </Routes>
    </>
  );
}

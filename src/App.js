import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react"
import TodayPage from "./pages/TodayPage/TodayPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { HabitContextProvider } from "./context/HabitContext";

export default function App() {
  const [showBars, setShowBars] = useState(false)

  return (
    <UserContextProvider>
      <HabitContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<SignInPage setShowBars={setShowBars} />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="/hoje" element={<TodayPage />} />
            <Route path="/historico" element={<HistoricPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </HabitContextProvider>
    </UserContextProvider>
  );
}

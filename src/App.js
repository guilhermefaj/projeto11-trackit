import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import React, { useState } from "react"
import TodayPage from "./pages/TodayPage/TodayPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showBars, setShowBars] = useState(false)


  return (
    <>
      {showBars ? <NavBar /> : ""}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage setShowBars={setShowBars} />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoricPage />} />
        </Routes>
      </BrowserRouter>
      {showBars ? <Footer /> : ""}
    </>
  );
}

export default App;

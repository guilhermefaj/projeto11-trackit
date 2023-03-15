import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import TodayPage from "./pages/TodayPage/TodayPage";
import HabitsPage from "./pages/HabitsPage/HabitsPage";
import HistoricPage from "./pages/HistoricPage/HistoricPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <SignInPage /> */}
      {/* <SignUpPage /> */}
      {/* <NavBar /> */}
      <HabitsPage />
      {/* <TodayPage /> */}
      {/* <HistoricPage /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

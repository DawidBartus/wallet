import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogInForm from "./components/LoginForm/LogInForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import HomePage from "./components/HomePage/HomePage";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Statistic from "./components/Statistic/Statistic";
import Currency from "./components/Currency/Currency";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInForm />} />
      <Route path="/login" element={<LogInForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route element={<ResponsiveAppBar />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/currency" element={<Currency />} />
      </Route>
    </Routes>
  );
}

export default App;

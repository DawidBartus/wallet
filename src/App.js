import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogInForm from "./components/LoginForm/LogInForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import HomePage from "./components/HomePage/HomePage";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Statistic from "./components/Statistic/Statistic";
import Currency from "./components/Currency/Currency";
import Transaction from "./components/Transaction/Transaction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LogInForm />} />
      <Route path="/login" element={<LogInForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route element={<ResponsiveAppBar />}>
        <Route path="/home" element={<HomePage />}>
          <Route index element={<Transaction />} />
          <Route path="/home/statistic" element={<Statistic />} />
          <Route path="/home/currency" element={<Currency />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

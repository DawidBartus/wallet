import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogInForm from "./components/LoginForm/LogInForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import HomePage from "./components/HomePage/HomePage";
import ResponsiveAppBar from "./components/ResponsiveAppBar/Navbar";
import Statistic from "./components/Statistic/Statistic";
import Currency from "./components/Currency/Currency";
import Settings from "./components/Settings/Settings";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import StyledFormBlurBackground from "./components/Background/FormBlurBackground";
import AddTransactionForm from "./components/AddTransaction/AddTransactionForm";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<LogInForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<ResponsiveAppBar />}>
            <Route path="/home" element={<HomePage />}>
              <Route index element={<TransactionPage />} />
              <Route path="/home/statistic" element={<Statistic />} />
              <Route path="/home/currency" element={<Currency />} />
              <Route path="/home/settings" element={<Settings />}>
                <Route path="/home/settings/email" element={<Settings />} />
                <Route path="/home/settings/password" element={<Settings />} />
              </Route>

              <Route
                path="/home/devtest"
                element={<StyledFormBlurBackground />}
              />
              <Route
                path="/home/addTransaction"
                element={<AddTransactionForm />}
              />
            </Route>
          </Route>
        </Routes>
      </Provider>
    </LocalizationProvider>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import LogInForm from "./components/LoginForm/LogInForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogInForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;

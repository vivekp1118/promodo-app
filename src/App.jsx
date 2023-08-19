import { SignUp } from "../Componenets/SignUp";
import { SignIn } from "../Componenets/Login";
import Dashboard from "../Componenets/DashBoard";
import { Routes, Route } from "react-router";

import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/Login" element={<SignIn />} />
      <Route path="/Home" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

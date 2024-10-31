import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home"; 
import Login from "./pages/login/in";
import LoginUp from "./pages/login/up"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login/up" element={<LoginUp />} />
      </Routes>
    </Router>
  );
};

export default App;

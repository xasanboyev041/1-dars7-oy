import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./routes/HomePage";
import RegisterPage from "./routes/RegisterPage";
import { UserProvider } from "./context/context";
import "./App.css";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

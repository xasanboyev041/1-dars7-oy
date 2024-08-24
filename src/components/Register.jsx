import React, { useState, useContext } from "react";
import { UserContext } from "../context/context";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const { dispatch } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { email, password, age };
    dispatch({ type: "ADD_USER", payload: newUser });
    alert("User registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default Register;

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

import "../styles/Auth.css"; 

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Signup failed: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2><br></br>

      {error && <p className="error-text">{error}</p>}

      <form onSubmit={handleSignup}>
        <input
          type="email"
          className="auth-input"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="auth-input"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-button">
          Create Account
        </button>
      </form><br></br>

      <p className="auth-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;

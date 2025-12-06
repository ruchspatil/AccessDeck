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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // ------------------------------
      // 🔥 n8n Webhook Trigger
      // ------------------------------
     await fetch("https://ruchitapatil.app.n8n.cloud/webhook-test/new-signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: user.email,
    uid: user.uid,
    signupTime: new Date().toISOString(),
  }),
});


      // Redirect after signup
      navigate("/dashboard");
    } catch (err) {
      setError("Signup failed: " + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <br />

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
      </form>

      <br />

      <p className="auth-link">
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
}

export default Signup;


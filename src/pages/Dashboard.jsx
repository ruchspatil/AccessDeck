import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import "../styles/Auth.css"; 

function Dashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); 
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="auth-container dashboard-container">
      <h1  className="welcome-title">Welcome User 🎉</h1><br></br>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;


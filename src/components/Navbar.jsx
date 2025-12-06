import React from "react";
import { Link } from "react-router-dom";
import "../styles/Auth.css";

function Navbar({ isLoggedIn }) {  
  return (
    <div className="navbar">
      <div className="navbar-logo">AccessDeck</div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/signup">Sign Up</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
      </div>
    </div>
  );
}

export default Navbar;

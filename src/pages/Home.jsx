import React from "react";
import "../styles/Auth.css";

function Home() {
  return (
    <div className="auth-container">
<h1 className="welcome-title">
  Welcome to <span className="highlight">AccessDeck</span> 🎉
</h1>


      <p>Your journey starts here.</p><br></br>

      <p className="a">
       <a href="/signup">Create an Account</a> | <a href="/login">Login</a>

      </p>
    </div>
  );
}

export default Home;

import React from "react";
import "../styles/Auth.css";

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} AccessDeck - All Rights Reserved.
    </footer>
  );
}

export default Footer;

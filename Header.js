

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <h1>My React Project</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
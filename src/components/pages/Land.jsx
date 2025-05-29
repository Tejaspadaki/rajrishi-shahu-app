import React, { useRef } from "react";
import "./land.css"; // Import the CSS

const Navbar = () => {
  const navRef = useRef(null);

  return (
    <div className="navbar-container" ref={navRef} aria-label="Primary">    
    </div>
  );
};

export default Navbar;

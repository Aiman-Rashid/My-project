import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu
import logo from '../../assets/img/logo.png';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Kid Therapy Logo" className="nav-logo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#features">Features</a>
        <a href="#reviews">Reviews</a>
        <a href="#blog">Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../../assets/img/logo.png";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const dropdownRef = useRef(null);

  // Change language and set direction
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    document.documentElement.dir = lng === "ur" ? "rtl" : "ltr";
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="navbar"
      style={{ direction: i18n.language === "ur" ? "rtl" : "ltr" }}
    >
      <div className="logo">
        <img src={logo} alt={t("navbar.logoAlt")} className="nav-logo" />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home">{t("navbar.home")}</a>
        <a href="#about">{t("navbar.about")}</a>
        <a href="#features">{t("navbar.features")}</a>
        <a href="#reviews">{t("navbar.reviews")}</a>
        <a href="#blog">{t("navbar.blog")}</a>

        {/* 🌐 Language Dropdown */}
     <div style={{  paddingBlock: "3px" , border:"none" }}>
  <label htmlFor="language-select" >🌐</label>
  <select
    id="language-select"
    value={i18n.language}
    onChange={(e) => changeLanguage(e.target.value)}
    style={{
           background: "transparent",     
      border: "none",                 
      outline: "none",                
      padding: "5px 10px",
  width:"60px",
      cursor: "pointer",
    }}
  >
    <option value="en">English</option>
    <option value="ur">اردو</option>
  </select>
</div>


      </div>
    </nav>
  );
};

export default Navbar;

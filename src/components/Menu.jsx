import React, { useState, useEffect, useRef } from "react";
import "../styles/menu.css";

function Menu() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsMenuOpen(false); // Ferme le menu burger
    }
  };

  // Ferme le menu burger lorsqu'on clique à l'extérieur
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Détecte la section visible pour définir la classe active automatiquement
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const handleScroll = () => {
      let currentSection = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar" ref={menuRef}>
      <header id="header">
        <a
          href="#home"
          className={`logoCM ${activeSection === "home" ? "active" : ""}`}
          onClick={(e) => handleMenuClick(e, "home")}
        >
          Cellia Mouzon
        </a>
        <button
          className="show-bar"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ≡
        </button>
        <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => handleMenuClick(e, "home")}
          >
            Accueil
          </a>
          <a
            href="#aboutme"
            className={activeSection === "aboutme" ? "active" : ""}
            onClick={(e) => handleMenuClick(e, "aboutme")}
          >
            À propos
          </a>
          <a
            href="#gallery"
            className={activeSection === "gallery" ? "active" : ""}
            onClick={(e) => handleMenuClick(e, "gallery")}
          >
            Mes projets
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={(e) => handleMenuClick(e, "contact")}
          >
            Contactez-moi
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Menu;

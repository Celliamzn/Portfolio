import React, { useState, useEffect } from "react";
import "../styles/menu.css";

function Menu() {
  const [activeSection, setActiveSection] = useState("home");

  const handleMenuClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId); // Met à jour la section active
    }
  };

  // Optionnel : Détecte la section visible pour définir la classe active automatiquement
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

  return (
    <div className="navbar">
      <header id="header">
        <a
          href="#home"
          className={`logo ${activeSection === "home" ? "active" : ""}`}
          onClick={(e) => handleMenuClick(e, "home")}
        >
          Cellia Mouzon
        </a>
        <div className="menu">
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
        </div>
      </header>
    </div>
  );
}

export default Menu;

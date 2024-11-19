import React, { useRef, useEffect } from "react";
import "../styles/carouselLogos.css";
import ReactLogo from "../assets/logos/react-2.svg";
import Html from "../assets/logos/html-1.svg";
import Css from "../assets/logos/css-3.svg";
import MongoDB from "../assets/logos/mongodb-icon-1.svg";
import JS from "../assets/logos/javascript-1.svg";
import GitHub from "../assets/logos/github-icon-1.svg";
import NodeJS from "../assets/logos/nodejs-icon.svg";

function CarouselLogos() {
  const logos = [
    { src: Html, alt: "HTML Logo" },
    { src: Css, alt: "CSS Logo" },
    { src: JS, alt: "JavaScript Logo" },
    { src: ReactLogo, alt: "React Logo" },
    { src: NodeJS, alt: "Node.js Logo" },
    { src: MongoDB, alt: "MongoDB Logo" },
    { src: GitHub, alt: "GitHub Logo" },
  ];

  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const track = carouselRef.current;
    const firstSet = track.innerHTML; // Sauvegarde du contenu initial
    track.innerHTML += firstSet; // Duplication des logos

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 0.4; // Vitesse de défilement
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0; // Réinitialisation
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
      animationRef.current = requestAnimationFrame(scroll); // Animation continue
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      // Nettoyage de l'animation
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-mask">
        <div className="carousel-track" ref={carouselRef}>
          {logos.map((logo, index) => (
            <div className="carousel-item" key={`logo-${index}`}>
              <img src={logo.src} alt={logo.alt} className="carousel-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselLogos;

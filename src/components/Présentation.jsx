import Cellia from '../assets/images/Cellia.webp'
import '../styles/presentation.css'
import CarouselLogos from './CarouselLogos';


function Présentation() {
  return (
    <div className="section presentation" id="aboutme">
      <h2 className="presentation--titre">À propos</h2>
      <div className="presentation--paraetimg">
        <p className="presentation--paragraphe">
        Jeune diplômée en développement informatique en quête d’une alternance en webdesign, je souhaite mettre mon sens créatif au service de projets innovants.
        </p>
        <img src={Cellia} alt="Moi-même" className="presentation--photo" />
      </div>
      <h3 className="presentation--competences-titre">Mes compétences techniques</h3>
      <CarouselLogos />
    </div>
  );
}

export default Présentation;

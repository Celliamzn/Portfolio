
import '../styles/contact.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import CV from "../assets/data/CV_Mouzon_Cellia.pdf"
import background from "../assets/images/pexels-martinpechy-1028223.jpg"

function Contact() {
  const socials = [
    { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/cellia-mouzon-973036324' },
    { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/Celliamzn' },
    { name: 'Email', icon: <FaEnvelope />, link: 'mailto:mouzoncellia@gmail.com' },
  ];

  return (
    <div className="contact-page section contact" style={{backgroundImage : `url(${background}`}} id='contact'>
        <div className='contact-background'>
      <h2 className="contact-title">Restons connectés</h2>
      <p className="contact-description">
        Vous pouvez me trouver sur ces plateformes :
      </p>
      <div className="socials-container">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title={social.name}
          >
            <div className="social-icon">{social.icon}</div>
          </a>
          
        ))}
      </div>
         <a
      href={CV}
      target="_blank"
      rel="noopener noreferrer"
      className="cv"
    >
      Télécharger mon CV
    </a>
      <p className="contact-call-to-action">
        Suivez-moi pour découvrir mes projets et collaborations !
      </p>
      </div>
    </div>
  );
}

export default Contact;
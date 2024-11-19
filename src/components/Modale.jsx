import { useState } from 'react'
import next from '../assets/logos/next.png'
import back from '../assets/logos/back.png'
import '../styles/modale.css'

function Modale({ closeModale, pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
  }

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    )
  }

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modale-background')) {
      closeModale(false)
    }
  }

  return (
    <div className="modale-background" onClick={handleBackgroundClick}>
      <div className="modale-content">
        <button className="modale-close" onClick={() => closeModale(false)}>
          X
        </button>
        <div className="modale-image-container">
          <img
            src={pictures[currentIndex]}
            alt={`site-${currentIndex}`}
            className="modale-image"
          />
        </div>
        {pictures.length > 1 && (
          <div className="modale-navigation">
            <button className="modale-prev" onClick={handlePrevious}>
              <img src={back} alt="back" className="arrow"></img>
            </button>
            <button className="modale-next" onClick={handleNext}>
              <img src={next} alt="next" className="arrow"></img>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modale

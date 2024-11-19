import React, { useState, useEffect } from 'react'
import next from '../assets/logos/next.png'
import back from '../assets/logos/back.png'
import '../styles/carousel.css'
import Modale from './Modale'

const Carousel = ({ projets }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const totalCards = projets.length

  const updateCarouselClasses = () => {
    const updatedClasses = projets.map((_, index) => {
      const classList = []
      if (index === currentCardIndex) classList.push('active')

      const prevIndex1 = (currentCardIndex - 1 + totalCards) % totalCards
      const nextIndex1 = (currentCardIndex + 1) % totalCards
      const prevIndex2 = (currentCardIndex - 2 + totalCards) % totalCards
      const nextIndex2 = (currentCardIndex + 2) % totalCards

      if (index === prevIndex1) classList.push('prev-1')
      if (index === nextIndex1) classList.push('next-1')
      if (index === prevIndex2) classList.push('prev-2')
      if (index === nextIndex2) classList.push('next-2')

      return classList.join(' ')
    })

    return updatedClasses
  }

  const [cardClasses, setCardClasses] = useState(updateCarouselClasses)

  useEffect(() => {
    setCardClasses(updateCarouselClasses())
  }, [currentCardIndex])

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards)
  }

  const handlePrevious = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + totalCards) % totalCards
    )
  }

  const currentProject = projets[currentCardIndex]

  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div className="carousel">
        <button className="left" onClick={handlePrevious}>
          <img src={back} alt="back" className="arrow"></img>
        </button>
        <div className="carousel-cards">
          {projets.map((projet, index) => (
            <div key={index} className={`card ${cardClasses[index]}`}>
              <img
                className="card__img"
                src={projet.cover}
                alt={`${projet.title} cover`}
              />
              <div className="card-content">
                <h3>{projet.title}</h3>
                <div className="tags">
                  {projet.tags.map((t) => {
                    return <span className="tag">{t} </span>
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="right" onClick={handleNext}>
          <img src={next} alt="next" className="arrow"></img>
        </button>
      </div>
      <div className="current-project">
        <div className="présentation-active">
          <h2>{currentProject.title}</h2>
          <div className="tags-active">
            {currentProject.tags.map((tag, i) => (
              <span key={i} className="tag-active">
                {tag}
              </span>
            ))}{' '}
          </div>
          <p className="présentation">{currentProject.description}</p>
          <button
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true)
            }}
          >
            Voir plus de photos du site
          </button>
          {openModal && (
            <Modale
              closeModale={setOpenModal}
              pictures={currentProject.pictures}
            />
          )}
        </div>

        <img
          src={currentProject.picture}
          alt={`site ${currentProject.title}`}
          className="image-active"
        ></img>
      </div>
    </div>
  )
}

export default Carousel

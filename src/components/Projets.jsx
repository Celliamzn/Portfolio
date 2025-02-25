import '../styles/projets.css'
import listProjets from '../assets/data/projets.json'
import Carousel from './Carousel'
import backgroundPrésentation from "../assets/images/pexels-george-dolgikh-551816-1303092.jpg"


function Projets() {
  return (
    <div className="section projets" style={{backgroundImage : `url(${backgroundPrésentation}`}} id='gallery'>
      <h2>Mes projets</h2>
      <p className='viaOC'>(Via Openclassrooms)</p>
      <div className='card-wrap'>
       <Carousel projets={listProjets} key={listProjets.id} />
      </div>
    </div>
  )
}

export default Projets

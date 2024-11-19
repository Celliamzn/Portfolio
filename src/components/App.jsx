import Accueil from './Accueil'
import Menu from './Menu'
import Présentation from './Présentation'
import Projets from './Projets'
import Contact from './Contact'
import '../styles/App.css'
import "@fontsource/josefin-slab"



function App() {
  return (
    <div>
      <Accueil />
      <Menu />
      <Présentation />
      <Projets />
      <Contact />
    </div>
  )
}

export default App

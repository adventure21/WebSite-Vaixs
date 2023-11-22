import About from '../components/About'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Work from '../components/Work'
import Portafolio from '../components/Portafolio'
import Contact from '../components/Contact'
import Footer from "../components/Footer"

function home() {
  return (
       <div className="text-white">
    <Header></Header>
    <Intro></Intro>
    <About></About>
    <Work></Work>
    <Portafolio ></Portafolio>
    <Contact></Contact>
    <Footer></Footer>
    
    </div>
  )
}

export default home
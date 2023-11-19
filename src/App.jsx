import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Work from "./components/Work"

function App() {
  return (
    <div className="text-white">
    <Header></Header>
    <Intro></Intro>
    <About></About>
    <Work></Work>
    <Contact></Contact>
    <Footer></Footer>
    
    </div>
  )
}

export default App
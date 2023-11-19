import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Work from "./components/Work"

function App() {
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="text-white">
    <Header></Header>
    <Header onNavLinkClick={handleNavLinkClick}></Header>
    <Intro></Intro>
    <About></About>
    <Work></Work>
    <Contact></Contact>
    <Footer></Footer>
    
    </div>
  )
}

export default App
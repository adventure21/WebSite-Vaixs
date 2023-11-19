import  { useState } from 'react';

  // eslint-disable-next-line react/prop-types
const Header = ({ onNavLinkClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 fixed w-full z-50 backdrop-filter backdrop-blur-md backdrop-opacity-75">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#inicio" className="flex items-center" onClick={(e) => onNavLinkClick(e, 'inicio')}>
            <img src="http://www.vaixs.net/img/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">Vaixs</span>
          </a>
          <div className="flex items-center lg:order-2">
          <a href="#" className="text-gray-500  hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Portafolio</a>
            <a  href="#contact" onClick={(e) => onNavLinkClick(e, 'contact')} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none ">Contactanos</a>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <svg className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          
          <div className={`lg:flex w-full lg:w-auto lg:order-1 `} id="mobile-menu-2">
            <ul className={`flex ${isMenuOpen ? 'flex-col bg-opacity-50 space-y-1 h-screen mt-2 p-4 left-0 absolute w-full z-20 bg-black' : ' space-x-8 hidden lg:flex'}  mt-4 font-medium lg:flex-row lg:mt-0`}>
              <li>
                <a  href="#inicio" onClick={(e) => onNavLinkClick(e, 'inicio')} className="block border border-transparent hover:border-primary-500 py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 "  aria-current="page">Inicio</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => onNavLinkClick(e, 'about')} className="block border border-transparent hover:border-primary-500 py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 "  aria-current="page">Sobre Vaixs</a>
              </li>
              <li>
              <a  href="#work" onClick={(e) => onNavLinkClick(e, 'work')} className="block border border-transparent hover:border-primary-500 py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 " aria-current="page">Lo que hacemos</a>
              </li>
              <li>
              <a  href="#contact" onClick={(e) => onNavLinkClick(e, 'contact')} className="block border border-transparent hover:border-primary-500 py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 " aria-current="page">Hosting</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

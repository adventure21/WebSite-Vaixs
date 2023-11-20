import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookMessenger,FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <a href="#" className="flex flex-col sm:w-[40vw]">
              <span className=" text-2xl font-semibold whitespace-nowrap dark:text-white mb-4">
                Soluciones Virtuales VAIXS
              </span>
              <p className="w-full text-sm">
                Nuestra empresa esta orientada al desarrollo e implementación de
                Aplicativos Web, Diseño Web, Alquiler de Hosting y dominio en
                distintas plataformas.
              </p>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Enlaces
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-white mb-2 text-sm"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white mb-2 text-sm"
                  >
                    Sobre VAIXS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white mb-2 text-sm"
                  >
                    Lo que hacemos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white mb-2 text-sm"
                  >
                    Portafolio
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-white mb-2 text-sm"
                  >
                    Hosting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Servicios
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li>
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:text-white mb-2 text-sm "
                  >
                    Desarrollo de Apps Moviles
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:text-white mb-2 text-sm"
                  >
                    Desarrollo web
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contacto
              </h2>
              <p className="text-sm">
                <b>Nos encontramos en:</b>
                <p>Cochabamba - Vinto
<br/>
                Av. Pairumani - Calle 1

                </p>

                <p className="mt-2 text-xs">
                <b>Celular:</b> 
                <br/>
                +591 68525787

                </p>
                <p className="mt-2 text-xs">
                <b>Correo:</b>
                <br/>

                victorvirtual@gmail.com.com
                </p>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © Copyright Soluciones Virtuales
            <b> VAIXS</b>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
          <a
              href="https://api.whatsapp.com/send/?phone=%2B59168525787&text&type=phone_number&app_absent=0"
              className="text-gray-500 text-[18px] hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <RiWhatsappFill></RiWhatsappFill>
            </a>
            <a
              href="https://www.facebook.com/VaixsEducacion/"
              className="text-gray-500 text-[18px] hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaFacebook></FaFacebook>
            </a>


            <a
              href="https://www.facebook.com/messages/t/113296350403789"
              className="text-gray-500 text-[18px] hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaFacebookMessenger></FaFacebookMessenger>
            </a>
            <a
              href="mailto:victorvirtual@gmail.com?Subject=Hola%20Vaixs"
              className="text-gray-500 hover:text-gray-900 text-[18px] dark:hover:text-white ms-5"
            >
              <MdEmail></MdEmail>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
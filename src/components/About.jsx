function About() {
  return (
    <div id="about" className="relative mt-[150px] sm:h-screen bg-white text-black py-[50px]">
    <div className="relative mt-[0px]" ></div>
      <div className="relative z-20 px-5 ">
            <h1 className="text-primary-600 pt-[50px] font-bold text-center text-[50px]">
              Sobre VAIXS
            </h1>
            <div className="flex justify-center">
              <div className=" w-[200px] h-[3px] mb-[100px] bg-primary-500"></div>

            </div>
            
        <div className="sm:flex w-full justify-between items-center">

          <div className="sm:ml-[50px]">

            <p className="sm:w-[40vw] w-full text-center text-lg bg-black bg-opacity-10 p-5  shadow-lg rounded-lg">
              {" "}
              VAIXS Soluciones Virtuales inicia sus actividades en la ciudad de
              Cochabamba, en Agosto 2012, al servicio de incorporar nuevas
              tecnologías de información y comunicación en el sector
              empresarial. Somos una empresa con una política de precio
              razonable, quienes nos eligen cuentan con un funcionario más de su
              empresa, comprometidos con el cumplimiento de sus planes y
              objetivos de su empresa. Nuestra empresa está orientada al
              desarrollo e implementación de Aplicativos Web, Diseño Web,
              Alquiler de Hosting y dominio en distintas plataformas.
            </p>
          </div>
          <img
            src="http://www.vaixs.net/img/img2.png"
            width={550}
            height={150}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
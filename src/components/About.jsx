function About() {
  return (
    <div className="relative pt-[100px]">
    <div className="relative pt-[100px]" id="about"></div>
      <div className="relative z-20 px-5 ">
        <div className="sm:flex w-full justify-between">
          <div>
            <p className="text-gray-600 ">*/*</p>
            <h1 className="text-primary-600 font-bold text-[50px]">
              Sobre VAIXS
            </h1>
            <p className="text-gray-600 ">*/*</p>
            <p className="sm:w-[40vw] w-full">
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
            className="sm:pt-[250px] pt-5"
            width={550}
            height={150}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;

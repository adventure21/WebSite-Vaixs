function Portafolio() {
  const logos = [
    'http://www.vaixs.net/img/SededeCBBA.png',
    'http://www.vaixs.net/img/GAMVinto.jpeg',
    'http://www.vaixs.net/img/SIMGES.jpg',
    'http://www.vaixs.net/img/sedesCBBA.jpg',
    'http://www.vaixs.net/img/GAMEntreRios.png',
    'http://www.vaixs.net/img/SANTA-ISABEL.png',
  ];

  return (
    <div className="w-full py-8 pt-[100px] sm:h-screen  bg-white" id="portafolio">
            <h1 className="text-primary-600 w-full font-bold  text-[50px] text-center">
                Nuestros clientes
            </h1>
                        <div className="flex justify-center">
            <div className=" w-[200px] h-[3px] mb-[20px] bg-primary-500"></div>

          </div>
      <div className="flex flex-wrap justify-center items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-full sm:mx-3  mt-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 overflow-hidden relative group bg-white bg-opacity-80"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="object-contain w-full h-auto md:h-full transition-transform group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portafolio;
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
      <div className="container mx-auto py-8 px-5 sm:pt-[120px]" id="portafolio">
              <p className="text-gray-600 ">*/*</p>
              <h1 className="text-primary-600 font-bold text-center sm:text-start text-[50px]">
                  Nuestros clientes
              </h1>
              <p className="text-gray-600 ">*/*</p>
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
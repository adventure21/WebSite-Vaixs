import Card from "./common/card";

function Work() {
  return (
    <div id="work" className="relative pt-[100px]">
      <div className="relative z-20 px-5 ">
        <div className="">
          <div>
            <p className="text-gray-600 ">*/*</p>

            <h1 className="text-primary-600 text-center sm:text-left font-bold text-[50px]">
              Lo que hacemos
            </h1>
            <p className="text-gray-600 ">*/*</p>
            <p className="w-[50vw]">Desarrollamos sistemas a la medida siguiendo estrictos estándares de calidad. Nuestras aplicaciones son escalables, robustas y fáciles de usar, y trabajamos solo con las principales tecnologías acorde a las necesidades de cada proyecto</p>
          </div>

          {/* contenido de las cards */}
          <div className="flex flex-wrap  space-x-5 pt-[100px]">
            <Card
              title="Desarrollo de apps moviles"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
              imageUrl="https://png.pngtree.com/thumb_back/fw800/background/20230716/pngtree-portfolio-displays-and-mobile-apps-with-3d-shapes-chat-messages-and-image_3879137.jpg"
              tags={["#Flutter", "#React Native", "#Ionic"]}
            />
                        <Card
              title="Desarrollo web"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
              imageUrl="https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg"
              tags={["#Angular"]}
            />
            

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;

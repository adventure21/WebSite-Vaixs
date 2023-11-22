import Card from "./common/card";
import { FaComputer } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaSourcetree } from "react-icons/fa";
import { MdOutlineWbCloudy } from "react-icons/md";
import { FaRegFileCode } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
function Work() {
  return (
    <div id="work" className="relative pt-[100px] bg-[#161f28] pb-[100px]">
      <div className="relative z-20 px-5 ">
        <div className="">
          <div className="text-center">

            <h1 className="text-primary-600 text-center sm:text-center font-bold text-[50px]">
              Lo que hacemos
            </h1>
            <div className="flex justify-center">
              <div className=" w-[200px] h-[3px] mb-[20px] bg-primary-500"></div>

            </div>
            <p className="sm:w-full text-center">Desarrollamos sistemas a la medida siguiendo estrictos estándares de calidad. Nuestras aplicaciones son escalables, robustas y fáciles de usar, y trabajamos solo con las principales tecnologías acorde a las necesidades de cada proyecto</p>
          </div>

          {/* contenido de las cards */}
          <div className="flex flex-wrap justify-center  pt-[50px]">

            <Card
              icon={< FaMobileAlt/>}
              title="Desarrollo de apps moviles"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
            />
                        <Card
              icon={< FaComputer/>}

              title="Desarrollo de apps moviles"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
            />
                        <Card
                        icon={<TbWorld></TbWorld>}
              title="Desarrollo de apps moviles"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. M aneja el mundo desde tus manos."
            />
                        <Card
                        icon={<MdOutlineWbCloudy></MdOutlineWbCloudy>}
              title="Desarrollo de apps moviles"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
            />
                        <Card
                        icon={<FaSourcetree></FaSourcetree>}
              title="Desarrollo de apps moviles"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
            />

                        <Card
                        icon={<FaRegFileCode />}
              title="Desarrollo web"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
            />
                                    <Card
                        icon={<CiServer />}
              title="Desarrollo web"
              description="Sistemas para todo tipo de dispositivos y plataformas móviles. Maneja el mundo desde tus manos."
            />
            

          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
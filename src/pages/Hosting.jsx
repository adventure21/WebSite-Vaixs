import { FaWindows } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import Header from "../components/Header";

function Hosting() {
  return (
    <>
    <Header></Header>
    <div
      id="about"
      className="relative pt-[100px]  pb-[200px] bg-white text-black"
    >
      <div className="relative "></div>
      <div className="relative z-20  ">
        <h1 className=" pt-[50px] font-bold text-center text-[30px]">
          Planes de Hosting para tus necesidades
        </h1>
        <div className="flex justify-center">
          <div className=" w-[200px] h-[3px] mb-[100px] bg-primary-500"></div>
        </div>

        <div className="sm:flex w-full justify-around">
          <div className="flex justify-center items-center">
            <div className="space-y-5 px-[50px] border pb-[20px] flex flex-col items-center border-primary-600 pt-[20px] rounded-lg shadow-lg shadow-primary-500">
              <h1 className="font-bold text-center text-2xl flex w-[250px]">
              <FaLinux  className="mr-1" /> Hosting LINUX Ilimitado</h1>
              <br />

              <p className="text-lg">
                <b className="text-red-500">1200Bs</b>
                /Anual
              </p>

              <p>Ilimitado Espacio en Disco</p>
              <p>Dominio .com .net Gratis</p>
              <p>Correo Corporativo Ilimitado</p>
              <p>Outlook - Webmail - Gmail</p>
              <p>Ilimitado Espacio en Disco</p>
              <p>Dominios Alojados 1</p>
              <p>Subdominios Alojados 100</p>
              <p>Tráfico Mensual Ilimitado</p>
              <p>Cuentas FTP Ilimitado</p>
              <p>Redireccionamiento de Email</p>
              <p>Filtro Anti-Spam</p>
              <p>Listas de Correo</p>
              <p>Bases de Datos MySQL Ilimitado</p>
              <p>PhpMyAdmin</p>
              <p>Conexion a Internet 10Gbits/
                <br/>
                Seg DS3, OC3, OC12</p>
              <button className="bg-primary-500 text-white py-5 mt-[20px] rounded-md px-4">
                Comprar hosting
              </button>
            </div>
          </div>
          <div className="flex  justify-center items-center">
            <div className="px-[50px] space-y-5 border pb-[10px] flex flex-col items-center border-primary-600 pt-[20px] rounded-lg shadow-lg shadow-primary-500">
              <h1 className="font-bold text-center text-2xl flex w-[250px]">

              <FaWindows className="mr-1" /> Hosting WINDOWS Ilimitado</h1>
              <br />

              <p className="text-lg">
                <b className="text-red-500">1200Bs</b>
                /Anual
              </p>

              <p>Ilimitado Espacio en Disco</p>
              <p>Dominio .com .net Gratis</p>
              <p>Correo Corporativo Ilimitado</p>
              <p>Outlook - Webmail - Gmail</p>
              <p>Ilimitado Espacio en Disco</p>
              <p>Dominios Alojados 1</p>
              <p>Subdominios Alojados 100</p>
              <p>Tráfico Mensual Ilimitado</p>
              <p>Cuentas FTP Ilimitado</p>
              <p>Redireccionamiento de Email</p>
              <p>Filtro Anti-Spam</p>
              <p>Listas de Correo</p>
              <p>Bases de Datos MySQL Ilimitado</p>
              <p>PhpMyAdmin</p>
              <p>Conexion a Internet 
                
              <br/>
                10Gbits/Seg DS3, OC3, OC12</p>
              <button className="bg-primary-500 text-white py-5 mt-[20px] rounded-md px-4">
                Comprar hosting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
}

export default Hosting;

import Particle from './Particle';
import fondoImg from './../assets/fondo.png';

function Intro() {
  return (
    <div id='inicio' className='text-white pt-[150px]'>
      <Particle />
      <div className='flex sm:flex-row flex-col justify-center sm:justify-start px-5 items-center'>
      <img src={fondoImg} className="shadow-white" alt="Fondo" />
      <div>
      <p className='text-[50px] font-bold '>Bienvenidos a VAIXS</p>
      <p className='text-[20px] '>Olvidate de lo imposible</p>
      <p className='text-[10px] text-gray-300'>Somos tu solución / Somos Vaixs</p>
      <br></br>
      <a href="#" className="text-primary-600 border border-primary-600 hover:border-primary-800  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Contactanos</a>

      </div>
      
      </div>


    </div>
  );
}

export default Intro;

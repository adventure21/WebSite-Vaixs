import { useState } from 'react';
import mapa from "./../assets/mapa2.png";

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    motivo: '',
    mensaje: '',
  });

  const enviarMensaje = () => {
    const mensaje = `Correo: ${formData.email}%0A%0A${formData.motivo}%0A%0A${formData.mensaje}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=+59168525787&text=${mensaje}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enviarMensaje();
  };

  return (
    <div className="relative pt-[100px]">
    <div id="contact" className="relative pt-[100px]">
      <div className="relative z-20 px-5 ">
        <div className="sm:flex w-full justify-between">
          <div className="flex flex-col justify-center w-full px-10">
            <p className="text-gray-600 ">*/*</p>
            </div>
            <h1 className="text-primary-600 font-bold text-[50px]">
              Contactanos
            </h1>
            <p className="text-gray-600 ">*/*</p>

            <form onSubmit={handleSubmit} className="space-y-8 pt-[100px]">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Correo electronico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="nombre@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Motivo
                </label>
                <input
                  type="text"
                  id="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  className="block p-3 w-full text-sm text-gray-900  rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Permítenos saber en qué te podemos ayudar"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tu mensaje aqui"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="border py-3 px-5 text-sm font-medium text-center text-primary-600 rounded-lg border-primary-700 sm:w-fit hover:border-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
          <img
            src={mapa}
            className="sm:pt-[250px] pt-5 pb-[100px]"
            width={550}
            height={150}
            alt="Mapa"
            />
        </div>
      </div>
    </div>
  );
}

export default Contact;

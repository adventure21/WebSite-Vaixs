import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    motivo: "",
    mensaje: "",
  });

  const enviarMensaje = () => {
    const mensaje = `Correo: ${formData.email}%0A%0A${formData.motivo}%0A%0A${formData.mensaje}`;
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=+59168525787&text=${mensaje}`;
    window.open(whatsappUrl, "_blank");
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
    <div id="contact" className="relative pt-[100px] mb-[100px]">
      <div className="relative z-20 px-5 ">
        <div className="sm:flex w-full justify-between">
          <div className="flex flex-col justify-center w-full sm:px-10">
            <p className="text-gray-600 ">*/*</p>
            <h1 className="text-primary-600 text-center sm:text-start font-bold text-[50px]">
              Contactanos
            </h1>
            <p className="text-gray-600 ">*/*</p>
            <form onSubmit={handleSubmit} className="space-y-8 pt-[10px]">
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
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
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
          <div className="sm:mt-[200px] mt-[20px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d951.878712580787!2d-66.3168346036149!3d-17.387062780389368!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sbo!4v1700338031046!5m2!1ses!2sbo"
              allowFullScreen=""
              loading="lazy"
              className="sm:w-[600px] w-full h-[450px]"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
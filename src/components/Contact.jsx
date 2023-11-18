import mapa from "./../assets/mapa2.png";
function Contact() {
  return (
    <div className="relative pt-[100px]">
      <div className="relative z-20 px-5 ">
        <div className="sm:flex w-full justify-between">
          <div className="flex flex-col justify-center w-full px-10">
            <p className="text-gray-600 ">*/*</p>

            <h1 className="text-primary-600 font-bold text-[50px]">
              Contactanos
            </h1>
            <p className="text-gray-600 ">*/*</p>

            <form action="#" className="space-y-8 pt-[100px]">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Correo electronico
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="nombre@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Motivo
                </label>
                <input
                  type="text"
                  id="Motivo"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Permítenos saber en qué te podemos ayudar"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tu mensaje aqui"
                ></textarea>
              </div>
              <button
                type="submit"
                className="border py-3 px-5 text-sm font-medium text-center text-primary-600 rounded-lg border-primary-700 sm:w-fit hover:border-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 "
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          <img
            src={mapa}
            className="sm:pt-[250px] pt-5 pb-[100px]"
            width={550}
            height={150}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Contact;

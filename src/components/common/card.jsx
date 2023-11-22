const Card = ({ title, description, icon }) => {
  return (
    <div className="mt-[20px] mx-[10px] max-w-sm h-[300px] rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-10 ">
      <div className="px-6 py-4">
        <div className="text-[60px] my-[20px] text-primary-500">
          {icon}
        </div>
        <div className="">
          <div className="font-bold text-xl mb-2 border border-b-2 border-transparent text-primary-500">
            {title}
          </div>
          <div className=" w-full h-[3px] mb-[20px] bg-primary-500"></div>
          <p className="text-gray-100 text-sm">
            {description}
          </p>
        </div>

      </div>


    </div>
  );
};

export default Card;
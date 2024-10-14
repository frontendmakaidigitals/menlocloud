import React from "react";

const Card = () => {
  return (
    <section className="my-28">
      <div className="w-full global-container lg:w-2/3 flex flex-col justify-center items-center">
        <p className="global-container text-3xl lg:text-6xl font-Satoshi font-[600] text-center">
          Industry
          <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
            {" "}
            Challenges{" "}
          </span>
          and
          <span className="bg-gradient-to-r  font-Telma px-1 from-blue-600 to-indigo-400 bg-clip-text text-transparent">
            {" "}
            Solutions{" "}
          </span>
        </p>
      </div>

      <div className="global-container grid place-items-center grid-cols-1 gap-x-7 gap-y-10 lg:grid-cols-2 xl:grid-cols-4">
        <AnimatePresence mode="wait">
          {Aiservices.map((service, index) => (
            <motion.div
              key={index}
              style={{ backgroundColor: service?.color }}
              className="mt-10 border-[10px] cursor-pointer border-gray-200 group  rounded-2xl w-full  h-[430px]  relative overflow-hidden"
            >
              <div className="size-36   absolute top-16 -translate-x-1/2 left-1/2 -translate-y-0">
                <img className="w-full" src={service.img} />
              </div>
              <div className="size-4 group-hover:scale-[80] xxl:group-hover:scale-[110]  absolute transition-all duration-700  -top-4 -left-4 bg-gray-200 rounded-full"></div>
              <div className="size-3 group-hover:scale-[90] xxl:group-hover:scale-[120] absolute transition-all duration-700 -top-4 -left-4 bg-white delay-200 rounded-full"></div>
              <div className="w-full relative   z-10 h-full flex py-5 px-5 flex-col justify-end items-start">
                <motion.div>
                  <p className=" text-2xl pr-8 font-bold font-Satoshi leading-snug group-hover:text-gray-900 transition-all duration-500 text-gray-100">
                    {service.name}
                  </p>
                  <p className="text-sm font-Satoshi font-semibold text-gray-100 group-hover:text-gray-800">
                    {service.description}?
                  </p>
                </motion.div>

                <div className="w-full flex justify-between items-center">
                  <button
                    onClick={() => setisOpen(true)}
                    className="px-4 bg-lime-300 py-2 font-Satoshi font-semibold text-sm mt-2   rounded-full"
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Card;

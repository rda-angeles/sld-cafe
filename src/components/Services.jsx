import React from "react";
import { servicesInfo, servicesIcons } from "../assets/data";

const Services = () => {
  return (
    <div className=" lg:py-12">
      <div className="max-w-5xl mx-auto items-center flex flex-col lg:flex-row text-c-black text-center md:text-left md:mt-12 ">
        {/* Icons */}
        <div className="order-2  p-5 bg-c-primary w-full text-c-white flex flex-wrap justify-center ">
          {servicesIcons.map((icons) => (
            <div className="max-w-sm flex flex-col items-center text-center bg-c-white text-c-black p-3 rounded-md m-2 md:w-[45%] cursor-pointer hover:translate-y-[-4%] duration-200">
              <span>{icons.icon}</span>
              <h2 className="font-bold text-lg mt-2">{icons.service}</h2>
              <p className="text-sm py-6">{icons.desc}</p>
            </div>
          ))}
        </div>

        {/* content */}
        <div className="my-8 max-w-lg px-5 text-center lg:mb-0 order-1 md:mt-0  lg:text-left">
          {servicesInfo.map((info) => (
            <>
              <h5 className="text-sm uppercase mb-2 opacity-[.6] relative title-snippet mx-auto md:mx-0 before:bg-c-black">
                {info.titleSnippet}
              </h5>

              <h1 className="font-secondary text-4xl mb-3 capitalize lg:text-5xl">
                {info.headline}
              </h1>
              <p>{info.info}</p>
              <button className="group rounded-md mt-4 py-2 px-5 shadow-md shadow-c-secondary flex items-center duration-300 bg-c-primary text-c-white mx-auto hover:bg-c-secondary lg:mx-0">
                Read More
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

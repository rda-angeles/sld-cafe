import React from "react";
import Logo from "../assets/sld-cafe-logo.png";
import { BsChevronRight } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="w-full h-screen hero-section relative text-c-white">
      {/* Content wrapper */}
      <div className="text-center max-w-xl absolute top-[50%] left-[7%]  translate-x-[-7%] translate-y-[-50%]  z-10 px-3 md:text-left lg:left-[10%] lg:translate-x-[-10%]">
        {/* Logo wrapper */}
        {/* mt-[-12rem] */}
        {/* mt-[-2rem] */}
        <div className=" ">
          {/* <img src={Logo} className="w-[30rem] mx-auto" alt="" /> */}
          <h1 className="font-secondary text-6xl lg:text-7xl">
            We don't make your coffee. We make your day.
          </h1>
        </div>

        {/* Contents */}
        <p className="py-7 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          consequatur expedita facilis sed quia repellat porro dolorum magni
          fugiat veritatis.
        </p>

        <div className="flex justify-center md:justify-start">
          <button className="group rounded-md py-3 px-5 border-[.1rem] border-c-white border-solid flex items-center duration-300 hover:bg-c-primary font-bold hover:border-c-primary">
            Learn More
            <span className="ml-2 group-hover:rotate-90 duration-300">
              <BsChevronRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

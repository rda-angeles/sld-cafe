import React from "react";
import Logo from "../assets/sld-cafe-logo.png";
import { BsChevronDown } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="w-full h-screen hero-section relative">
      {/* Content wrapper */}
      <div className="container mx-auto text-center max-w-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 px-3">
        <div className="mt-[-12rem] ">
          <img src={Logo} className="w-[30rem] mx-auto" alt="" />
          <h1 className="font-secondary text-5xl mt-[-2rem] lg:text-6xl">
            Siroter Le Délicieux Café
          </h1>
        </div>
        <p className="py-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          consequatur expedita facilis sed quia repellat porro dolorum magni
          fugiat veritatis.
        </p>
        <button className="group rounded-md py-3 px-5 mx-auto flex items-center duration-300">
          <span className="ml-2 group-hover:translate-y-[20%] duration-300">
            <BsChevronDown size={30} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;

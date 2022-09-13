import React from "react";
import { aboutInfo } from "../assets/data";
import Logo from "../assets/sld-cafe-logo-v1.png";
const About = () => {
  return (
    <div className="bg-c-quarternary px-4 py-12">
      {/* Content-Wrapper */}
      <div className="max-w-5xl mx-auto py-10 px-5 flex flex-col items-center md:flex-row text-c-black text-center md:text-left ">
        {/* Image */}
        <div className="rounded-full bg-c-black max-w-xs md:w-[18rem] shadow-lg shadow-c-primary mx-auto">
          <img src={Logo} className="ml-2" alt="" />
        </div>
        {/* content */}
        <div className="mt-8 md:w-[50%]">
          {aboutInfo.map((info) => (
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

export default About;

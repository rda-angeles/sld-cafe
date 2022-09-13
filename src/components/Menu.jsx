import React from "react";
import { menuInfo, popularMenus } from "../assets/data";
const Menu = () => {
  return (
    <div className="bg-c-secondary text-c-white px-4 py-12">
      {/* Content Wrapper */}
      <div className="max-w-5xl mx-auto  ">
        {/* content -- headline*/}
        <div className="my-8 max-w-lg mx-auto px-5 text-center lg:mb-0 order-1 md:mt-0">
          {menuInfo.map((info) => (
            <>
              <h5 className="text-sm uppercase mb-2 opacity-[.6] relative title-snippet mx-auto md:mx-0 before:bg-c-white">
                {info.titleSnippet}
              </h5>

              <h1 className="font-secondary text-4xl mb-3 capitalize lg:text-5xl">
                {info.headline}
              </h1>
              <p>{info.info}</p>
            </>
          ))}
        </div>

        {/* Popular Menus */}
        <div className="text-center mt-8 text-c-black ">
          {/* Headline */}
          <div>
            <h1 className="font-bold text-xl">Popular Menus</h1>
          </div>

          {/* Menus */}
          <div className="flex flex-wrap">
            {popularMenus.map((menu) => (
              <div className="bg-c-white rounded-md m-3 h-[40rem]">
                {/* Image wrapper */}
                <div className="w-full h-[10rem] ">
                  <img src={menu.img} className="object-cover" alt="" />
                </div>

                {/* Menu Content */}
                <div className="h-20 p-4">
                  <h2>{menu.menu}</h2>
                  <h4>{menu.shortDesc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

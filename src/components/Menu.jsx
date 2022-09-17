import React from "react";
import { menuInfo, popularMenus,todaySpecial } from "../assets/data";
import { BsChevronRight } from "react-icons/bs";
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
            <h1 className="font-bold text-xl text-c-white text-center md:text-left mb-2">Popular Menus</h1>
          </div>

          {/* Menus */}
          <div className="flex flex-col md:flex-row">
            {popularMenus.map((menu) => (
              <div className="bg-c-white rounded-md m-3 max-w-lg md:w-[15rem] lg:w-[20rem] mx-auto">
                {/* Image wrapper */}
                <div className="w-full h-[22rem] md:h-[17rem] lg:h-[20rem]">
                  <img
                    src={menu.img}
                    className="object-cover w-full h-full rounded-tr-md rounded-tl-md"
                    alt=""
                  />
                </div>

                {/* Menu Content */}
                <div className=" p-4">
                  <h2 className="font-bold font-secondary text-2xl">
                    {menu.menu}
                  </h2>
                  <p className="text-sm py-4">{menu.shortDesc}</p>

                  <div>
                    <button className="group rounded-md py-3 px-5 border-[.1rem] border-c-white border-solid flex bg-c-tertiary items-center duration-300 mx-auto hover:bg-c-primary font-bold hover:border-c-primary hover:text-c-white ">
                      Order Now
                      <span className="ml-2 group-hover:rotate-90 duration-300">
                        <BsChevronRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today Specials */}
        <div className="text-center mt-8 text-c-black ">
          {/* Headline */}
          <div>
            <h1 className="font-bold text-xl text-c-white text-center md:text-left mb-2">Today's Special</h1>
          </div>

          {/* Menus */}
          <div className="flex flex-wrap">
            {todaySpecial.map((menu) => (
              <div className="bg-c-white rounded-md m-3 max-w-lg md:w-[15rem] lg:w-[20rem] mx-auto">
                {/* Image wrapper */}
                <div className="w-full h-[22rem] md:h-[17rem] lg:h-[20rem]">
                  <img
                    src={menu.img}
                    className="object-cover w-full h-full rounded-tr-md rounded-tl-md"
                    alt=""
                  />
                </div>

                {/* Menu Content */}
                <div className="p-4">
                  <h2 className="font-bold font-secondary text-2xl">
                    {menu.menu}
                  </h2>
                  <p className="text-sm py-4">{menu.shortDesc}</p>

                  <div>
                    <button className="group rounded-md py-3 px-5 border-[.1rem] border-c-white border-solid flex bg-c-tertiary items-center duration-300 mx-auto hover:bg-c-primary font-bold hover:border-c-primary hover:text-c-white ">
                      Order Now
                      <span className="ml-2 group-hover:rotate-90 duration-300">
                        <BsChevronRight />
                      </span>
                    </button>
                  </div>
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

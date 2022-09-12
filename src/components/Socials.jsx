import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

function Socials() {
  const socials = [
    {
      id: 1,
      child: (
        <>
          Facebook
          <FaFacebook color="#2C3333" size={25} />
        </>
      ),
      link: "https://www.facebook.com/NikkoAquinoAngeles",
    },
    {
      id: 2,
      child: (
        <>
          Instagram
          <FaInstagram color="#2C3333" size={25} />
        </>
      ),
      link: "#",
    },
    {
      id: 3,
      child: (
        <>
          Instagram
          <FaYoutube color="#2C3333" size={25} />
        </>
      ),
      link: "#",
    },
    {
      id: 4,
      child: (
        <>
          Instagram
          <FaTiktok color="#2C3333" size={25} />
        </>
      ),
      link: "#",
    },
  ];
  return (
    <div className="fixed top-[40%] left-0 flex flex-col">
      <ul>
        {socials.map((social) => (
          <li
            key={social.id}
            className="hidden justify-between items-center w-[9.5rem] h-12 bg-c-primary pl-5 pr-4 rounded-lg duration-300 cursor-pointer ml-[-100px] hover:ml-[-10px] border-b-[2px] border-c-primary mb-[.3rem] lg:flex"
          >
            <a
              href={social.link}
              className="w-full flex justify-between items-center text-sm text-c-white"
            >
              {social.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Socials;

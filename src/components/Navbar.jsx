import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const links = [
    {
      id: 1,
      text: "about",
    },
    {
      id: 2,
      text: "services",
    },
    {
      id: 3,
      text: "menu",
    },
    {
      id: 4,
      text: "contact",
    },
  ];

  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#222831") : setNavColor("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    // Navbar Wrapper
    <div
      className=" fixed flex justify-between items-center w-full h-20 px-4 z-30 text-c-white"
      style={{ backgroundColor: navColor, transition: "all .3s" }}
    >
      {/* Medium to Larger Device */}

      <div className="flex justify-between items-center w-full mx-auto container max-w-7xl">
        {/* Logo/Name */}
        <div className="logo w-[8rem] h-[100%] cursor-pointer">
          <p className="text-center font-secondary text-xl">
            Siroter Le Délicieux Café
          </p>
        </div>
        {/* Links */}
        <ul className="nav-links hidden md:flex">
          {links.map(({ id, text }) => (
            <li key={id} className="px-4 text-sm uppercase cursor-pointer">
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu -- Smaller Device */}
      <div
        className="mobile-menu cursor-pointer z-10 md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-primary flex justify-center items-center flex-col">
          {links.map(({ id, text }) => (
            <li key={id} className="py-6 capitalize cursor-pointer text-3xl">
              {text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;

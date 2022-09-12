import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const links = [
    {
      id: 1,
      text: "about",
    },
    {
      id: 2,
      text: "projects",
    },
    {
      id: 3,
      text: "experience",
    },
    {
      id: 4,
      text: "contact",
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    // Navbar Wrapper
    <div className=" fixed flex justify-between items-center w-full z-30 h-20 border-solid border-b-[.1rem] border-c-white">
      <div className="flex justify-between items-center w-full bg-transparent container mx-auto">
        {/* Logo/Name */}
        <div className="logo w-[8rem] h-[100%] cursor-pointer">
          <p className="text-center font-secondary text-xl">
            Siroter Le Délicieux Café
          </p>
        </div>

        <div
          className="mobile-menu cursor-pointer z-10"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile menu link */}
      {nav && (
        <ul className="w-full h-screen absolute top-0 left-0 bg-c-quarternary flex justify-center items-center flex-col">
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

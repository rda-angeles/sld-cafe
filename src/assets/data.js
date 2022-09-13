import { FaWifi, FaMusic } from "react-icons/fa";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { GiSlicedBread } from "react-icons/gi";
import Cappuccino from "./capuccino.jpg";
import Latte from "./latte.jpg";
import NikkoSpecial from "./nikko-special.jpg";
import LordSpecial from "./lord-special.jpg";
import ReaSpecial from "./rea-special.jpg";
import RobertSpecial from "./robert-special.jpg";

export const aboutInfo = [
  {
    id: 1,
    titleSnippet: "Our Story",
    headline: "Who are we?",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, suscipit praesentium ex consequatur quae unde earum dolore maxime, soluta rem eligendi dolores. Expedita, praesentium repellendus?",
  },
];
export const servicesInfo = [
  {
    id: 1,
    titleSnippet: "Our Services",
    headline: "Why choose us?",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, suscipit praesentium ex consequatur quae unde earum dolore maxime, soluta rem eligendi dolores. Expedita, praesentium repellendus?",
  },
];

export const servicesIcons = [
  {
    id: 1,
    service: "Wifi",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <FaWifi size={40} />
      </>
    ),
  },
  {
    id: 1,
    service: "Beverages",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <MdEmojiFoodBeverage size={40} />
      </>
    ),
  },
  {
    id: 1,
    service: "Food",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <FaMusic size={40} />
      </>
    ),
  },
  {
    id: 1,
    service: "Pastries",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur amet totam minima? Vitae, nemo quo!",
    icon: (
      <>
        <GiSlicedBread size={40} />
      </>
    ),
  },
];

export const menuInfo = [
  {
    id: 1,
    titleSnippet: "Our Menu",
    headline: "What we offer?",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, suscipit praesentium ex consequatur quae unde earum dolore.",
  },
];

export const popularMenus = [
  {
    id: 1,
    menu: "Cappuccino",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque. ",
    price: "180php",
    img: `${Cappuccino}`,
  },
  {
    id: 2,
    menu: "Nikko's Special Coffee ",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque. ",
    price: "250php",
    img: `${NikkoSpecial}`,
  },
  {
    id: 3,
    menu: "Lord's Special Coffee",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque. ",
    price: "250php",
    img: `${LordSpecial}`,
  },
  {
    id: 4,
    menu: "Rea's Special Coffee",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque. ",
    price: "100php",
    img: `${ReaSpecial}`,
  },
  {
    id: 5,
    menu: "Robert's Special Coffee",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque. ",
    price: "250php",
    img: `${RobertSpecial}`,
  },
  {
    id: 5,
    menu: "Hot Latte",
    shortDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, neque. ",
    price: "180php",
    img: `${Latte}`,
  },
];

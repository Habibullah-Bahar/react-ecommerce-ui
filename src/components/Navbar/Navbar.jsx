import React from "react";
import Logo from "../../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import Darkmode from "./Darkmode";
import { FaCaretDown } from "react-icons/fa";

const Navbar = ({ handleOrderPopup }) => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Mens wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    },
  ];
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 ">
      {/* upperNavbar */}
      <div className="bg-primary/70 py-2 px-3 md:px-4 lg:px-5">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* searchbar*/}
          <div
            data-aos="zoom-in"
            className="flex justify-between items-center gap-4"
          >
            <div className="group relative sm:block">
              <input
                type="text"
                placeholder="search"
                className="placeholder:opacity-0 sm:placeholder:opacity-100 w-[40px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 px-2 py-1 rounded-full border border-gray-300 focus:outline-none focus:border-1 focus:border-primary bg-white text-black shadow-md "
              />
              <IoSearchSharp className="text-gray-400 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2" />
            </div>
            {/* order-btn */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 cursor-pointer group shadow-sm"
            >
              <span className=" group-hover:block transition-all duration-200">
                Order
              </span>
              <LuShoppingCart className="text-white text-xl drop-shadow-sm cursor-pointer" />
            </button>

            {/* darkMode */}

            <div>
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
      {/* lowerNavbar */}
      <div className="flex justify-center bg-white text-black dark:bg-gray-800 dark:text-white">
        <ul className="sm:flex hidden items-center gap-4 ">
          {Menu.map((data) => (
            <li key={data.id} data-aos="zoom-in">
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary transition-all duration-200"
              >
                {" "}
                {data.name}{" "}
              </a>
            </li>
          ))}
          {/* otherbtn */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2 ">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-400 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-m dark:bg-gray-800 dark:text-white">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/40"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

//50:00 mins

import React, { useState } from "react";
import { Link } from "react-router-dom";
import gs1logo from "./images/gs1logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const TopBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div className="md:hidden block">
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <img src={gs1logo} alt="gs1logo" className="w-[109px]  h-[73px]" />
        </Link>

        {!navbarOpen && (
          <AiOutlineMenu
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-[#F26334] text-3xl cursor-pointer"
          />
        )}
      </div>
      <div
        className={
          navbarOpen
            ? "sm:hidden absolute text-black top-0 right-0 left-0 bottom-0  z-10 h-[45%]  w-full bg-white/90  duration-300 ease-in-out"
            : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen   duration-300 ease-in-out"
        }
      >
        <p
          className="text-end text-5xl cursor-pointer p-4"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          X
        </p>
        <ul
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="flex  justify-center items-center flex-col"
        >
          <Link to="/" className="p-4 text-xl hover:text-gray-500">
            <li>Home</li>
          </Link>
          <Link to="/services" className="p-4 text-xl hover:text-gray-500">
            <li>Our services</li>
          </Link>
          <Link to="/" className="p-4 text-xl hover:text-gray-500">
            <li>Membership</li>
          </Link>
          <Link to="/sectors" className="p-4 text-xl hover:text-gray-500">
            <li>Gs1 sectors</li>
          </Link>
          <Link to="/" className="p-4 text-xl hover:text-gray-500">
            <li>Resources</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;

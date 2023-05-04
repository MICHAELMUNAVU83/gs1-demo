import React from "react";
import gs1logo from "./images/gs1logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import copyright from "./images/copyright.png";
const SideBar = () => {
  return (
    <div className="w-[244px] fixed p-4 flex flex-col justify-between  h-[100vh] ">
      <img src={gs1logo} alt="gs1logo" className="w-[109px]  h-[73px]" />
      <div className="w-80% mx-auto">
        <h1 className="text-2xl mt-8 font-bold">Welcome, User</h1>
        <div className="flex justify-between">
          <p className="text-[#F26334]">Sign Up</p>
          <p>|</p>

          <p className="text-[#002C6C]">Sign In</p>
        </div>
        <div className="uppercase mt-16 gap-4 flex flex-col text-[20px] leading-[17px] ">
          <p className="my-2 cursor-pointer hover:scale-105 transition ease-in-out duration-300">
            Home
          </p>
          <p className="my-2 cursor-pointer   hover:scale-105 transition ease-in-out duration-300">
            About us
          </p>
          <p className="my-2  cursor-pointer  hover:scale-105 transition ease-in-out duration-300">
            Our services
          </p>
          <p className="my-2  cursor-pointer hover:scale-105 transition ease-in-out duration-300">
            Membership
          </p>
          <p className="my-2   hover:scale-105 transition ease-in-out duration-300  cursor-pointer">
            Gs1 Sectors
          </p>
          <p className="my-2 cursor-pointer hover:scale-105 transition ease-in-out duration-300">
            Resources
          </p>
          <p className="my-2 cursor-pointer hover:scale-105 transition ease-in-out duration-300">
            verify product
          </p>
        </div>
      </div>
      <div className="w-[90%] mt-12 flex justify-between mx-auto">
        <div className="bg-black rounded-lg p-2 cursor-pointer hover:scale-105 transition ease-in-out duration-500">
          <IoCall className="text-white" size={10} />
        </div>
        <div className="bg-black rounded-lg p-2 cursor-pointer hover:scale-105 transition ease-in-out duration-500">
          <ImFacebook className="text-white" size={10} />
        </div>
        <div className="bg-black rounded-lg p-2 cursor-pointer hover:scale-105 transition ease-in-out duration-500">
          <GrLinkedinOption className="text-white" size={10} />
        </div>
        <div className="bg-black rounded-lg p-2 cursor-pointer hover:scale-105 transition ease-in-out duration-500">
          <SiGmail className="text-white" size={10} />
        </div>
        <div className="bg-black rounded-lg p-2 cursor-pointer hover:scale-105 transition ease-in-out duration-500">
          <AiOutlineTwitter className="text-white" size={10} />
        </div>
        <div className="bg-black rounded-lg p-2 cursor-pointer hover:scale-105 transition ease-in-out duration-500">
          <AiOutlineTwitter className="text-white" size={10} />
        </div>
      </div>
      <p className="w-[90%] mx-auto bg-black my-4 h-[2px]" />
      <div className="flex my-4 justify-center gap-2 items-center">
        <img src={copyright} alt="gs1logo" className="w-[21px]  h-[21px]" />
        GS1 Kenya
      </div>
      <div className="flex justify-center underline gap-2 items-center">
        Terms and Conditions
      </div>
      <div className="flex justify-center underline gap-2 items-center">
        Privacy Policy
      </div>
    </div>
  );
};

export default SideBar;

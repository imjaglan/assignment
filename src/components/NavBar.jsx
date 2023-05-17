import React from "react";
import logo from "../assets/reflect-1.png";
import { HiShoppingBag } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex bg-[#DFDFDF] ">
      {/* logo container */}
      <div className=" flex w-full justify-center md:justify-end">
        <img src={logo} alt="logo" className="w-[8rem]" />
      </div>

      {/* button container */}
      <div className=" hidden  md:flex w-full justify-end">
        <div>
          <div className=" flex gap-7 my-4 ">
            <div
              onClick={() => navigate("/checkOut")}
              className="flex cursor-pointer bg-gradient-to-r w-[11rem] gap-2 items-center rounded-3xl justify-center from-[#F54874] to-[#EC008C] "
            >
              <button className="text-white py-2 text-xl font-semibold">
                Go to Cart
              </button>
              <HiShoppingBag className="h-8 w-8 text-white" />
            </div>
            <div
              onClick={() => navigate("/selectCity")}
              className="flex cursor-pointer bg-gradient-to-r w-[11rem] gap-2 items-center rounded-3xl justify-center from-[#F5BA48] to-[#EC7609] "
            >
              <button className="text-white py-2 text-xl font-semibold">
                City Select
              </button>
              <ImLocation className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

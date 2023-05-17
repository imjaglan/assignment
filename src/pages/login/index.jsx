import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import NavBar from "../../components/NavBar";

import doorMan from "../../assets/doorMan.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <NavBar />

      <main className="w-full flex flex-col mt-20 ">
        <div className="flex flex-col gap-8  md:gap-0 justify-evenly md:flex-row ">
          <div className=" w-full flex mx-auto md:mx-0 md:w-[41.5rem] ">
            <img
              src={doorMan}
              alt="doorman"
              className="object-cover w-[20rem]   md:w-[41.5rem]  md:h-[25rem]"
            />
          </div>

          {/* login conatiner */}
          <div className=" flex flex-col gap-5">
            <h1 className="text-black text-2xl font-bold">Login here!</h1>
            <div className="flex flex-col gap-3 md:items-end">
              <input
                type="text"
                placeholder="Username or Phone"
                className="px-3 py-2 w-[20rem] border rounded-md"
              />
              <input
                type="text"
                placeholder="Password"
                className="px-3 py-2 border w-[20rem]  rounded-md"
              />
              <p className="text-[#635C5C] text-base">Forgot Password?</p>
            </div>
            <div
              className="flex cursor-pointer bg-gradient-to-r w-[20rem]   gap-2 items-center rounded-3xl justify-center from-[#F54874] to-[#EC008C] "
              onClick={() => navigate("/selectCity")}
            >
              <button className="text-white py-2 text-xl font-semibold">
                Login
              </button>
            </div>
            {/* Provider conatiner */}
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="flex items-center justify-center w-full">
                <div className="side-gradiend w-4/5 h-1" />
                <p className="text-[#555252] text-base  w-full">
                  Or Sign-up With
                </p>
                <div className="side-gradiend2 w-4/5 h-1" />
              </div>
              <div className="flex  gap-4">
                <FcGoogle className=" h-10 w-10  md:h-14 md:w-14" />
                <BsFacebook className="h-10 w-10  md:h-14 md:w-14 text-[#1977F3]" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;

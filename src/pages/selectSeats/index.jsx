import React from "react";
import NavBar from "../../components/NavBar";
import bluePrint from "../../assets/bluePrint.png";
import Options from "../../components/selectSeats/Options";
import { useNavigate } from "react-router-dom";

export default function SelectSeats() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <NavBar />
      <main className="w-full">
        {/* image */}
        <div className=" w-full flex justify-center bg-[#EAE8E9]">
          <img src={bluePrint} alt="bluePrint" className="w-[42rem]" />
        </div>

        {/* the label bar */}
        <div className="w-full bg-[#DDDDDD]">
          <div className="flex justify-between mr-16 py-2">
            <h1 className="ml-5 font-bold">Colour Code</h1>

            {/* labels */}
            <div className="flex gap-10 ">
              <div className="flex items-center gap-3">
                <h3 className="text-lg">H1 - </h3>
                <div className=" h-6 w-6 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg">H2 - </h3>
                <div className=" h-6 w-6 rounded-full bg-orange-500" />
              </div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg">H3 - </h3>
                <div className=" h-6 w-6 rounded-full bg-gray-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 h-[70vh] justify-between ">
          <Options />

          <div className="ml-7 mb-7">
            <h1
              onClick={() => navigate("/selectCity")}
              className="text-lg text-[#7C7C7C] cursor-pointer"
            >
              {" "}
              {"<"}Back to City{" "}
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}

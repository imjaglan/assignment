import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";

export default function Options() {
  return (
    <div>
      {/* option 1 */}
      <div className="flex justify-between py-5 px-4 border-b-2">
        <div className=" flex items-center gap-3 ">
          <div className="bg-green-500 rounded-full h-11 w-11 flex items-center justify-center ">
            <BsFillStarFill className="text-yellow-300 h-11 w-11 px-2 py-2 " />
          </div>
          <h1 className="text-2xl text-green-500 font-bold">₹55,000</h1>
          <h2 className="text-bse text-green-500 font-bold ml-5">32 Sq. Mt.</h2>
        </div>

        {/* add and remove buttons */}
        <div className="flex gap-5 mr-10">
          <AiOutlinePlusCircle className="h-7 w-7 hover:scale-105" />
          <span className="text-base font-bold text-[#545454]">0</span>
          <AiOutlineMinusCircle className="h-7 w-7 hover:scale-105" />
        </div>
      </div>

      {/* option 2 */}
      <div className="flex justify-between py-5 px-4 border-b-2">
        <div className=" flex items-center gap-3 ">
          <div className="bg-orange-500 rounded-full h-8 w-8"></div>
          <h1 className="text-2xl text-orange-500 font-bold">₹35,000</h1>
          <h2 className="text-bse text-orange-500 font-bold ml-5">
            24 Sq. Mt.
          </h2>
        </div>

        {/* add and remove buttons */}
        <div className="flex gap-5 mr-10">
          <AiOutlinePlusCircle className="h-7 w-7 hover:scale-105" />
          <span className="text-base font-bold text-[#545454]">0</span>
          <AiOutlineMinusCircle className="h-7 w-7 hover:scale-105" />
        </div>
      </div>

      {/* option 3 */}
      <div className="flex justify-between py-5 px-4 border-b-2">
        <div className=" flex items-center gap-3 ">
          <div className="bg-[#808080] rounded-full h-6 w-6"></div>
          <h1 className="text-2xl text-[#808080] font-bold">₹25,000 </h1>
          <h2 className="text-bse text-[#808080] font-bold ml-5">18 Sq. Mt,</h2>
        </div>

        {/* add and remove buttons */}
        <div className="flex gap-5 mr-10">
          <AiOutlinePlusCircle className="h-7 w-7 hover:scale-105" />
          <span className="text-base font-bold text-[#545454]">0</span>
          <AiOutlineMinusCircle className="h-7 w-7 hover:scale-105" />
        </div>
      </div>
    </div>
  );
}

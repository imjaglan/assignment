import React from "react";

export default function CheckOutProducts() {
  return (
    <div>
      {/* option 1 */}
      <div className="flex flex-col py-5 px-4 border-b-2">
        <div className="flex items-center gap-2 ">
          <div className="bg-green-500 rounded-full h-6 w-6 flex items-center justify-center "></div>
          <h1 className="text-2xl text-green-500 font-bold">₹22,000v</h1>
        </div>
        <div className="ml-10 mt-2 flex flex-col gap-2">
          <h2 className="text-lg text-[#7C7C7C] font-semibold">
            Raipur | Quantity - 3 | Stall Type Details
          </h2>
          <p className="text-base text-[#555454]">
            <b>Terms and Conditions</b> - Select your favorite social network
            and share our icons with your contacts or friends. If you don’t have
            these social networks
          </p>
        </div>
      </div>

      {/* option 2 */}
      <div className="flex flex-col py-5 px-4 border-b-2">
        <div className="flex items-center gap-2 ">
          <div className="bg-orange-500 rounded-full h-6 w-6 flex items-center justify-center "></div>
          <h1 className="text-2xl text-orange-500 font-bold">₹22,000</h1>
        </div>
      </div>

      {/* product 3 */}
      <div className="flex flex-col py-5 px-4 border-b-2">
        <div className="flex items-center gap-2 ">
          <div className="bg-gray-500 rounded-full h-6 w-6 flex items-center justify-center "></div>
          <h1 className="text-2xl text-gray-500 font-bold">₹22,000</h1>
        </div>
      </div>
    </div>
  );
}

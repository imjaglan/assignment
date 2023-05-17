import React from "react";

export default function CheckoutButton() {
  return (
    <div className="bg-[#F2F2F2] gap-5">
      <div className="flex  items-center gap-2 w-full mx-5 pt-8">
        <div className="h-2 w-2 rounded-full bg-[#EB008B]" />
        <h1 className="text-[#EB008B] text-[1.36rem] ">
          We levy a 50% Advance on all our Stall sales. The rest 50% shall be
          credited post the event.
        </h1>
      </div>
      {/* sub total and tex and total */}
      <div className="flex flex-col gap-1 mx-8">
        <div className="flex justify-between w-full text-[1.36rem] text-[#A1A1A1]">
          <h1>Subtotal</h1>
          <span>₹3,20,000.00</span>
        </div>
        <div className="flex justify-between w-full text-[1.36rem] text-[#A1A1A1]">
          <h1>Tex</h1>
          <span>₹32,000.00</span>
        </div>
        <div className="flex justify-between w-full text-2xl mt-3">
          <h1>TOTAL</h1>
          <span>₹3,52,000.00</span>
        </div>
      </div>

      {/* checkout button */}

      <div className=" flex w-full justify-center pb-5">
        <button className="text-white py-2 text-xl  cursor-pointer bg-gradient-to-r w-[20rem] gap-2  rounded-3xl  from-[#F54874] to-[#EC008C]  font-semibold">
          Pay Now
        </button>
      </div>
    </div>
  );
}

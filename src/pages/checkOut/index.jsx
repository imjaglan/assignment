import React from "react";
import NavBar from "../../components/NavBar";
import CheckoutButton from "../../components/checkout/CheckoutButton";
import CheckOutProducts from "../../components/checkout/CheckOutProducts";

export default function CheckOut() {
  return (
    <div className="w-full h-screen overflow-x-hidden">
      <NavBar />,
      <main className="h-full w-full ">
        <div className="flex justify-center">
          <h1 className="text-4xl text-[#474747] font-semibold ">
            Shopping Bag - Checkout 🛒
          </h1>
        </div>
        <div className="flex flex-col justify-between h-full">
          <CheckOutProducts />

          {/* proceed to checkout */}

          <CheckoutButton />
        </div>
      </main>
    </div>
  );
}

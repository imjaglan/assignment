import React from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import buildingIcon from "../../assets/buildingIcon.png";
import locationIcon from "../../assets/locationIcon.png";

const cityList = [
  {
    city: "Raipur",
    date: "10/11/2023",
  },
  {
    city: "Haryana",
    date: "09/12/2023",
  },
  {
    city: "Amritsar",
    date: "02/01/2024",
  },
  {
    city: "Nagpur",
    date: "18/11/2024",
  },
  {
    city: "Pune",
    date: "22/11/2024",
  },
  {
    city: "Nashik",
    date: "01/15/2024",
  },
  {
    city: "Goa",
    date: "05/05/2024",
  },
];

export default function SelectCity() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden h-full overflow-y-scroll bg-[#EAE8E9] ">
      <NavBar />
      <main className="w-full flex flex-col  gap-10 my-11">
        <div className="flex w-full justify-center">
          <h1 className="text-[2.15rem] text-[#474747]">
            Select your Location{" "}
          </h1>
          <img src={locationIcon} alt="locationIcon" className=" h-12 w-10" />
        </div>
        <div className="w-full mt-3">
          {cityList.map((item, i) => (
            <div
              className="border hover:scale-105 bg-white cursor-pointer"
              onClick={() => navigate("/selectSeats")}
            >
              <div className="flex justify-between items-center mx-14 ">
                <div className="flex gap-4 items-center">
                  <img src={buildingIcon} alt="buildingIcon" className="my-2" />
                  <h1 className="text-base font-bold">{item.city}</h1>
                </div>
                <h2>{item.date}</h2>
                <MdArrowForwardIos className="w-8 h-5" />
              </div>
            </div>
          ))}
        </div>

        <div className=" flex flex-col gap-6 justify-center items-center mt-5 ">
          <h1 className="text-3xl text-[#7C7C7C]">
            Not found the City you were looking for 😕?
          </h1>
          <div className=" cursor-pointer items-center  justify-center ">
            <button className="text-black py-3 px-6 text-xl bg-white  font-semibold rounded-3xl shadow-2xl  ">
              Contact Sales ☎️
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

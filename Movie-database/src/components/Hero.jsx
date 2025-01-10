import React from "react";
import MySvg from "../assets/background.svg";
import { MdOutlineArrowOutward } from "react-icons/md";

const hero = () => {
  return (
    <div
      className="bg-center h-screen w-screen"
      style={{
        backgroundImage: `url(${MySvg})`,
        backgroundSize: "150%", // Adjust this value to increase the size
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center h-full text-center w-[52.688rem] m-auto gap-12">
        <div className="">
          <h1 className="text-white text-[3.563rem] leading-[4rem] mb-8">
            Explore a world of films with our extensive collection.
          </h1>
          <p className="text-white text-[1.5rem]">
            Start exploring today and discover your next favorite film!
          </p>
        </div>
        <div className="inline-flex text-[0.75rem] gap-2 ">
          <button className="bg-[#007bff] rounded-full py-[1rem] px-[2rem] w-[13.75rem] text-white ">
            Get Started
          </button>
          <button className="border border-[#dedede] bg-transparent rounded-full py-[1rem] px-[2rem] w-[13.75rem] text-white inline-flex items-center justify-center gap-2">
            Check Our Collection
            <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;

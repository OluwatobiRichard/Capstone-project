import React from "react";

const Trending = () => {
  return (
    <div className="h-[32.625rem] w-screen bg-[#1B1B1B] overflow-hidden items-center justify-center py-10 mx-auto space-y-8">
      <div className="flex flex-col text-white m-auto">
        <h1 className="text-center text-[1.375rem]">Trending Now</h1>
      </div>
      <div className="flex flex-row gap-3 justify-center items-center text-[0.75rem]">
        <div className="bg-transparent group  shadow-lg">
          <div className="grid grid-rows-2 w-[15.5rem] h-[19.063rem] gap-4 bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl group duration-300 cursor-pointer group-hover:scale-110">
            <div className="h-[14.813rem] w-full ">
              <img
                src="./src/assets/imagoi.jpg"
                className="h-[15rem] w-auto bg-contain bg-center rounded-t-xl "
              />
            </div>
            <div className="p-2 w-full h-[4rem] text-white mt-auto">
              <p className="">Movie Title</p>
              <p className="">Year</p>
            </div>
          </div>
        </div>

        <div className="bg-transparent group  shadow-lg">
          <div className="grid grid-rows-2 w-[15.5rem] h-[19.063rem] gap-4 bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl group duration-300 cursor-pointer group-hover:scale-110">
            <div className="h-[14.813rem] w-full ">
              <img
                src="./src/assets/imagoi.jpg"
                className="h-[15rem] w-auto bg-contain bg-center rounded-t-xl "
              />
            </div>
            <div className="p-2 w-full h-[4rem] text-white mt-auto">
              <p className="">Movie Title</p>
              <p className="">Year</p>
            </div>
          </div>
        </div>

        <div className="bg-transparent group  shadow-lg">
          <div className="grid grid-rows-2 w-[15.5rem] h-[19.063rem] gap-4 bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl group duration-300 cursor-pointer group-hover:scale-110">
            <div className="h-[14.813rem] w-full ">
              <img
                src="./src/assets/imagoi.jpg"
                className="h-[15rem] w-auto bg-contain bg-center rounded-t-xl "
              />
            </div>
            <div className="p-2 w-full h-[4rem] text-white mt-auto">
              <p className="">Movie Title</p>
              <p className="">Year</p>
            </div>
          </div>
        </div>

        <div className="bg-transparent group  shadow-lg">
          <div className="grid grid-rows-2 w-[15.5rem] h-[19.063rem] gap-4 bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl group duration-300 cursor-pointer group-hover:scale-110">
            <div className="h-[14.813rem] w-full ">
              <img
                src="./src/assets/imagoi.jpg"
                className="h-[15rem] w-auto bg-contain bg-center rounded-t-xl "
              />
            </div>
            <div className="p-2 w-full h-[4rem] text-white mt-auto">
              <p className="">Movie Title</p>
              <p className="">Year</p>
            </div>
          </div>
        </div>

        <div className="bg-transparent group  shadow-lg">
          <div className="grid grid-rows-2 w-[15.5rem] h-[19.063rem] gap-4 bg-[#1B1B1B] border border-[#dedede] border-opacity-20 rounded-xl group duration-300 cursor-pointer group-hover:scale-110">
            <div className="h-[14.813rem] w-full ">
              <img
                src="./src/assets/imagoi.jpg"
                className="h-[15rem] w-auto bg-contain bg-center rounded-t-xl "
              />
            </div>
            <div className="p-2 w-full h-[4rem] text-white mt-auto">
              <p className="">Movie Title</p>
              <p className="">Year</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center ">
        <button className="bg-blue-500 shadow-g rounded-full py-[1rem] px-[2rem] w-[20rem] text-[0.75rem] text-white">
          View all
        </button>
      </div>
    </div>
  );
};
// l
// j
// k
export default Trending;

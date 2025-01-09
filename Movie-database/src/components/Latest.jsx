import React from "react";

const Latest = () => {
  return (
    <div className="h-[19.25rem] w-screen bg-[url('./src/assets/latest-bg.jpg')] bg-no-repeat bg-cover overflow-hidden items-center justify-center mx-auto">
      <div className="bg-black bg-opacity-80 py-10">
        <div className="w-[42.25rem] m-auto text-center space-y-8">
          <div className="flex flex-col text-white m-auto">
            <h1 className="text-[1.375rem]">Upcoming Movies</h1>
          </div>
          <div className="flex flex-row justify-center items-center ">
            <p className="text-[2.25rem] text-white leading-[2.75rem]">
              Browse our curated lists of the latest and greatest movies.
            </p>
          </div>
          <div className="mx-auto text-center ">
            <button className="border border-[#dedede] bg-transparent rounded-full py-[1rem] px-[2rem] w-[20rem] text-[0.75rem] text-white">
              View all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;

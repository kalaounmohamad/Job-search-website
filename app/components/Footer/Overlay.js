import React from "react";

export default function Overlay() {
  return (
    <div className="text-white bg-[#252d25] p-12 text-center rounded-xl">
      <h1 className="text-3xl font-medium mb-6">Register your CV now!</h1>
      <p className="mb-5 md:w-[90%] lg:w-[60%] text-gray-400 mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus aut
        voluptatum illo, corporis tempora pariatur.
      </p>
      <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-4 px-7 border-2 border-white hover:border-transparent rounded-lg md:whitespace-nowrap">
        Register Now
      </button>
    </div>
  );
}

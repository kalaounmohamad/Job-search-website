import React from "react";

export default function Overlay() {
  return (
    <div className="text-white bg-[#003A2C] p-12 text-center rounded-xl mx-8 md:mx-20">
      <h1 className="text-2xl font-medium mb-6">Register your CV now!</h1>
      <p className="mb-5 md:w-[90%] lg:w-[60%] text-gray-400 mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus aut
        voluptatum illo, corporis tempora pariatur.
      </p>
      <button className="bg-transparent hover:bg-white text-white font-semibold hover:text-[#003A2C] py-4 px-7 border-2 border-white hover:border-transparent rounded-lg md:whitespace-nowrap">
        Register Now
      </button>
    </div>
  );
}

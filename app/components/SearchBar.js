import React from "react";
import LocationDropdown from "./LocationDropdown";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:mx-auto md:items-center  bg-white p-4 rounded-2xl">
      <div className="flex flex-wrap gap-4  font-bold ">
        {/* Job title or keyword input field */}
        <div className="relative bg-gray-100 rounded-lg cursor-pointer hover:outline-[#00cc99] focus:outline-[#00cc99]">
          {/* Magnifier SVG Icon */}
          <img
            src="/assets/magnifier.svg"
            alt="Magnifier SVG"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />

          {/* Input Field */}
          <input
            type="text"
            placeholder="Job title or Keyword"
            className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg cursor-pointer focus:outline-[#00cc99] appearance-none placeholder-black placeholder-bold h-10 w-[215px]"
          />
        </div>

        {/* Dropdown for location */}
        <LocationDropdown />
      </div>
      {/* Button */}
      <button className="bg-[#00cc99] text-white px-4 py-2 rounded-lg hover:opacity-80 focus:outline-[#00cc99] h-10">
        Search
      </button>
    </div>
  );
}

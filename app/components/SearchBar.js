import React from "react";
import LocationDropdown from "./LocationDropdown";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:w-full  bg-white p-4 rounded-2xl">
      <div className="flex-grow flex flex-wrap gap-4  font-bold ">
        {/* Job title or keyword input field */}
        <div className="lg:w-7/12 flex-grow lg:flex-grow-0 relative bg-gray-100 rounded-lg cursor-pointer hover:outline-[#00cc99] focus:outline-[#00cc99]">
          <img
            src="/assets/magnifier.svg"
            alt="Magnifier SVG"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          />
          <input
            type="text"
            placeholder="Job title or Keyword"
            className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg cursor-pointer focus:outline-[#00cc99] appearance-none placeholder-black placeholder-bold h-10 w-full text-sm"
          />
        </div>
        {/* Dropdown for location */}
        <LocationDropdown />
      </div>

      {/* Button */}
      <button className="bg-[#00cc99] text-white px-4 py-2 rounded-lg hover:opacity-80 focus:outline-[#00cc99] h-10 text-sm">
        Search
      </button>
    </div>
  );
}

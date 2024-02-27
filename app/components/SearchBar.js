import React from "react";
import LocationDropdown from "./LocationDropdown";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:w-full  bg-white pt-4 sm:p-4 rounded-2xl">
      <div className="flex-grow flex flex-wrap gap-4  font-semibold ">
        {/* Job title or keyword input field */}
        <div className="lg:w-[55%] flex-grow lg:flex-grow-0 relative bg-gray-100 rounded-lg cursor-pointer hover:outline-[#00cc99] focus:outline-[#00cc99]">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            // class="mt-[10px] ml-0.5 -mr-1 text-[28px]"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
          <input
            type="text"
            placeholder="Job title or Keyword"
            className="bg-gray-100 pl-10 pr-4 py-2 rounded-lg cursor-pointer focus:outline-[#00cc99] appearance-none placeholder-black h-10 w-full text-sm"
          />
        </div>
        {/* Dropdown for location */}
        <LocationDropdown />
      </div>

      {/* Button */}
      <button className="bg-[#00cc99] text-white px-5 py-2 rounded-lg hover:opacity-80 focus:outline-[#00cc99] h-10 text-sm font-semibold">
        Search
      </button>
    </div>
  );
}

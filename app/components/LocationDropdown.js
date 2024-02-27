import React from "react";

export default function LocationDropdown() {
  const locations = ["Location", "Location 1", "Location 2", "Location 3"]; // Example locations

  return (
    <div className="flex-grow relative bg-gray-100 rounded-lg cursor-pointer hover:outline-[#00cc99] focus:outline-[#00cc99] text-sm flex items-center">
      {/* location SVG Icon */}
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        // class="w-6 h-6 ml-3"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#000"
          stroke-width="2"
          d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
        ></path>
      </svg>

      {/* Select */}
      <select className="w-full bg-gray-100 pl-10 pr-8 py-2 rounded-lg cursor-pointer focus:outline-[#00cc99] appearance-none ">
        {locations.map((location, index) => (
          <option key={index}>{location}</option>
        ))}
      </select>

      {/* Arrow Icon */}
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          className="h-5 w-5 transform rotate-90"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
        </svg>
      </div>
    </div>
  );
}

import React from "react";

export default function LocationDropdown() {
  const locations = ["Location", "Location 1", "Location 2", "Location 3"]; // Example locations

  return (
    <div className="relative bg-gray-100 rounded-lg cursor-pointer hover:outline-[#00cc99] focus:outline-[#00cc99]">
      {/* location SVG Icon */}
      <img
        src="/assets/location.svg"
        alt="location SVG"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
      />

      {/* Select */}
      <select className="bg-gray-100 pl-10 pr-8 py-2 rounded-lg cursor-pointer focus:outline-[#00cc99] appearance-none">
        {locations.map((location, index) => (
          <option key={index}>{location}</option>
        ))}
      </select>

      {/* Arrow Icon */}
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <img
          src="/assets/arrow.svg"
          alt="arrow SVG"
          className="h-5 w-5 text-gray-400 transform rotate-90"
        />
      </div>
    </div>
  );
}

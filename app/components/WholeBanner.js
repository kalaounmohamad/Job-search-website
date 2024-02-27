import React from "react";
import Banner from "./Banner";

export default function WholeBanner() {
  return (
    <div>
      <div className="relative">
        {/* Bg on += md screens */}
        <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:-z-10 md:w-screen md:h-[1000px] md:overflow-hidden">
          <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:w-full md:h-full md:bg-[#F2F2F2]  " />
        </div>

        <Banner />
      </div>
    </div>
  );
}

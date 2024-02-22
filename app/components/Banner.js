import React from "react";
import Image from "next/image";
import Shield from "../img/Banner/shield.svg";
import Calendar from "../img/Banner/calendar.svg";
import Signal from "../img/Banner/signal.svg";
import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <main className=" flex flex-col md:flex-row mx-auto ">
      <div className="relative md:w-8/12 lg:w-7/12 flex flex-col items-center md:items-start justify-center gap-5  mt-5 mb-11 md:my-0 md:pr-7 md:pb-10">
        <h1 className="font-extrabold text-3xl">Search, Find, & Apply</h1>
        <p className="w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          consectetur ratione iste harum reprehenderit dicta recusandae eveniet
          laudantium culpa assumenda cumque minima at accusamus ipsa doloremque
          nihil, placeat iusto voluptatibus.
        </p>
        <SearchBar />
        {/* Bg on <md screens */}

        <div className="md:hidden absolute -bottom-11 -top-[52px] -left-5 sm:-left-8 -z-10 w-screen  overflow-hidden">
          <div className="md:hidden absolute w-full h-full bg-gray-100  " />
        </div>
        <div className="md:hidden absolute -bottom-11 -top-[127px] -left-5 sm:-left-8 -z-20 w-screen  overflow-hidden">
          <div className="md:hidden absolute w-full h-full bg-gray-200  " />
        </div>
      </div>

      <div
        className={`relative flex flex-col md:rounded-bl-3xl md:w-4/12 lg:w-5/12 `}
      >
        {/* Bg on += md screens */}
        <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:-z-10 md:w-screen md:h-screen md:overflow-hidden">
          <div className="hidden md:block md:absolute md:w-full md:h-full md:bg-[#00cc99] md:rounded-3xl overflow-hidden" />
        </div>
        {/* Bg on <md screens */}

        <div className="md:hidden absolute bottom-0 top-0 -left-5 sm:-left-8 -z-10 w-screen  overflow-hidden">
          <div className="md:hidden absolute bottom-0 top-0 w-full h-full bg-[#00cc99]  " />
        </div>

        <div className="md:mb-10">
          <div className="ml-[15%] my-10  md:my-20">
            <Image
              src={Shield}
              alt="Jobnow logo"
              width={45}
              loading="eager"
              className=" bg-white rounded-lg p-2 transform -rotate-6"
            />
          </div>
          <div className="ml-[80%] mb-10  md:mb-10">
            <Image
              src={Calendar}
              alt="Jobnow logo"
              width={45}
              loading="eager"
              className=" bg-white rounded-lg p-2 transform rotate-12"
            />
          </div>
          <div className="ml-[25%] mb-10 md:mb-0 ">
            <Image
              src={Signal}
              alt="Jobnow logo"
              width={45}
              loading="eager"
              className=" bg-white rounded-lg p-2 transform -rotate-6"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

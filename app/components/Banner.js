import React from "react";
import Image from "next/image";
import Shield from "../img/Banner/shield.svg";
import Calendar from "../img/Banner/calendar.svg";
import Signal from "../img/Banner/signal.svg";
import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <main className=" flex flex-col md:flex-row mx-auto ">
      <div className="relative md:w-[60%] flex flex-col items-center md:items-start justify-center gap-5  mt-5 mb-11 md:my-0 md:pl-10 md:pr-20 md:py-10">
        <h1 className="text-5xl font-bold font-sans">Search, Find, & Apply</h1>
        <p className="w-[90%] mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          consectetur ratione iste harum reprehenderit dicta recusandae eveniet
        </p>
        <SearchBar />
        {/* Bg on <md screens */}

        <div className="md:hidden absolute -bottom-11 -top-[44px] sm:-top-[52px] -left-5 sm:-left-8 -z-10 w-screen  overflow-hidden">
          <div className="md:hidden absolute w-full h-full bg-gray-100  " />
        </div>
        <div className="md:hidden absolute -bottom-11 -top-[127px] -left-5 sm:-left-8 -z-20 w-screen  overflow-hidden">
          <div className="md:hidden absolute w-full h-full bg-gray-200  " />
        </div>
      </div>

      <div className={`relative flex flex-col md:rounded-bl-3xl md:w-[40%] `}>
        {/* Bg on += md screens */}
        <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:-z-10 md:w-screen md:h-[1000px] md:overflow-hidden">
          <div className="hidden md:block md:absolute md:w-full md:h-full md:bg-primary md:rounded-3xl overflow-hidden" />
        </div>
        {/* Bg on <md screens */}

        <div className="md:hidden absolute bottom-0 top-0 -left-5 sm:-left-8 -z-10 w-screen  overflow-hidden">
          <div className="md:hidden absolute bottom-0 top-0 w-full h-full bg-primary  " />
        </div>

        <div className="pt-10 md:pb-10 md:pt-0 md:my-auto">
          <div className="ml-[20%] mb-10">
            <Image
              src={Calendar}
              alt="Jobnow logo"
              width={55}
              loading="eager"
              className=" bg-white rounded-lg p-3 transform -rotate-6"
            />
          </div>
          <div className="ml-[75%] mb-10 ">
            <Image
              src={Signal}
              alt="Jobnow logo"
              width={55}
              loading="eager"
              className=" bg-white rounded-lg p-3 transform rotate-6"
            />
          </div>
          <div className="ml-[15%] mb-10  ">
            <Image
              src={Shield}
              alt="Jobnow logo"
              width={55}
              loading="eager"
              className=" bg-white rounded-lg p-3 transform -rotate-6"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

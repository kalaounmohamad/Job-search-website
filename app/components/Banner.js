import React from "react";
import Image from "next/image";
import Shield from "../img/Banner/shield.svg";
import Calendar from "../img/Banner/calendar.svg";
import Signal from "../img/Banner/signal.svg";

export default function Banner() {
  const navbarHeight = `window.innerWidth < 640` ? 104 : 120;
  const bannerHeight = `calc(100% - ${navbarHeight}px)`;

  return (
    <div
      className="flex flex-col md:flex-row mx-auto max-w-screen-2xl"
      style={{
        height: bannerHeight,
      }}
    >
      <div className="bg-red-200 md:w-7/12 flex flex-col items-center md:items-start justify-center gap-5 px-8 md:px-10 lg:px-16 xl:px-20 my-20 md:my-0 ">
        <h1 className="font-extrabold text-3xl">Search, Find, & Apply</h1>
        <p className=" w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          consectetur ratione iste harum reprehenderit dicta recusandae eveniet
          laudantium culpa assumenda cumque minima at accusamus ipsa doloremque
          nihil, placeat iusto voluptatibus.
        </p>
        <div>Nav</div>
      </div>
      <div
        className={`flex flex-col bg-blue-200 -z-10  md:rounded-bl-3xl md:w-5/12 px-8 md:pl-0 md:pr-10 lg:pr-16 xl:pr-20`}
      >
        <div className="md:mb-20">
          <div className="ml-[15%] my-10  md:my-20">
            <Image
              src={Shield}
              alt="Jobnow logo"
              width={45}
              loading="eager"
              className="hover:opacity-75 bg-white rounded-lg p-2 transform -rotate-6"
            />
          </div>
          <div className="ml-[80%] mb-10  md:mb-10">
            <Image
              src={Calendar}
              alt="Jobnow logo"
              width={45}
              loading="eager"
              className="hover:opacity-75 bg-white rounded-lg p-2 transform rotate-12"
            />
          </div>
          <div className="ml-[25%] mb-10 md:mb-0 ">
            <Image
              src={Signal}
              alt="Jobnow logo"
              width={45}
              loading="eager"
              className="hover:opacity-75 bg-white rounded-lg p-2 transform -rotate-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

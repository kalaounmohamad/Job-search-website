import React from "react";
import Image from "next/image";
import Shield from "../img/Banner/shield.svg";
import Calendar from "../img/Banner/calendar.svg";
import Signal from "../img/Banner/signal.svg";

export default function Banner() {
  return (
    <main className=" flex flex-col md:flex-row mx-auto">
      <div className="md:w-7/12 flex flex-col items-center md:items-start justify-center gap-5  my-20 md:my-0">
        <h1 className="font-extrabold text-3xl">Search, Find, & Apply</h1>
        <p className="w-[90%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          consectetur ratione iste harum reprehenderit dicta recusandae eveniet
          laudantium culpa assumenda cumque minima at accusamus ipsa doloremque
          nihil, placeat iusto voluptatibus.
        </p>
        <div>Nav</div>
      </div>

      <div className={`relative flex flex-col md:rounded-bl-3xl md:w-5/12`}>
        <div className="absolute bottom-0 left-0 -z-10 w-screen h-screen overflow-hidden">
          <div className="absolute bottom-0 right-0 w-full h-full bg-green-200 rounded-3xl " />
        </div>

        <div className="md:mb-10">
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
    </main>
  );
}

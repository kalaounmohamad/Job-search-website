import React from "react";

export default function Help() {
  return (
    <div className="flex flex-col gap-9 md:gap-16 md:flex-row md:items-center pt-12 pb-12 sm:py-32 ">
      <div className="md:w-[40%]">
        <div className="bg-gray-400 h-[340px] rounded-3xl mx-auto"></div>
      </div>
      <div className="md:w-[60%] flex flex-col gap-6 md:gap-7 items-center text-center md:text-left md:items-start">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold md:leading-[3.25rem]">
          We will help you to become an employee in your dream company
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste
          ad error, deleniti sapiente consequuntur est consectetur? Similique
          nemo in, quidem architecto iste fugit? sapiente consequuntur est
          consectetur adipisicing Similique nemo in.
        </p>
        <button className="regular-button">Learn More</button>
      </div>
    </div>
  );
}

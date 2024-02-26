import React from "react";

export default function Help() {
  return (
    <div className="flex flex-col gap-6 md:gap-12 md:flex-row md:items-center px-10 py-20 md:px-0 ">
      <div className="md:w-1/2 ">
        <div className="bg-gray-400 h-[380px] rounded-3xl mx-auto"></div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-6 items-center text-center md:text-left md:items-start">
        <h1 className="text-3xl md:text-4xl">
          We will help you to become an employee in your dream company
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste
          ad error, deleniti sapiente consequuntur est consectetur? Similique
          nemo in, quidem architecto iste fugit?
        </p>
        <button className="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-3 px-7 border-2 border-primary hover:border-transparent rounded-lg md:whitespace-nowrap order-1 md:order-none">
          Learn More
        </button>
      </div>
    </div>
  );
}

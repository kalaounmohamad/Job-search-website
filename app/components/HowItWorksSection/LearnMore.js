import React from "react";
import Cards from "./Cards";

export default function LearnMore() {
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-between items-center md:gap-10 py-5">
        <p className="md:w-2/3 text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          inventore nihil aspernatur placeat veniam officiis obcaecati laborum
          repellendus quas molestiae, atque itaque nobis assumenda? Placeat
          similique cupiditate nisi exercitationem soluta!
        </p>
        <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border-2 border-primary hover:border-transparent rounded-lg md:whitespace-nowrap order-1 md:order-none">
          Learn More
        </button>
        <div className="px-10 md:px-0">
          <Cards />
        </div>
      </div>
    </>
  );
}

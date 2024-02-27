import React from "react";
import Cards from "./Cards";

export default function LearnMore() {
  return (
    <>
      <div className="flex flex-wrap justify-center md:justify-between  md:gap-7 pt-5">
        <p className="md:w-[60%] text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          inventore nihil aspernatur placeat veniam officiis obcaecati laborum
          repellendus quas molestiae, atque itaque nobis assumenda? Placeat
          similique cupiditate nisi exercitationem soluta!
        </p>
        <button class="regular-button order-1 md:order-none self-start">
          Learn More
        </button>
        <div className="px-10 md:px-0">
          <Cards />
        </div>
      </div>
    </>
  );
}

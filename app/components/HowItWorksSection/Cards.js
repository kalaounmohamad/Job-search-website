import React from "react";
import Register from "../../img/Cards/Register.svg";
import Resume from "../../img/Cards/Resume.svg";
import Find from "../../img/Cards/Find.svg";
import Image from "next/image";

export default function Cards() {
  const cardData = [
    {
      title: "Register",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: Register,
    },
    {
      title: "Create a Resume",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: Resume,
    },
    {
      title: "Find Job",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      icon: Find,
    },
    {
      title: "Apply Job",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      icon: Register,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 my-8">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white rounded-3xl p-4 flex flex-col">
          <Image
            src={card.icon}
            alt="Jobnow logo"
            height={55}
            loading="eager"
            className=" bg-white rounded-3xl py-3 pr-3"
          />
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p className="text-gray-400 text-xs">{card.description}</p>
        </div>
      ))}
    </div>
  );
}

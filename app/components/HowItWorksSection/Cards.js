import React from "react";
import Register from "../../img/Cards/Register.svg";
import Resume from "../../img/Cards/Resume.svg";
import Find from "../../img/Cards/Find.svg";
import Image from "next/image";

export default function Cards() {
  const cardData = [
    {
      title: "Register",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip quis nostrud exercitation ullamco ex ea commodo consequat.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-11 mb-4 rounded-3xl "
        >
          <path
            d="M15.8125 12.0217H3.77148"
            stroke="#00cc99"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8848 9.10571L15.8128 12.0217L12.8848 14.9377"
            stroke="#00cc99"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.50439 7.38897V6.45597C8.50439 4.42097 10.1534 2.77197 12.1894 2.77197H17.0734C19.1034 2.77197 20.7484 4.41697 20.7484 6.44697V17.587C20.7484 19.622 19.0984 21.272 17.0634 21.272H12.1784C10.1494 21.272 8.50439 19.626 8.50439 17.597V16.655"
            stroke="#00cc99"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Create a Resume",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip quis nostrud exercitation ullamco ex ea commodo consequat.",
      icon: (
        <svg
          stroke="currentColor"
          fill="#00cc99"
          stroke-width="0"
          viewBox="0 0 24 24"
          className=" w-11 mb-4 rounded-3xl  text-[#00cc99]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
          <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
        </svg>
      ),
    },
    {
      title: "Find Job",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip quis nostrud exercitation ullamco ex ea commodo consequat.",
      icon: (
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className=" w-11 mb-4 rounded-3xl  text-[#00cc99]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.707 2.293A.996.996 0 0 0 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9a.996.996 0 0 0-.293-.707l-6-6zM6 4h6.586L18 9.414l.002 9.174-2.568-2.568c.35-.595.566-1.281.566-2.02 0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4c.739 0 1.425-.216 2.02-.566L16.586 20H6V4zm6 12c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
        </svg>
      ),
    },
    {
      title: "Apply Job",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip quis nostrud exercitation ullamco ex ea commodo consequat.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-11 mb-4 rounded-3xl "
        >
          <path
            d="M15.8125 12.0217H3.77148"
            stroke="#00cc99"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.8848 9.10571L15.8128 12.0217L12.8848 14.9377"
            stroke="#00cc99"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.50439 7.38897V6.45597C8.50439 4.42097 10.1534 2.77197 12.1894 2.77197H17.0734C19.1034 2.77197 20.7484 4.41697 20.7484 6.44697V17.587C20.7484 19.622 19.0984 21.272 17.0634 21.272H12.1784C10.1494 21.272 8.50439 19.626 8.50439 17.597V16.655"
            stroke="#00cc99"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-8 my-9">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white rounded-3xl p-6 flex flex-col">
          {card.icon}

          <h2 className="text-xl font-semibold ">{card.title}</h2>
          <p className="text-gray-400 text-xs md:pr-4 mt-3">
            {card.description}
          </p>
        </div>
      ))}
    </div>
  );
}

"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import React from "react";

export default function JobsSwiperComponent() {
  const swiperData = [
    {
      title: "UI/UX Designer",
      company: "Dimensions Studio",
      type: "Full Time",
      location: "New York, USA",

      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-11 mb-4 fill-[#00cc99] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06 4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z"></path>
        </svg>
      ),
    },
    {
      title: "Full Stack Developer",
      company: "Alpander",
      type: "Part Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",

      location: "San Francisco, CA",
      icon: (
        <svg
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-11 mb-4 fill-[#00cc99] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3H3v18h18v-2H5z"></path>
          <path d="M13 12.586 8.707 8.293 7.293 9.707 13 15.414l3-3 4.293 4.293 1.414-1.414L16 9.586z"></path>
        </svg>
      ),
    },
    {
      title: "Product Designer",
      company: "XReact Tech",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          stroke-width="0"
          className="w-11 mb-4 fill-[#00cc99] "
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 0 0-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM512 196.7l271.1 197.2H240.9L512 196.7zM264 462h117v374H264V462zm189 0h117v374H453V462zm307 374H642V462h118v374z"></path>
        </svg>
      ),
    },
    {
      title: "Software Engineer",
      company: "Amazon",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-11 mb-4 fill-[#00cc99] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22.69 18.37l1.14-1-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L20 14h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49c.32.27.68.48 1.08.63L18 24h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27zM19 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM11 7v5.41l2.36 2.36 1.04-1.79-1.4-1.39V7h-2zm10 5a9 9 0 00-9-9C9.17 3 6.65 4.32 5 6.36V4H3v6h6V8H6.26A7.01 7.01 0 0112 5c3.86 0 7 3.14 7 7h2zm-10.14 6.91c-2.99-.49-5.35-2.9-5.78-5.91H3.06c.5 4.5 4.31 8 8.94 8h.07l-1.21-2.09z"></path>
        </svg>
      ),
    },
    {
      title: "Hardware Engineer",
      company: "Apple Inc.",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-11 mb-4 fill-[#00cc99] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M22.69 18.37l1.14-1-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L20 14h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49c.32.27.68.48 1.08.63L18 24h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27zM19 21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM11 7v5.41l2.36 2.36 1.04-1.79-1.4-1.39V7h-2zm10 5a9 9 0 00-9-9C9.17 3 6.65 4.32 5 6.36V4H3v6h6V8H6.26A7.01 7.01 0 0112 5c3.86 0 7 3.14 7 7h2zm-10.14 6.91c-2.99-.49-5.35-2.9-5.78-5.91H3.06c.5 4.5 4.31 8 8.94 8h.07l-1.21-2.09z"></path>
        </svg>
      ),
    },
    {
      title: "Data Scientist",
      company: "Microsoft",
      type: "Part Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-11 mb-4 fill-[#00cc99] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06 4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z"></path>
        </svg>
      ),
    },
    {
      title: "Technical Consultant",
      company: "Consutancy co.",
      type: "Full Time",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse rem magnam, expedita tempora facere minus assumenda, labore enim totam corrupti ",
      location: "New York, USA",
      icon: (
        <svg
          stroke-width="0"
          viewBox="0 0 24 24"
          className="w-11 mb-4 fill-[#00cc99] "
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.864 8.465a3.505 3.505 0 0 0-3.03-4.449A3.005 3.005 0 0 0 14 2a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 2c-1.301 0-2.41.831-2.825 2.015a3.505 3.505 0 0 0-3.039 4.45A4.028 4.028 0 0 0 2 12c0 1.075.428 2.086 1.172 2.832A4.067 4.067 0 0 0 3 16c0 1.957 1.412 3.59 3.306 3.934A3.515 3.515 0 0 0 9.5 22c.979 0 1.864-.407 2.5-1.059A3.484 3.484 0 0 0 14.5 22a3.51 3.51 0 0 0 3.19-2.06 4.006 4.006 0 0 0 3.138-5.108A4.003 4.003 0 0 0 22 12a4.028 4.028 0 0 0-2.136-3.535zM9.5 20c-.711 0-1.33-.504-1.47-1.198L7.818 18H7c-1.103 0-2-.897-2-2 0-.352.085-.682.253-.981l.456-.816-.784-.51A2.019 2.019 0 0 1 4 12c0-.977.723-1.824 1.682-1.972l1.693-.26-1.059-1.346a1.502 1.502 0 0 1 1.498-2.39L9 6.207V5a1 1 0 0 1 2 0v13.5c0 .827-.673 1.5-1.5 1.5zm9.575-6.308-.784.51.456.816c.168.3.253.63.253.982 0 1.103-.897 2-2.05 2h-.818l-.162.802A1.502 1.502 0 0 1 14.5 20c-.827 0-1.5-.673-1.5-1.5V5c0-.552.448-1 1-1s1 .448 1 1.05v1.207l1.186-.225a1.502 1.502 0 0 1 1.498 2.39l-1.059 1.347 1.693.26A2.002 2.002 0 0 1 20 12c0 .683-.346 1.315-.925 1.692z"></path>
        </svg>
      ),
    },
  ];
  return (
    <div className="justify-center items-center text-center pb-16">
      <div className="flex justify-between mr-[-150vw] sm:mr-[-80vw] md:mr-[-75vw] lg:mr-[-35vw] xl:mr-[-55vw] ">
        <Swiper
          breakpoints={{
            1: {
              slidesPerView: 3,
              spaceBetween: 15,
            },

            665: {
              slidesPerView: 3,
              spaceBetween: 40,
            },

            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },

            // 1250: {
            //   slidesPerView: 6,
            //   spaceBetween: 30,
            // },
          }}
          loop={true}
          freeMode={true}
          grabCursor={true}
          modules={[Pagination, FreeMode, Navigation]}
          className="mySwiper  "
        >
          {swiperData.map((card, index) => (
            <SwiperSlide key={index}>
              <div
                key={index}
                className="bg-white group rounded-3xl text-left pt-7 pl-6 pr-10 pb-4 h-full flex flex-col justify-between  "
              >
                {card.icon}
                <h2 className="text-xl  font-semibold mb-4">{card.title}</h2>
                <p className="text-gray-400 text-sm font-semibold mb-7">
                  {card.company}
                </p>
                <p className="text-gray-400 font-medium text-xs mb-6">
                  {card.description}
                </p>
                <div className="flex gap-3 mb-6">
                  <div className="flex gap-2 items-center bg-[#FBFBFB] p-3 rounded-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className=" w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                        d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"
                      ></path>
                    </svg>
                    <p className="text-xs font-medium">{card.location}</p>
                  </div>
                  <div className="flex gap-2 items-center bg-[#FBFBFB] p-3 rounded-lg">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 256 256"
                      className=" w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v72H40V72Zm0,128H40V160H216v40Z"></path>
                    </svg>
                    <p className="text-xs font-medium">{card.type}</p>
                  </div>
                </div>
                <div className="flex ">
                  <button className="flex items-center gap-3 text-[#00cc99] fill-[#00cc99] mb-7 group-hover:opacity-50 rounded-lg text-lg">
                    <p className="font-semibold ">Apply now</p>
                    <svg
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      className="h-5 w-5 "
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button class="regular-button my-12">View More</button>
    </div>
  );
}

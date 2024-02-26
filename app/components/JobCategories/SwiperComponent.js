"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import React from "react";
import Register from "../../img/Cards/Register.svg";
import Resume from "../../img/Cards/Resume.svg";
import Find from "../../img/Cards/Find.svg";
import Image from "next/image";

export default function SwiperComponent() {
  const swiperData = [
    {
      title: "Design and Development",
      description: "350 Job Vacancy",
      icon: Register,
    },
    {
      title: "Accounting and Finance",
      description: "350 Job Vacancy",

      icon: Resume,
    },
    {
      title: "Bank Institution",
      description: "350 Job Vacancy",
      icon: Find,
    },
    {
      title: "Product Management",
      description: "350 Job Vacancy",
      icon: Register,
    },
    {
      title: "Find Job",
      description: "350 Job Vacancy",
      icon: Find,
    },
    {
      title: "Apply Job",
      description: "350 Job Vacancy",
      icon: Register,
    },
    {
      title: "Bank Institution",
      description: "350 Job Vacancy",
      icon: Find,
    },
    {
      title: "Product Management",
      description: "350 Job Vacancy",
      icon: Register,
    },
    {
      title: "Bank Institution",
      description: "350 Job Vacancy",
      icon: Find,
    },
  ];
  return (
    <div className="justify-center items-center text-center py-12">
      <div
        className="flex flex-row justify-between h-[200px]"
        style={{ marginRight: "-60vw" }}
      >
        <Swiper
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            830: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1250: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
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
                className="bg-white rounded-3xl text-left p-4 flex flex-col h-full"
              >
                <Image
                  src={card.icon}
                  alt="Jobnow logo"
                  height={55}
                  loading="eager"
                  className=" bg-white rounded-3xl py-3 pr-3"
                />
                <h2 className="text-xl  font-semibold mb-8">{card.title}</h2>
                <p className="text-gray-400 text-xs">{card.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <button class="bg-transparent my-10 hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border-2 border-primary hover:border-transparent rounded-lg md:whitespace-nowrap order-1 md:order-none">
        Learn More
      </button>
    </div>
  );
}

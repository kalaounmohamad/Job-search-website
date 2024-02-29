"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import { RxArrowLeft, RxArrowRight } from "react-icons/rx";

export default function Feedback() {
  const feedbackData = [
    {
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo.",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo in, quidem architecto iste fugit? sapiente consequuntur est consectetur adipisicing Similique nemo in.",
      author: "Brown Garcia",
      position: "Full Stack Developer at Amazon",
      img: "Brown's Img",
    },
    {
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo.",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo in, quidem architecto iste fugit? sapiente consequuntur est consectetur adipisicing Similique nemo in.",
      author: "Jean Garcia",
      position: "Data Scientist at Google",
      img: "Jean's Img",
    },
    {
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo.",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo in, quidem architecto iste fugit? sapiente consequuntur est consectetur adipisicing Similique nemo in.",
      author: "Marc Garcia",
      position: "Full Stack Developer at UPS",
      img: "Marc's Img",
    },
    {
      subtitle:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo.",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi iste ad error, deleniti sapiente consequuntur est consectetur? Similique nemo in, quidem architecto iste fugit? sapiente consequuntur est consectetur adipisicing Similique nemo in.",
      author: "Steve Garcia",
      position: "Hardware Engineer at Apple",
      img: "Steve's Img",
    },
  ];
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
        Feedback about JobNow!
      </h1>
      <Swiper
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
        loop={true}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        grabCursor={true}
        modules={[Pagination, FreeMode, Navigation]}
      >
        {feedbackData.map((item) => (
          <SwiperSlide key={item.title} className="mr-20">
            <div className="feedback flex flex-col md:flex-row gap-24 md:gap-16  md:items-center ">
              <div className="texts md:w-[60%] flex flex-col items-center text-center md:text-left md:items-start">
                <div className="1and2 flex flex-col gap-14">
                  <p className="text-gray-400 text-xl">{item.subtitle}</p>
                  <p className="font-medium text-xl sm:text-2xl mb-12">
                    {item.feedback}
                  </p>
                </div>
                <div className="2and3and4 ">
                  <p className="font-semibold text-2xl mb-2">{item.author}</p>
                  <p className="text-gray-500 text-md font-medium mb-6">
                    {item.position}
                  </p>
                  <div className="flex gap-6 ml-1 justify-center md:justify-normal">
                    <div className="swiper-button-prev bg-primary p-2 rounded-full hover:opacity-50 cursor-pointer">
                      <RxArrowLeft
                        className=" block text-white rounded-xl text-3xl font-bold "
                        style={{ strokeWidth: 1 }}
                      />
                    </div>
                    <div className="swiper-button-next bg-primary p-2 rounded-full hover:opacity-50 cursor-pointer">
                      <RxArrowRight
                        className=" block text-white rounded-xl text-3xl font-bold "
                        style={{ strokeWidth: 1 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="picture md:w-[40%]">
                <div className="bg-primary h-[500px] rounded-3xl mx-auto">
                  <p className="text-center">{item.img}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

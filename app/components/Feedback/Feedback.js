"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Navigation, Pagination } from "swiper/modules";

import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { useRef, useState } from "react";

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

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="max-w-screen-2xl mx-auto w-full 2xl:px-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center lg:text-left ">
        People&apos;s Feedback about JobNow!
      </h1>

      <Swiper
        ref={swiperRef}
        breakpoints={{
          1: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        }}
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
        onSlideChange={handleSlideChange}
      >
        {feedbackData.map((item) => (
          <SwiperSlide key={item.title} className="mr-20">
            <div class="grid  lg:grid-cols-[1.6fr,1fr] xl:grid-cols-[1.3fr,1fr] 2xl:grid-cols-[1.1fr,1fr] ">
              <div className="1 flex flex-col text-center lg:text-left gap-14 lg:pr-12">
                <p className="text-gray-400 text-base ">{item.subtitle}</p>
                <p className="font-medium text-base">{item.feedback}</p>
              </div>
              <div className="2 picture pt-16 lg:pt-0 pb-14  lg:pb-0 w-full mx-auto lg:mx-0 lg:w-auto lg:row-span-2 lg:my-auto ">
                <div className="bg-primary h-[350px] lg:h-[500px] rounded-3xl mx-auto">
                  <p className="text-center">{item.img}</p>
                </div>
              </div>
              <div className="3 lg:pr-12 text-center lg:text-left">
                <p className="font-semibold text-lg mb-2">{item.author}</p>
                <p className="text-gray-500 text-sm font-medium mb-6">
                  {item.position}
                </p>
                <div className="flex gap-6 ml-1 justify-center lg:justify-normal">
                  <div
                    className={`swiper-button-prev  p-2 rounded-full hover:opacity-50 cursor-pointer ${
                      currentIndex === 0
                        ? "opacity-50 bg-gray-400"
                        : "bg-primary"
                    }`}
                  >
                    <RxArrowLeft
                      className=" block text-white rounded-xl text-3xl font-bold "
                      style={{ strokeWidth: 1 }}
                    />
                  </div>
                  <div
                    className={`swiper-button-next  p-2 rounded-full hover:opacity-50 cursor-pointer ${
                      currentIndex === feedbackData.length - 1
                        ? "opacity-50 bg-gray-400"
                        : "bg-primary"
                    }`}
                  >
                    <RxArrowRight
                      className=" block text-white rounded-xl text-3xl font-bold "
                      style={{ strokeWidth: 1 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

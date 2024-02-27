import React from "react";
import SearchBar from "./SearchBar";

export default function Banner() {
  return (
    <main className=" flex flex-col md:flex-row mx-auto ">
      <div className="relative md:w-[60%] flex flex-col items-center md:items-start justify-center gap-10  mt-5 mb-11 md:mt-0 md:mb-24 md:pl-10 md:pr-20 md:py-10">
        <h1 className="text-5xl font-bold ">Search, Find, & Apply</h1>
        <p className="w-[90%] mb-5 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          consectetur ratione iste harum reprehenderit dicta recusandae eveniet
          harum reprehenderit dicta recusandae eveniet adipisicing consectetur
          adipisicing elit.
        </p>
        <SearchBar />
        {/* Bg on <md screens */}

        <div className="md:hidden absolute -bottom-11 -top-[44px] sm:-top-[52px] -left-5 sm:-left-8 -z-10 w-screen  overflow-hidden">
          <div className="md:hidden absolute w-full h-full bg-gray-100  " />
        </div>
        <div className="md:hidden absolute -bottom-11 -top-[127px] -left-5 sm:-left-8 -z-20 w-screen  overflow-hidden">
          <div className="md:hidden absolute w-full h-full bg-gray-200  " />
        </div>
      </div>

      <div className={`relative flex flex-col md:rounded-bl-3xl md:w-[40%] `}>
        {/* Bg on += md screens */}
        <div className="hidden md:block md:absolute md:bottom-0 md:left-0 md:-z-10 md:w-screen md:h-[1000px] md:overflow-hidden">
          <div className="hidden md:block md:absolute md:w-full md:h-full md:bg-primary md:rounded-3xl overflow-hidden" />
        </div>
        {/* Bg on <md screens */}

        <div className="md:hidden absolute bottom-0 top-0 -left-5 sm:-left-8 -z-10 w-screen  overflow-hidden">
          <div className="md:hidden absolute bottom-0 top-0 w-full h-full bg-primary  " />
        </div>

        <div className="py-10 md:pt-0 md:pb-24 md:my-auto">
          <div className="ml-[20%] mb-10">
            <div className="bg-white h-20 w-20 rounded-lg flex items-center justify-center transform -rotate-6">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-10 w-10"
                style={{ color: "#00cc99", verticalAlign: "middle" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h7.5"></path>
                <path d="M16 2v4"></path>
                <path d="M8 2v4"></path>
                <path d="M3 10h18"></path>
                <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z"></path>
                <path d="m22 22-1.5-1.5"></path>
              </svg>
            </div>
          </div>
          <div className="ml-[75%] mb-10">
            <div className="bg-white h-20 w-20 flex items-center justify-center rounded-lg p-3 transform rotate-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                class="h-10 w-10 rounded-lg p-1.5"
                style={{
                  color: "#fff",
                  verticalAlign: "middle",
                  backgroundColor: "00cc99",
                }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"></path>
              </svg>
            </div>
          </div>
          <div className="ml-[15%]">
            <div className="bg-white h-20 w-20 flex items-center justify-center rounded-lg p-3 transform -rotate-6">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="h-10 w-10"
                style={{ color: "#00cc99", verticalAlign: "middle" }}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

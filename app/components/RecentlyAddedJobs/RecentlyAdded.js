import React from "react";
import JobsSwiperComponent from "./JobsSwiperComponent";

export default function RecentlyAdded() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full 2xl:px-20">
      <div className="text-center flex flex-col gap-6 md:w-2/3 md:mx-auto mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Recently Added Jobs
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id
          molestias vel eligendi adipisicing odio dolor sit amet delectus quae
          eligendi neque odit quis, beatae!
        </p>
      </div>
      <div>
        <JobsSwiperComponent />
      </div>
    </div>
  );
}

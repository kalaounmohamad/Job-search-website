import React from "react";
import SwiperComponent from "./SwiperComponent";

export default function JobCategories() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="text-center flex flex-col gap-6 w-2/3 mx-auto pb-6">
        <h1 className="text-4xl">Popular Job Categories</h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id
          molestias vel eligendi odio delectus quae neque odit quis, beatae!
        </p>
      </div>
      <div>
        <SwiperComponent />
      </div>
    </div>
  );
}

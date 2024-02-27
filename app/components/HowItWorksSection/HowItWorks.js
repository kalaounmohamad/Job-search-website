import React from "react";
import LearnMore from "./LearnMore";
import Help from "./Help";

export default function HowItWorks() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full  2xl:px-20">
      <h1 className="text-4xl">How it works</h1>
      <LearnMore />
      <Help />
    </div>
  );
}

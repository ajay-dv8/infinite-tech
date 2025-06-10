"use client";

import { ChromeGrid } from "./heroBg";

const HeroBg = () => {
  return (
    <div className="h-svh w-screen">
      <ChromeGrid/>
      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center text-center w-full md:w-4xl lg:w-2/3">
          <h1 className="text-4xl md:text-6xl font-normal mb-4 tracking-widest text-white">
            Transforming Ideas Into Digital Excellence
          </h1>
          <p className="text-sm w-full md:w-xl md:text-base text-white/70 font-mono tracking-wide pointer-events-none">
            Crafting innovative software solutions that drive your business forward with cutting-edge technology and exceptional user experiences.
          </p>
      </div>
    </div>
  );
};

export { HeroBg };

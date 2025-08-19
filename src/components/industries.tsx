"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { FullTitle } from "./section-title";
import { industries } from "@/constants/services";

export function Industries() {
  return (
    <div id="industries" className="flex flex-col gap-y-8 md:gap-y-10 mb-20">
      <FullTitle
        title="Industries"
        topSub="Industries we serve"
        description="We have experience in a wide range of industries, including but not
          limited to"
        className="px-4 md:px-20 my-3 md:my-0"
        titleClassName="text-[#eff1f5]"
      /> 
        
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="right" speed="fast" items={industries}/>
      </div> 
  </div>
  );
}

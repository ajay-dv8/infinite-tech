"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Title from "./section-title";
import { industries } from "@/constants/services";

export function Industries() {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20 py-20">
      <Title
        title="Industries"
        topSub="Industries we serve"
        description="We have experience in a wide range of industries, including but not
          limited to:"
        className="px-4 md:px-20"
      />
      {/* <div className="flex flex-col gap-y-10"> */}
        
      <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards direction="right" speed="fast" items={industries}/>
      </div>
    {/* </div> */}
  </div>
  );
}

"use client";

import { BackgroundPaths } from "./ui/background-path";

export default function Hero() {
  return (
    <main className="reletive w-full flex h-screen overflow-hidden z-99">
      {/* <div className="mt-64 md:mt-32 px-4 md:px-24">
        <h1 className="w-full md:w-5xl text-4xl md:text-8xl ">Building Scalable, Intelligent Software Solutions</h1>

        <h4 className="w-full md:text-lg md:w-3xl mt-4 md:mt-8 opacity-60">
          We craft high-performance web and mobile applications tailored to your business goals—powered by modern technologies, driven by real results
        </h4>
      </div> */}
      <BackgroundPaths title="Building Scalable, Intelligent Software Solutions" />
    </main>
  )
}

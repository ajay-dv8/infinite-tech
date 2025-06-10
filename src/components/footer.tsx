// import { generalInfo } from "@/constants/info";
// import { ParticleTextEffect } from "./ui/interactive-text-particle";

// export const Footer = () => {
//   return (
//     <footer className="w-full p-0">

//       <div className="text-center absolute text-gray-400 text-sm px-4 md:px-20 py-2">
//         &copy; {new Date().getFullYear()} {generalInfo.fullName}. All rights reserved.
//       </div>

//       <ParticleTextEffect
//         text="Infinite"
//         className="w-full"
//         colors={["ff6b6b", "feca57", "48dbfb", "1dd1a1"]}
//       />
      
//     </footer>
//   );
// };


'use client';
import { generalInfo } from "@/constants/info";
import React, { useEffect, useRef } from "react";
// import { Footer } from '@/components/footer';

export const Footer = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex w-full items-center overflow-hidden bg-slate-950 "
      ref={containerRef}
    >
      <div className="mt-10">
        <div className="text-center absolute text-gray-400 text-sm px-4 md:px-20 py-2">
         &copy; {new Date().getFullYear()} {generalInfo.fullName}. All rights reserved.
        </div>
      </div>

      <span
        className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
        ref={textRef}
      >
        INFINITE TECH SOLUTIONS
      </span>
    </div>
  );
};
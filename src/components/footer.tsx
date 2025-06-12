"use client";
import { generalInfo, socials } from "@/constants/info";
import React, { useEffect, useRef } from "react";
import CenterUnderline from "./ui/underline";
import Link from "next/link";

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
      className="flex w-full items-center overflow-hidden  "
      ref={containerRef}
    >
      <div className="flex flex-col-reverse md:flex-row w-full relative justify-between gap-y-10 md:gap-y-0 px-4 md:px-20 pt-10">

        {/* socials */}
        <div className="relative z-99 flex flex-row items-start text-gray-400 h-full  uppercase space-x-8 text-sm ">
          <h2 className="text-lg">Socials</h2>
          <ul className="flex flex-col space-y-1 h-full">
            {socials.map((social) => (
              <li key={social.name} className="flex items-center">
                <Link
                  href={social.link}
                  target="_blank"
                  className="text-lg hover:text-gray-200 transition-colors duration-500 ease-in-out"
                >
                  <CenterUnderline label={social.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* copyright */}
        <div className=" text-gray-500 text-sm ">
          &copy; {new Date().getFullYear()} {generalInfo.fullName}. All rights
          reserved.
        </div>

      </div>

      <span
        className="absolute bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase text-slate-700"
        ref={textRef}
      >
        {generalInfo.name}
      </span>
    </div>
  );
};

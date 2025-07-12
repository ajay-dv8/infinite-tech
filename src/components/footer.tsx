"use client";
import { branches, generalInfo, socials } from "@/constants/info";
import React from "react";
import CenterUnderline from "./ui/underline";
import Link from "next/link";
import { FullwidthText } from "./ui/fullwidth-text";

export const Footer = () => {
  // Ensure we have a fallback for the company name
  const companyName = generalInfo.name || "Infinit";

  return (
    <div className="flex flex-col  w-full overflow-hidden bg-slate-950 py-6">

      <div className="flex flex-col md:flex-row w-full relative justify-between gap-y-10">

        {/* socials */}
        <div className="flex flex-row text-gray-400 px-4 md:px-20 uppercase space-x-8 text-sm w-full">
          <h2 className="text-xl text-gray-300">Socials</h2>
          <ul className="flex flex-col space-y-1 h-full">
            {socials.map((social) => (
              <li key={social.name} className="flex items-center text-xl text-gray-400 hover:text-gray-100 transition-colors duration-500 ease-in-out">
                <Link
                  href={social.link}
                  target="_blank"
                  className="w-full"
                >
                  <CenterUnderline label={social.name} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Branches */}
        <div className="flex flex-row text-gray-400 px-4 md:px-20 uppercase space-x-8 text-sm">
          <h2 className="text-xl text-gray-300">Branches</h2>
          <ul className="flex flex-col space-y-1 h-full">
            {branches.map((branch) => (
              <li key={branch.name} className="flex items-center text-xl text-gray-400 hover:text-gray-100 transition-colors duration-500 ease-in-out">
                {/* <Link
                  href={branch.link}
                  target="_blank"
                  className=""
                > */}
                  <CenterUnderline label={branch.name} />
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </div>

                {/* copy right */}
        <div className="text-gray-400 text-sm px-4 md:px-20  w-full">
          &copy; {new Date().getFullYear()} {generalInfo.fullName}. All rights
          reserved.
        </div>

      </div>

      {/* Dynamic full width text */}
      <FullwidthText
        text={companyName}
        color="text-slate-800"
        className="relative bottom-0 left-0 w-full h-full mt-40 md:mt-1"
      />
    </div>
  );
};

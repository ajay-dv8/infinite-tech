import { generalInfo } from "@/constants/info";
import { ParticleTextEffect } from "./ui/interactive-text-particle";

export const Footer = () => {
  return (
    <footer className="w-full p-0">

      
      <ParticleTextEffect
        text="Infinite"
        className=""
        colors={["ff6b6b", "feca57", "48dbfb", "1dd1a1"]}
      />
      <div className="text-center absolute text-gray-400 text-sm py-2">
        &copy; {new Date().getFullYear()} {generalInfo.fullName}. All rights
        reserved.
      </div>
    </footer>
  );
};

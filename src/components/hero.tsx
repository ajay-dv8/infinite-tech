"use client";

import { ChromeGrid } from "./heroBg";
import { motion } from "framer-motion";

const HeroBg = () => {
  return (
    <div className="h-svh w-svw">
      <ChromeGrid />
      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none flex flex-col justify-center items-center text-center w-full md:w-4xl lg:w-2/3">
        <motion.h1
          className="text-4xl md:text-6xl font-normal mb-4 tracking-widest text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        >
          Transforming Ideas Into Digital Excellence
        </motion.h1>
        <motion.p
          className="text-sm w-full md:w-xl md:text-base text-white/70 font-mono tracking-wide pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        >
          Crafting innovative software solutions that drive your business forward
          with cutting-edge technology and exceptional user experiences.
        </motion.p>
      </div>
    </div>
  );
};

export { HeroBg };

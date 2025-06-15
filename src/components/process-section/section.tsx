"use client";
import Image from "next/image";
import Background from "../../../public/images/manai.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FullwidthText } from "../ui/fullwidth-text";
import { generalInfo } from "@/constants/info";

export default function Section() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="w-full bg-[#eff1f5] relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 mix-blend-difference text-white w-full h-full flex flex-col items-center justify-center">
        <div className="w-full">
          <FullwidthText text={generalInfo.name} className="opacity-10" />
          <FullwidthText text="Tech Solutions" className="opacity-10" />
        </div>
      </div>

      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={Background}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

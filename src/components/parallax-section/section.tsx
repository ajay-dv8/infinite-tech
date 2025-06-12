'use client'
import Image from "next/image";
import Background from "../../../public/images/manai.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import CenterUnderline from "../scials";
import Link from "next/link";

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
      className="w-full relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between">
        {/* Social Media Links */}
        <div className="">


        </div>

        <div className="">
          <p className="w-[50vw] text-xl self-end uppercase mix-blend-difference">
            Blending human insight with cutting-edge technology to craft solutions that empower your business and deliver real, lasting results.
          </p>

          <p className="w-full text-5xl mt-8 text-gray-500 uppercase mix-blend-difference">
            Infinit tech solutions
          </p>
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

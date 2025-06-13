"use client";
import React from "react";
import Image from "next/image";
import Background from "../../../public/images/2.webp";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  // what does the['0vh', '100vh'] in this mean
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className="overflow-hidden">
      <motion.div 
        style={{ y }} 
        className="relative h-full w-full"
      >
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}

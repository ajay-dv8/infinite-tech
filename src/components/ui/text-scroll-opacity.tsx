"use client";
import { useScroll, MotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface ParagraphProps {
  paragraph: string;
}

export default function Paragraph({ paragraph }: ParagraphProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");
  return (
    <p
      ref={container}
      className="flex flex-wrap justify-center text-center text-white 
        text-base leading-relaxed 
        sm:text-lg sm:leading-relaxed 
        md:text-2xl md:leading-relaxed 
        lg:text-4xl lg:leading-relaxed 
        px-3 sm:px-4 md:p-10 
        md:max-w-[1280px] md:mx-auto 
        overflow-hidden"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word: React.FC<{
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="relative mr-3 mt-3">
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        return (
          <Char
            key={`c_${i}`}
            char={char}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
    </span>
  );
};

// Define the CharProps interface
interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char }: CharProps) {
  const [isVisible, setIsVisible] = useState(false);
  const charRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!charRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When character reaches the threshold, toggle visibility
        if (entry.intersectionRatio > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        // threshold: [0, 0.25, 0.5, 0.75, 1], // Gradual thresholds
        threshold: [0.25], // Gradual thresholds
        rootMargin: "0px 0px -35% 0px", // Trigger when 40% inside the viewport
      }
    );

    const currentCharRef = charRef.current;
    observer.observe(currentCharRef);

    return () => {
      if (currentCharRef) {
        observer.unobserve(currentCharRef);
      }
    };
  }, []);

  return (
    <span className="relative">
      {/* Shadow character (20% opacity) */}
      <span className="absolute opacity-20">{char}</span>

      {/* Visible character (transitions from 20% to 100% opacity) */}
      <span
        ref={charRef}
        className={`transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-20"
        }`}
      >
        {char}
      </span>
    </span>
  );
}

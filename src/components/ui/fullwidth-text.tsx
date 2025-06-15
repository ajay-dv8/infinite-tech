"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface DynamicTextProps {
  text?: string;
  className?: string;
  color?: string;
}

export const FullwidthText = ({ text, className, color = "" }: DynamicTextProps) => {
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
      ref={containerRef} 
      className={cn("relative w-full overflow-hidden bg-transparent", className)}
    >
      <span
        ref={textRef}
        className={cn(
          "relative bottom-0 left-0 mx-auto whitespace-nowrap text-center font-bold uppercase",
          color
        )}
      >
        {text}
      </span>
    </div>
  );
};

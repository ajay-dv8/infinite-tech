"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState, useEffect } from "react";

// props interface for the video component
interface JvideoProps {
  src?: string;
  poster?: string;
  className?: string;
  containerClassName?: string; // for the outer container
  height?: number;
  width?: number;
}

export const Jvideo = ({ 
  src, 
  poster, 
  className,
  containerClassName, 
}: JvideoProps) => {
  // ref to hold the video element for DOM manipulation
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // check if video is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    // current reference to video
    const currentRef = videoRef.current;
    if (currentRef) {
      observer.observe(currentRef); // Start observing the video element
    }

    // Cleanup function
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    // Container with 16:9 aspect ratio using padding-bottom trick
    <div className={cn("relative w-full pb-[56.25%] bg-transparent rounded-xl", containerClassName)}>
      <video
        ref={videoRef}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className={cn("absolute top-0 left-0 w-full h-full rounded-lg object-cover", className)}
      >
        {/* add video source when in view */}
        {isInView && <source src={src} type="video/webm" />}
      </video>
    </div>
  );
};

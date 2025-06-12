"use client";

import { infiniteScrollTypes } from "@/lib/types";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";

export const InfiniteMovingCards = ({
  items = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  items?: infiniteScrollTypes[];
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (!containerRef.current) return;
    const speedValues = {
      fast: "20s",
      normal: "40s",
      slow: "80s",
    };
    containerRef.current.style.setProperty(
      "--animation-duration",
      speedValues[speed],
    );
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    setStart(true);
  }, [getDirection, getSpeed]);

  useEffect(() => {
    // Cleanup function to reset animation state
    const cleanup = () => {
      if (containerRef.current) {
        containerRef.current.style.removeProperty("--animation-duration");
        containerRef.current.style.removeProperty("--animation-direction");
      }
      if (scrollerRef.current) {
        const originalContent = Array.from(scrollerRef.current.children).slice(
          0,
          items.length,
        );
        scrollerRef.current.innerHTML = "";
        originalContent.forEach((item) => scrollerRef.current?.appendChild(item));
      }
      setStart(false);
    };

    cleanup(); // Clean up before adding new animation
    addAnimation();
    return cleanup;
  }, [items.length, addAnimation]); // Only re-run when items change or animation functions change

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          // {industries.map((item) => (
          <li
            className="relative flex items-center gap-x-2  shrink-0 px-8 py-4 "
            key={item.title}
          >
            <div className="">{item.icon}</div>

            <p className="test-xl font-medium text-colorDark border-l  px-4">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};












import Image from "next/image";

export const MaqueeImageCards = ({
  items = [],
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  type = "image",
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  items?: infiniteScrollTypes[];
  type?: "image" | "text";
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (!containerRef.current) return;
    const speedValues = {
      fast: "20s",
      normal: "40s",
      slow: "80s",
    };
    containerRef.current.style.setProperty(
      "--animation-duration",
      speedValues[speed],
    );
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current?.appendChild(duplicatedItem);
    });

    getDirection();
    getSpeed();
    setStart(true);
  }, [getDirection, getSpeed]);

  useEffect(() => {
    // Cleanup function to reset animation state
    const cleanup = () => {
      if (containerRef.current) {
        containerRef.current.style.removeProperty("--animation-duration");
        containerRef.current.style.removeProperty("--animation-direction");
      }
      if (scrollerRef.current) {
        const originalContent = Array.from(scrollerRef.current.children).slice(
          0,
          items.length,
        );
        scrollerRef.current.innerHTML = "";
        originalContent.forEach((item) => scrollerRef.current?.appendChild(item));
      }
      setStart(false);
    };

    cleanup(); // Clean up before adding new animation
    addAnimation();
    return cleanup;
  }, [items.length, addAnimation]); // Only re-run when items change or animation functions change

  interface ImageItem {
    image: string;
    name: string;
  }

  interface TextItem {
    text: string;
  }

  type RenderItem = ImageItem | TextItem;

  const renderContent = (item: RenderItem) => {
    if (type === "image" && "image" in item && "name" in item) {
      return (
        <Image
          src={item.image}
          alt={item.name}
          width={50}
          height={50}
          className="object-cover"
        />
      );
    } else if (type === "text" && "text" in item) {
      return (
        <p className="text-lg font-medium text-colorDark px-4">
          {item.text}
        </p>
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative max-w-7xl overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-x-20 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "inline-block relative flex-shrink-0",
              type === "image" ? "border-none" : "border-none text-colorDark/60",
            )}
            style={{
              background: "transparent",
            }}
            key={idx}
          >
            {renderContent(item as RenderItem)}
          </li>
        ))}
      </ul>
    </div>
  );
};
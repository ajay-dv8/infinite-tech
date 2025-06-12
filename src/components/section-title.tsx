import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface TitleProps {
  title: string;
  topSub?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}

export default function Title({ className, title, topSub, description }: TitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className={`flex flex-col gap-y-3 md:gap-y-6 ${className}`}>
      {topSub && (
        <motion.p 
          className="text-sm md:text-lg opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {topSub}
        </motion.p>
      )}
      
      <motion.h2 
        className="text-4xl md:text-8xl font-semibold mb-0 md:mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.h5 
          className="w-sm text-base md:text-xl opacity-60"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.h5>
      )}
    </div>
  );
}

export function FullTitle({ topSub, title, description, titleClassName, className }: TitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className={cn("my-10 md:my-40 w-full flex flex-col items-center justify-start px-4", className)}
    >
      {topSub && (
        <motion.p 
          className="text-sm md:text-lg max-w-3xl text-center md:my-6 my-4 opacity-50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {topSub}
        </motion.p>
      )}

      <motion.h2 
        className={cn("text-4xl md:text-7xl lg:text-8xl max-w-5xl text-center font-semibold", titleClassName)}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p 
          className="max-w-3xl text-center text-base md:text-xl mt-6 opacity-60"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </section>
  );
}


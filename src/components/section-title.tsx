import { cn } from '@/lib/utils';
import React from 'react'

interface TitleProps {
  title: string;
  topSub?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
}

export default function Title({ className, title, topSub, description }: TitleProps) {
  return (
    <div className={`flex flex-col gap-y-3 md:gap-y-6 ${className}`}>
      <p className="text-sm md:text-lg opacity-50">{topSub}</p>
      <h2 className="text-4xl md:text-8xl font-semibold mb-0 md:mb-6">{title}</h2>
      <h5 className="w-sm text-base md:text-xl opacity-60">{description}</h5>
    </div>
  )
}




export function FullTitle({ topSub, title, description, titleClassName, className }: TitleProps) {
  return (
    <section className={cn("my-10 md:my-40 w-full flex flex-col items-center justify-start px-4", className)}>
      <p className="text-sm md:text-lg max-w-3xl text-center md:my-6 my-4 opacity-50">
        {topSub}
      </p>
      <h3 className={cn("text-4xl md:text-8xl font-semibold md:mb-6 mb-3", titleClassName)}>
        {title}
      </h3>
      <p className="text-base md:text-xl opacity-60 max-w-2xl text-center">
        {description}.
      </p>
    </section>
  );
}


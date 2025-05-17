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
    <div className={`flex flex-col gap-y-6 ${className}`}>
      <p className="text-lg md:text-xl text-gray-500">{topSub}</p>
      <h2 className="text-6xl md:text-8xl font-bold mb-6">{title}</h2>
      <h5 className="w-sm text-xl md:text-2xl text-gray-600">{description}</h5>
    </div>
  )
}


// import React from 'react'

export function FullTitle({ topSub, title, description, titleClassName, className }: TitleProps) {
  return (
    <section className={cn("my-40 w-full flex flex-col items-center justify-center px-4", className)}>
      <p className="text-lg md:text-xl text-gray-500 max-w-3xl text-center my-10">
        {topSub}
      </p>
      <h1 className={cn("text-5xl md:text-8xl font-bold text-gray-800 mb-6", titleClassName)}>
        {title}
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl text-center">
        {description}.
      </p>
    </section>
  );
}


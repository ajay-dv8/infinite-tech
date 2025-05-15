import React from 'react'

interface TitleProps {
  title: string;
  topSub?: string;
  description?: string;
  className?: string;
}

export default function Title({ className, title, topSub, description }: TitleProps) {
  return (
    <div className={`flex flex-col gap-y-6 ${className}`}>
      <p className="text-sm opacity-40">{topSub}</p>
      <h2 className="text-7xl font-semibold">{title}</h2>
      <h5 className="w-sm opacity-60">{description}</h5>
    </div>
  )
}

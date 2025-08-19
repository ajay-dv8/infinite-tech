import React from 'react'
import Image from 'next/image'

interface ProjectCardProps {
  name: string;
  backgroundImage: string;
  key?: string | number;
}

export default function ProjectCard({ name, backgroundImage }: ProjectCardProps) {
  return (
    <div className='w-full md:h-[85dvh] relative rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg'>
      <div className='absolute inset-0 bg-black/30 z-10 transition-opacity duration-300 group-hover:opacity-50'></div>
      {/* project name at top left */}
      <div className='absolute top-0 left-0 p-6 z-20 text-white flex flex-col items-start'>
        <h3 className='text-xl md:text-xl font-semibold'>{name}</h3>
        <div className='w-10 h-[2px] bg-green-500 mt-2 transition-all duration-300 group-hover:w-20'></div>
      </div>
      {/* View Case button in the center */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <button
          className="backdrop-blur-2xl text-white border border-white px-6 py-1 rounded-md text-lg font-semibold shadow-lg opacity-90 group-hover:opacity-100 transition-all duration-300 pointer-events-auto cursor-pointer"
        >
          <p className="">View case</p>
        </button>
      </div>
      <Image  
        src={backgroundImage} 
        alt={name}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-110'
      />
    </div>
  )
}

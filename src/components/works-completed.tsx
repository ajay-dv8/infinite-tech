import { completedProjects } from '@/constants/works'
import React from 'react'

export default function WorksCompleted() {
  return (
    <div className='px-20 my-20 w-full flex justify-around'>
      {completedProjects.map((works, index) => (
        <div 
          key={index}
          className="flex"
        >
          <div className="flex flex-col gap-8 items-baseline">
            <h3 className="text-8xl font-extrabold text-white opacity-180">
              {works.quantity}+
            </h3>
            <h4 className="text-2xl font-semibold text-white">
              {works.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  )
}

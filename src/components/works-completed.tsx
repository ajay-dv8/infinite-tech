import { completedProjects } from '@/constants/works'
import React from 'react'

export default function WorksCompleted() {
  return (
    <div className='px-20 w-full py-20 flex justify-around bg-[#eff1f5]'>
      {completedProjects.map((works, index) => (
        <div 
          key={index}
          className="flex"
        >
          <div className="flex flex-col gap-8 items-baseline">
            <h3 className="text-8xl font-extrabold text-gray-600 opacity-180">
              {works.quantity}+
            </h3>
            <h4 className="text-2xl font-semibold text-gray-800">
              {works.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  )
}

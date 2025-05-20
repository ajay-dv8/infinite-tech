import { completedProjects } from '@/constants/works'
import { FullTitle } from './section-title'

export default function WorksCompleted() {
  return (
    <section className='px-4 md:px-20 py-16 md:py-2 bg-[#eff1f5]'>
      {/* Section Title */}
      <FullTitle 
        title="Our Impact"
        topSub="The Numbers Speak"
        description="Measurable success through innovative solutions"
        className="text-gray-800"
      />
      
      {/* Stats Grid */}
      <div className='w-full max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-6'>
        {completedProjects.map((works, index) => (
          <div 
            key={index}
            className="flex justify-center items-center"
          >
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-700">
                {works.quantity}
                <span className="text-gray-700">+</span>
              </h3>
              <h4 className="text-base md:text-xl lg:text-2xl font-semibold text-gray-700 opacity-70">
                {works.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}









// import { completedProjects } from '@/constants/works'
// import React from 'react'

// export default function WorksCompleted() {
//   return (
//     <div className='px-20 w-full py-20 flex justify-around bg-[#eff1f5]'>
//       {completedProjects.map((works, index) => (
//         <div 
//           key={index}
//           className="flex"
//         >
//           <div className="flex flex-col gap-8 items-baseline">
//             <h3 className="text-8xl font-extrabold text-gray-600 opacity-180">
//               {works.quantity}+
//             </h3>
//             <h4 className="text-2xl font-semibold text-gray-800">
//               {works.title}
//             </h4>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

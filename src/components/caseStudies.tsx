import React from 'react'        
import { FullTitle } from './section-title'
import { Projects } from './case-study/cases'


const Cases = () => {
  return (
    <div>
      <FullTitle
          title="Cases"
          description="Recent Projects"
          className="my-10 md:my-20 text-white"
        />

      <Projects />
    </div>
  )
}

export default Cases

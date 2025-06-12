import { completedProjects } from '@/constants/works'
import { FullTitle } from './section-title'
import CountUp from './ui/number-counter'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const item = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export default function WorksCompleted() {
  return (
    <motion.section 
      className='px-4 md:px-20 py-16 md:py-2 bg-[#eff1f5]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.24, 0.6, 0.33, 0.93] }}
      >
        <FullTitle 
          title="Our Impact"
          topSub="The Numbers Speak"
          description="Measurable success through innovative solutions"
          className="text-gray-800"
        />
      </motion.div>
      
      <motion.div 
        className='w-full max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-6'
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {completedProjects.map((works, index) => (
          <motion.div 
            key={index}
            className="flex justify-center items-center"
            variants={item}
          >
            <div className="flex flex-col gap-4 md:gap-6 items-center text-center">
              <motion.h3 
                className="text-4xl md:text-7xl lg:text-8xl font-bold text-gray-700"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
              >
                <CountUp
                  from={0}
                  to={works.quantity}
                  startWhen={true}
                  separator=", "
                  direction="up"
                  duration={1.5}
                  className="count-up-text"
                />
                <span className="text-gray-700">+</span>
              </motion.h3>
              <motion.h4 
                className="text-base md:text-xl lg:text-2xl font-semibold text-gray-700 opacity-70"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.7, y: 0 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1 + 0.3
                }}
              >
                {works.title}
              </motion.h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}


import React from 'react';
import { FullTitle } from './section-title';
import { services } from '@/constants/services';
import { motion } from 'framer-motion';

type ServiceType = typeof services[number];

const ServiceCard = ({ service, index }: { service: ServiceType; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        ease: [0.24, 0.6, 0.33, 0.93],
        delay: index * 0.1 // Stagger effect
      }}
      className="flex flex-col md:flex-row md:gap-x-10 gap-y-6"
    >
      <motion.div 
        className='flex justify-center md:justify-start'
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      >
        {service.icon}
      </motion.div>

      <div className="flex flex-col gap-y-4 text-center md:text-left mb-8 md:mb-0">
        <motion.h3 
          className="text-lg md:text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {service.title}
        </motion.h3>
        <motion.p 
          className="text-sm md:text-base text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          {service.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default function Services() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-20 mb-0 md:mb-20">
      {/* Sticky Title Column */}
      <div className="md:sticky md:top-0 self-start">
        <FullTitle
          title="Services"
          topSub="What we do"
          description="We offer end-to-end software development solutions tailored to your business needs."
          className='mb-14 text-white'
        />
      </div>

      {/* Scrollable Services Column */}
      <div className="flex self-end">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-y-12 pb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
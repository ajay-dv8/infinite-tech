
import React from 'react';
import Title from './section-title';
import { services } from '@/constants/services';

export default function Services() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-20 mb-20">
      {/* Sticky Title Column */}
      <div className="md:sticky md:top-28 self-start">
        <Title
          title="Services"
          topSub="What we do"
          description="We offer end-to-end software development solutions tailored to your business needs."
          className='mb-14'
        />
      </div>

      {/* Scrollable Services Column */}
      <div className="flex self-end">
        <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-y-12 pb-20">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col md:flex-row md:gap-x-10 gap-y-6">
              <div className='flex justify-center md:justify-start'>
                {service.icon}
              </div>

              <div className="flex flex-col gap-y-4 text-center md:text-left">
                <div className="text-xl md:text-4xl font-semibold">{service.title}</div>
                <div className="text-sm md:text-base">{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
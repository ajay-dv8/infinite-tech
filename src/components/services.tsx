import React from 'react';
import Title from './section-title';
import { services } from '@/constants/services';


export default function Services() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between px-4 md:px-20 mb-20">
      {/* Sticky Title Column */}
      <div className=" md:sticky md:top-28 self-start">
        <Title
          title="Services"
          topSub="What we do"
          description="We offer end-to-end software development solutions tailored to your business needs."
          className='mb-14'
        />
      </div>

      {/* Scrollable Services Column */}
      <div className=" flex self-end">
        <div className="flex flex-col gap-y-12 pb-20">
          {services.map((service, index) => (
            <div key={index} className="flex gap-x-10">

              <div className=''>
                {service.icon}
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="text-4xl font-semibold">{service.title}</div>
                <div>{service.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

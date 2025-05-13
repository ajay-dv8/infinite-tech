import React from "react";
import Title from "../section-title";
import { LayersIcon } from "../../../public/icons/layers";
import Image from "next/image";

export default function Description() {
  return (
    <div className="w-full mt-24">
      <div className="px-20">
        <Title
          topSub="How we do it"
          title="Our Approach"
          description="We follow a structured approach to ensure the success of our projects. Our process includes thorough research, planning, design, development, testing, and deployment. We prioritize communication and collaboration with our clients throughout the entire process."
        />
      </div>

      <div className="my-28">
        <div className="card flex gap-x-16">
          {/* media info */}
          {/* <div className=""> */}
            <div className="w-96 h-96 bg-gray-200 rounded-md overflow-hidden">
              <Image
                width={400}
                height={600}
                src="/images/2.jpg"
                alt="Research"
                className="object-cover w-full h-full"
              />
            </div>
          {/* </div> */}

          {/* text info */}
          <div className="flex flex-col gap-y-6">
            <div className="flex gap-x-6">
              <LayersIcon />
              <h2 className="text-4xl font-semibold">Research</h2>
            </div>
            <p className="w-sm text-lg leading-8 opacity-90 pl-6">
              We conduct thorough research to understand the client&apos;s needs
              and the market landscape. We conduct thorough research to
              understand the client&apos;s needs and the market landscape. We
              conduct thorough research to understand the client&apos;s needs
              and the market landscape.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

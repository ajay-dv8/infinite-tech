import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/constants/process";
import { FullTitle } from "../section-title";
import { Jvideo } from "../ajVideo";

export default function Description() {
  const panelsContainerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const panels = panelsRef.current.filter(Boolean) as HTMLElement[];
    const panelsContainer = panelsContainerRef.current;

    if (!panelsContainer || panels.length === 0) return;

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + (panelsContainer.scrollWidth - window.innerWidth),
      },
    });

    // Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="page" className="site bg-[#eff1f5] h-full overflow-hidden">

      <section id="panels">
        <div 
          id="panels-container" 
          ref={panelsContainerRef} 
          style={{ width: '500%' }}
          className=" h-[100vh] flex flex-nowrap overflow-hidden " 
        >
          {/* Title Panel */}
        <article 
          ref={el => { panelsRef.current[0] = el; }}
          className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden"
        >
          <FullTitle
            title="Our Process"
            description="We follow a systematic approach to turn your ideas into reality. Scroll down to explore our step-by-step process."
            topSub="How we do it"
            className="text-gray-800 overflow-hidden"
          />
        </article>


          {/* Process Steps Panels */}
          {processSteps.map((process, idx) => (
            <article
              key={process.number}
              ref={el => { panelsRef.current[idx + 1] = el; }} // Offset by 1 for title panel | remove '+ 1' if no title on slide
              className={`relative bg-[#eff1f5] flex flex-col justify-center text-left w-full h-full overflow-hidden ${process?.number % 2 === 0 ? "gradient-blue" : "gradient-green"}`}
              id={`panel-${process}`}
            >
              {/* ...panel content... */}
              {/* number and title with opacity */}
              <div className="md:hidden lg:hidden xl:block">
                <h1 className="p-2 rounded-full text-black text-2xl md:text-7xl font-bold opacity-10 mx-8">
                  0{process.number}.
                </h1>

                <h2 className="text-gray-800 text-2xl md:text-6xl font-bold ml-16 md:ml-32 opacity-10">
                  {process.title}
                </h2>
              </div>

              {/* video div */}
              {/* TODO: change md:width */}
              <div className="w-full flex justify-center md:pt-10">
                <div className="w-[90%] md:w-[720px] aspect-square md:aspect-video h-full">
                  <Jvideo
                    width={720}
                    poster={process.poster} 
                    src={process.video}
                    className="aspect-square md:aspect-video "
                  />
                </div>
              </div>

              <div className="flex flex-col px-4 md:px-6 mt-4 md:gap-x-6 w-full">
                <h4 className="text-gray-800 text-xl font-semibold md:ml-24 flex-start">
                  0{process.number}. {' '} {process.title}
                </h4>

                <p className="w-full mt-2 text-gray-700 text-sm md:text-base flex items-center justify-center px-1 md:px-24">
                  {process.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section> 
    </div>
  );
}

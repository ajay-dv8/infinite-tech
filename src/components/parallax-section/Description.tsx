import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/constants/process";

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
    <div id="page" className="site h-full overflow-x-hidden">
      
      <section id="panels">

        <div 
          id="panels-container" 
          ref={panelsContainerRef} 
          style={{ width: '500%' }}
          className=" h-[100vh] flex flex-nowrap p-0 overflow-hidden bg-[#eff1f5]" 
        >
          {processSteps.map((process, idx) => (
            <article
              key={process.number}
              ref={el => { panelsRef.current[idx] = el; }}
              className={`relative flex flex-col  text-left w-full h-full overflow-hidden ${process?.number % 2 === 0 ? "gradient-blue" : "gradient-green"}`}
              id={`panel-${process}`}
            >
              {/* ...panel content... */}
                {/* number and title with opacity */}
              <div className="">
                <h3 className="p-2 rounded-full text-black text-8xl font-extrabold opacity-10 mx-8">
                  0{process.number}.
                </h3>

                <div className="text-gray-800 text-9xl font-bold ml-32 opacity-10">
                  {process.title}
                </div>
              </div>

              {/* media div */}
              <div className="w-full flex justify-center">
                <div className="bg-amber-400 w-[720px] aspect-video h-full"></div>

              </div>

              <div className="flex mt-8 gap-x-12">
                <div className="text-gray-800 text-xl font-bold ml-32 ">
                  {process.number} {' '} {process.title}
                </div>

                <div className="text-black w-2xl flex items-center justify-center">
                  {process.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* ...existing code... */}
    </div>
  );
}



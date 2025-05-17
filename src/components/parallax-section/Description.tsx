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
      
       {/* Title Section */}
      {/* <section className="h-screen w-full flex flex-col items-center justify-center bg-[#eff1f5] px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
          Our Process
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl text-center">
          We follow a systematic approach to turn your ideas into reality. 
          Scroll down to explore our step-by-step process.
        </p>
      </section> */}

      <section id="panels">
        <div 
          id="panels-container" 
          ref={panelsContainerRef} 
          style={{ width: '500%' }}
          className=" h-[100vh] flex flex-nowrap p-0 overflow-hidden bg-[#eff1f5]" 
        >
          {/* Title Panel */}
        <article 
          ref={el => { panelsRef.current[0] = el; }}
          className="relative flex flex-col items-center justify-center text-left w-full h-full overflow-hidden"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 mb-6">
            Our Process 
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl text-center">
            We follow a systematic approach to turn your ideas into reality. 
            Scroll down to explore our step-by-step process.
          </p>
        </article>

          {/* Process Steps Panels */}
          {processSteps.map((process, idx) => (
            <article
              key={process.number}
              ref={el => { panelsRef.current[idx + 1] = el; }} // Offset by 1 for title panel | remove '+ 1' if no title on slide
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
                <div className="bg-violet-500 w-[720px] aspect-video h-full"></div>
              </div>

              <div className="flex mt-8 gap-x-12">
                <div className="text-gray-800 text-xl font-bold ml-32 ">
                  0{process.number}. {' '} {process.title}
                </div>

                <div className="text-black w-2xl flex items-center justify-center">
                  {process.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* chaskele */}
    </div>
  );
}



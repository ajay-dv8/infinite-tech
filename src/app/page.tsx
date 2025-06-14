'use client'
import About from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { HeroBg } from "@/components/hero";
import { Industries } from "@/components/industries"; 
import Description from "@/components/process-section/process";
import Intro from "@/components/process-section/Intro";
import Section from "@/components/process-section/section"; 
import Services from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { Testimonials } from "@/components/testimonials";
import WorksCompleted from "@/components/works-completed";
import ZoomParallax from "@/components/zoomParallax";
import Lenis from "lenis";
import ReactLenis from "lenis/react";
import { useEffect } from "react";


export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()
  
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  }, []);
  
  return (
    <div className="">
      <ReactLenis root>
        <HeroBg />
        <About />
        <Industries /> 
        <Services />
        <TechStack/> 
          <ZoomParallax /> 
        <div className="bg-[#eff1f5]">
          <Intro />
          <Description />
          <Section />
        </div> 
        <WorksCompleted />
        <Testimonials /> 
        <Contact />
        {/* <Footer/> */}
        <div className='relative h-[480px] md:h-[500px] bottom-0 '
          style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        > 
          <div className='relative h-[calc(100vh+420px)] md:h-[calc(100vh+500px)] -top-[100vh]'> 
            <div className='h-[420px] md:h-[500px] sticky top-[calc(100vh-420px)] md:top-[calc(100vh-500px)]'> 
              <Footer />
            </div> 
          </div> 
        </div>
      </ReactLenis>
    </div>
  );
}

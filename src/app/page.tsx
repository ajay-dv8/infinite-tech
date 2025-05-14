'use client'
import About from "@/components/about";
import { Connect } from "@/components/cta";
import HeroGeometric from "@/components/hero"; 
import { Industries } from "@/components/industries"; 
import Line from "@/components/line";
import Description from "@/components/parallax-section/Description";
import Intro from "@/components/parallax-section/Intro";
import Section from "@/components/parallax-section/section";
import Services from "@/components/services";
import { TechStack } from "@/components/tech-stack";
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
  }, [])
  
  return (
    <div className="">
      <ReactLenis root>
        <HeroGeometric />
        <About />
        <Industries />
        <Line />
        <Services />
        <TechStack/>
        <div className={""}>
            <ZoomParallax />
        </div>
        <div className="">
          <Intro />
          <Description />
          <Section />
        {/* <div className='h-screen'></div> */}
        </div> 
        <WorksCompleted />
        <Connect /> 
      </ReactLenis>
    </div>
  );
}

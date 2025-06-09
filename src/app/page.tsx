'use client'
import About from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
// import Hero from "@/components/hero";
// import { Connect } from "@/components/cta";
import HeroGeometric from "@/components/hero"; 
import Beams from "@/components/heroBg";
import { Industries } from "@/components/industries"; 
import Line from "@/components/line";
import Description from "@/components/parallax-section/Description";
import Intro from "@/components/parallax-section/Intro";
import Section from "@/components/parallax-section/section";
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
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <HeroGeometric />
        <About />
        <Industries />
        <Line />
        <Services />
        <TechStack/>
        <div className={""}>
          <ZoomParallax />
        </div>
        <div className="bg-[#eff1f5]">
          <Intro />
          <Description />
          <Section />
        {/* <div className='h-screen'></div> */}
        </div> 
        <WorksCompleted />
        <Testimonials />
        {/* <Connect />  */}
        <Contact />
        <Footer/>
      </ReactLenis>
    </div>
  );
}

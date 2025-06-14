'use client' 
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function MarqueeText() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const direction = useRef(-1);
  let xPercent = 0;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction.current = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, )

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction.current;
  }

  return (
    <main className="relative flex h-screen mb-[100vh] overflow-hidden z-99">
      <div className="absolute top-[calc(100vh-350px)]">
        <div ref={slider} className="relative whitespace-nowrap">
          <p ref={firstText} className="relative m-0 text-white text-[230px] font-medium pr-[50px]">Freelance Developer -</p>
          <p ref={secondText} className="absolute left-[100%] top-0 text-white text-[230px] font-medium pr-[50px]">Freelance Developer -</p>
        </div>
      </div>
    </main>
  )
}
import "./styles.css";
// import Picture1 from "../../../public/images/1.webp";
import Picture2 from "../../../public/images/p3.webp";
import Picture3 from "../../../public/images/5.webp";
import Picture4 from "../../../public/images/p4.webp";
import Picture5 from "../../../public/images/p2.webp";
import Picture6 from "../../../public/images/p1.webp";  
import Picture7 from "../../../public/images/2.webp";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react"; 
import { Jvideo } from "../ajVideo";

interface PictureProps {
  src: string | StaticImageData; // Updated to allow string for video src
  scale?: MotionValue<number>;
}

export default function Index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures: PictureProps[] = [
    // {
    //   src: Picture1,
    //   scale: scale4,
    // },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale5,
    },
    {
      src: Picture5,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture7,
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className={'zcontainer w-full'}>
      <div className="sticky w-full">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={'el'}>
              <div className={'imageContainer'}>
                {index === 0 ? (
                  <div className="w-full h-full">
                    <Jvideo
                      src="/videos/inf.mp4" 
                      poster="/poster/inf.webp"
                      className="object-fill rounded-none bg-[#eff1f5] w-full"
                      containerClassName="rounded-none"
                    />
                  </div>
                ) : (
                  <Image 
                    src={src} 
                    fill 
                    alt="image" 
                    placeholder="blur" 
                    className={`
                      ${index === 1 || index === 4 
                        ? "block object-cover w-full h-full" // Always show and ensure full coverage
                        : "hidden md:block"} // Hide others on mobile
                    `}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

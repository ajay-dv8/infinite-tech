import "./styles.css";
import Picture1 from "../../../public/images/1.webp";
import Picture2 from "../../../public/images/2.jpg";
import Picture3 from "../../../public/images/3.jpg";
import Picture4 from "../../../public/images/4.jpg";
import Picture5 from "../../../public/images/5.jpg";
import Picture6 from "../../../public/images/6.jpg";
// import Video from "../../../public/videos/inf.mp4";
import Picture7 from "../../../public/images/7.jpg";
import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef } from "react"; 

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

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures: PictureProps[] = [
    {
      src: Picture1,
      scale: scale4,
    },
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
    <div ref={container} className={'container'}>
      <div className="sticky">
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={'el'}>
              <div className={'imageContainer bg-[#eff1f5]'}>
                {index === 0 ? (
                  <div className="relative w-full h-full">
                    <video
                      src="/videos/inf.mp4"
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-fill"
                    />
                    {/* <div className="absolute bottom-4 right-4 bg-opacity-50 text-gray-800">
                      We bring your ideas to life with cutting-edge technology and
                      innovative solutions.
                    </div> */}
                  </div>
                ) : (
                  <Image src={src} fill alt="image" placeholder="blur" />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

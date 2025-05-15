import React from "react";
import Paragraph from "./ui/text-scroll-opacity";


const paragraphText = `We are a forward-thinking software development company focused on creating high-quality digital experiences. Combining unique design and rich technology, we build digital products exactly as they were designed—without shortcuts or simplifications. From concept to launch, our team ensures every detail is crafted with precision, delivering solutions that are not only functional but also visually striking and user-friendly.`;

export default function About() {
  return (
    <section className="p-4 md:p-20 justify-center">
      <Paragraph paragraph={paragraphText} />
    </section>
  );
}
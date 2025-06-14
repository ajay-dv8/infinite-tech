import { motion } from "motion/react";
import { TestimonialsColumn } from "./ui/testmnial-columns";
import { FullTitle } from "./section-title";
import { testimonials } from "@/constants/testimonials";

// Split testimonials into three columns for responsive layout 
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-[#eff1f5] relative px-4 md:px-20">

      <div className="pb-20 z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mx-auto"
        >
          {/* Section Title */}
          <FullTitle
            topSub="What our clients think about us"
            title="Testimonials"
            description="Real stories from businesses we've helped transform through innovative technology solutions and exceptional service"
            className="text-gray-800"
          />
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}

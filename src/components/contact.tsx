"use client";
import { generalInfo } from "@/constants/info";
import { Mail, MapPin, Phone } from "lucide-react";
import { FullTitle } from "./section-title";
import CenterUnderline from "./ui/underline";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="px-4 md:px-20 bg-[#eff1f5] text-gray-800"
    >
      {/* title */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <FullTitle
          title="Contact Us"
          description="Connect with us via email or phone"
          className="my-0 md:my-0"
        />
      </motion.div>

      {/* contact info */}
      <div className="flex justify-between flex-col mt-20 pb-10 md:mt-40 md:flex-row gap-8">
        {/* email section */}
        <motion.a
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: [0.24, 0.6, 0.33, 0.93]
          }}
          href={`mailto:${generalInfo.emailLink}`}
          className="flex items-center flex-col md:items-start"
        >
          <motion.span 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent"
          >
            <Mail className="h-6 w-auto" />
          </motion.span>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2 text-lg font-semibold text-gray-700"
          >
            {generalInfo.emailLabel}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-3 text-muted-foreground"
          >
            {generalInfo.emailDescription}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-semibold"
          >
            <CenterUnderline label={generalInfo.email}/>
          </motion.p>
        </motion.a>

        {/* phone section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: [0.24, 0.6, 0.33, 0.93],
            delay: 0.2
          }}
          className="flex items-center flex-col md:items-start"
        >
          <motion.span 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent"
          >
            <Phone className="h-6 w-auto" />
          </motion.span>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-2 text-lg text-gray-700 font-semibold"
          >
            {generalInfo.phoneLabel}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-3 text-muted-foreground"
          >
            {generalInfo.phoneDescription}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col gap-y-2"
          >
            <a href={`tel:${generalInfo.phoneLink}`} className="font-semibold">
              <CenterUnderline label={generalInfo.phone}/>
            </a>
            <a href={`tel:${generalInfo.phoneTwoLink}`} className="font-semibold">
              <CenterUnderline label={generalInfo.phoneTwo}/>
            </a>
          </motion.div>
        </motion.div>

        {/* office location */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            ease: [0.24, 0.6, 0.33, 0.93],
            delay: 0.4
          }}
          className="flex items-center flex-col md:items-start"
        >
          <motion.span 
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent"
          >
            <MapPin className="h-6 w-auto" />
          </motion.span>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-2 text-gray-700 text-lg font-semibold "
          >
            {generalInfo.officeLabel}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-3 text-muted-foreground"
          >
            {generalInfo.officeDescription}
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            href="#" 
            className="font-semibold"
          >
            <CenterUnderline label={generalInfo.officeAddress}/>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

"use client"
import { generalInfo } from "@/constants/info"
import { Mail, MapPin, Phone } from "lucide-react"
import { FullTitle } from "./section-title"

export const Contact = () => {
  return (
    <section className="px-4 md:px-20 bg-[#eff1f5] text-gray-800">
      {/* <div className="container text-gray-800"> */}
        {/* title */}
        <div className="mb-10">
          <FullTitle
            title="Contact Us"
            description="Reach out to us via phone or email"
            className="my-0 md:my-0"
          />
        </div>
        {/* contact info */}
        <div className="flex justify-between flex-col mt-20 pb-10 md:mt-40 md:flex-row gap-8">
          <a href={`mailto:${generalInfo.email}`} className="flex items-center flex-col md:items-start">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Mail className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{generalInfo.emailLabel}</p>
            <p className="mb-3 ">{generalInfo.emailDescription}</p>
            <p className="font-semibold hover:underline">
              {generalInfo.email}
            </p>
          </a>
          
          <a href={`tel:${generalInfo.phone}`} className="flex items-center flex-col md:items-start">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <Phone className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">{generalInfo.phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{generalInfo.phoneDescription}</p>
            <p className="font-semibold hover:underline">
              {generalInfo.phone}
            </p>
          </a>

          <div className="flex items-center flex-col md:items-start">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-accent">
              <MapPin className="h-6 w-auto" />
            </span>
            <p className="mb-2 text-gray-800 text-lg font-semibold">{generalInfo.officeLabel}</p>
            <p className="mb-3 ">{generalInfo.officeDescription}</p>
            <a href="#" className="font-semibold hover:underline">
              {generalInfo.officeAddress}
            </a>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

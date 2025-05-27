import { generalInfo } from "@/constants/info";
import { navLinks } from "@/constants/nav-links";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="p-0 w-full bg-[#3B3B3B] ">
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 text-white gap-y-6 md:gap-y-0 md:gap-x-10">
      {/* logo and description */}
        <div className="col-span-1">
          <Image src="/logo.png" alt="" width={480} height={360}/>
        </div>

        <div className="col-span-1 grid-cols-1 md:grid-cols-2 flex flex-col md:flex-row justify-center  md:justify-between">
          <div className="col-span-1">
            {/* contact container */}
            <div className="flex flex-col ">
              <h2 className="text-2xl mt-12 mb-6">CONTACT</h2>
              {/* phone */}
              <a className="text-xl hover:underline" href={`tel:${generalInfo.phoneLink}`}>
                {generalInfo.phone}
              </a>

              {/* email */}
              <a className="text-xl hover:underline" href={`mailto:${generalInfo.emailLink}`}>
                {generalInfo.email}
              </a>
            </div>

            {/* office container */}
            <div className="flex flex-col mt-8">
              <h2 className="text-2xl mt-12 mb-6">OFFICE</h2>
              {/* phone */}
              <p className="text-xl">
                {generalInfo.officeAddress}
              </p>
            </div>
          </div>

          {/* nav links */}
          <div className="flex flex-col justify-center">
            
            <h2 className="text-2xl mt-12 mb-6">QUICK LINKS</h2>
            <div className="">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-lg flex flex-col hover:underline mb-2"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* full name section */}
      <div className="w-full border-b border-gray-600">
        <h1 className="text-white text-center py-12 text-3xl md:text-5xl lg:text-6xl font-bold max-w-[90vw] mx-auto">
          {generalInfo.fullName}
        </h1>
      </div>

      <div className="text-center text-gray-400 text-sm py-4">
        &copy; {new Date().getFullYear()} {generalInfo.fullName}. All rights reserved.
      </div>
    </footer>
  );
};

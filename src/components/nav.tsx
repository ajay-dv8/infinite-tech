import { generalInfo } from '@/constants/info'
import { navLinks } from '@/constants/nav-links'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex justify-between py-2 px-20 sticky top-0'>
      <div className="logo w-full">
        <h2 className="text-lg font-semibold">{generalInfo.name}</h2>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="flex gap-x-4">
          {navLinks.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className=''
            >
              {nav.title}
            </Link>
          ))}
        </div>

        <button>
          Contact
        </button>
      </div>
    </div>
  )
}

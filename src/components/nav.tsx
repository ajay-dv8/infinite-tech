"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants/nav-links';
import { generalInfo, socials } from '@/constants/info';
import { Menu, X } from 'lucide-react';
import CenterUnderline from './ui/underline';
import Lenis from 'lenis';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Smooth scroll function using Lenis
  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement && lenisRef.current) {
      lenisRef.current.scrollTo(targetElement, {
        offset: -80, // Account for fixed navbar height
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  // Handle navigation clicks
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    setIsOpen(false);
    
    // Extract section ID from href (remove # if present)
    const sectionId = href.startsWith('#') ? href.substring(1) : href;
    
    // Scroll to section
    scrollToSection(sectionId);
  };

  // Handle contact button clicks
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection('contact');
  };

  return (
    <nav 
      className={`fixed top-0 w-svw z-50 transition-all duration-500 ${
        isScrolled ? 'py-2 bg-[#18181b]/60 backdrop-blur-md' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            {/* Logo */}
            <Link 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex gap-x-3 text-xl sm:text-2xl font-bold bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent hover:from-white hover:to-gray-400 transition-all duration-300"
            >
              <Image
                src="/logo.png"
                alt="Infinit Logo"
                width={100}
                height={100}
                className="h-8 w-8"
              />
              {generalInfo.shortName}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative px-3 py-2 text-white/90 hover:text-white text-sm lg:text-base tracking-wider group transition-colors duration-300"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <CenterUnderline label={link.title} className="relative z-10" />
                  <motion.span
                    className="absolute inset-0 bg-white/10 rounded-lg z-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-all duration-300"
              onClick={handleContactClick}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-black/40 backdrop-blur-lg mt-2 rounded-lg"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-white/90 hover:text-white text-lg font-medium uppercase tracking-wide transition-colors"
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full px-4 py-2 bg-white text-black rounded-lg text-base font-medium hover:bg-opacity-90 transition-colors"
                  onClick={handleContactClick}
                >
                  Contact
                </motion.button>
              </div>

              {/* socials */}
              <div className="flex items-center justify-center gap-x-4 pb-4 px-6">
                {socials.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.link}
                    className="border w-full text-center border-gray-600 py-1 capitalize px-4 rounded-md"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="">{social.name}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
          {/* copyright */}
          {isOpen && (
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {generalInfo.fullName}. All rights reserved.
            </p>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

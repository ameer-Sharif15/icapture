'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [textColor, setTextColor] = useState('text-white');

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Get hero section element
      const heroSection = document.getElementById('home');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const heroMiddle = heroHeight / 2;

        // Check if we're past the middle of hero section
        if (window.scrollY > heroMiddle) {
          // Determine text color based on current section background
          const sections = document.querySelectorAll('section');
          let currentSection: any = null;

          // Find the current section based on scroll position
          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
            }
          });

          // Check if current section has white background
          let hasWhiteBg = false;
          if (currentSection) {
            hasWhiteBg = currentSection?.classList.contains('bg-white');
            if (!hasWhiteBg) {
              // Check computed styles as fallback
              const computedStyle = window.getComputedStyle(currentSection);
              const bgColor = computedStyle.backgroundColor;
              hasWhiteBg = bgColor === 'rgb(255, 255, 255)' || bgColor === 'white';
            }
          }

          setTextColor(hasWhiteBg ? 'text-black' : 'text-white');
        } else {
          setTextColor('text-white'); // Default to white on hero section
        }
      }
    };

    // Initial call to set correct color
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate if we should show the logo and tagline
  const heroSection = typeof document !== 'undefined' ? document.getElementById('home') : null;
  const heroHeight = heroSection?.offsetHeight || 0;
  const heroMiddle = heroHeight / 2;
  const shouldShowBranding = scrollY > heroMiddle;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > heroHeight / 2 ? ' backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      {/* Dark green line at the top */}
      <div className='h-0.5 bg-[#1a4d3a]'></div>

      <div className=' mx-auto px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          {/* Left side - Logo and Tagline */}
          <div className='flex-shrink-0 flex flex-1 items-center gap-[10rem]'>
            {/* Logo */}
            <div
              className={`transition-all flex flex-1 duration-500 ${
                shouldShowBranding ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              <h1 className={`text-2xl font-bold ${textColor} tracking-tight`}>ICAPTURE</h1>
            </div>

            {/* Tagline */}
            <div
              className={`transition-all duration-700 delay-100 ${
                shouldShowBranding ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}
            >
              <p className={`text-base font-medium ${textColor}`}>
                i (the personal, the brand, the vision) × Capture (our craft, creativity, results) =
                Outcome.
              </p>
            </div>
          </div>

          {/* Right side - Navigation */}
          <div className='hidden md:flex flex-1 justify-between items-center space-x-8'>
            <div className='flex items-center justify-center w-full space-x-8'>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${textColor} hover:opacity-70 px-3 py-2 text-base font-medium transition-all duration-300`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact button */}
            <a
              href='#contact'
              className={`flex items-center gap-2 ${textColor} hover:opacity-70 px-4 py-2 text-base font-medium transition-all duration-300`}
            >
              Contact
              <ArrowUpRight className='w-4 h-4' />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} hover:opacity-70 focus:outline-none transition-colors duration-300`}
            >
              {isMenuOpen ? <X className='block h-6 w-6' /> : <Menu className='block h-6 w-6' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors duration-200'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href='#contact'
              className='flex items-center gap-2 text-white hover:text-gray-300 px-3 py-2 text-base font-medium transition-colors duration-200'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <ArrowUpRight className='w-4 h-4' />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

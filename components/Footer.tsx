'use client';

import { ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Systems', href: '#systems' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/icapture' },
    { name: 'Linkedin', href: 'https://linkedin.com/company/icapture' },
  ];

  return (
    <footer className='bg-[#1c1c1c] text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {/* Left: Brand Description & Contact */}
          <div>
            <div className='mb-8'>
              <h3 className='text-2xl font-bold mb-2'>
                icapture is a special quantum state of matter that’s both solid and fluid at the
                same time.
              </h3>
            </div>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <span className='text-lg font-bold'>Contact</span>
              </div>
              <div className='flex items-center gap-2 mb-2'>
                <Mail className='w-5 h-5 text-primary-400' />
                <span className='text-gray-300'>inbox@icapture.agency</span>
              </div>
              {/* <div className='flex items-start gap-2'>
                <MapPin className='w-5 h-5 text-primary-400 mt-0.5' />
                <span className='text-gray-300'>
                  Level 4 130/144 Cleveland Street
                  <br />
                  Chippendale NSW 2008 Australia
                </span>
              </div> */}
            </div>
          </div>

          {/* Center: Navigation */}
          <div>
            <div className='text-gray-400 text-sm mb-4'>Navigation</div>
            <ul className='space-y-2'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='block text-4xl font-bold text-white hover:text-primary-400 transition-colors duration-300'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Connect */}
          <div>
            <div className='text-gray-400 text-sm mb-4'>Connect</div>
            <div className='space-y-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 text-white text-2xl font-semibold hover:text-primary-400 transition-colors duration-300'
                >
                  {social.name}
                  <ExternalLink className='w-4 h-4 ml-1' />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

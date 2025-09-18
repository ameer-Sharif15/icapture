'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Systems', href: '#systems' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/icapture' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/icapture' },
  ];

  return (
    <footer className='bg-dark-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'
        >
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <h3 className='text-3xl font-bold mb-4'>iCapture</h3>
            <p className='text-gray-400 mb-6 max-w-md'>
              We create Super x Solid outcomes for brands through innovative creative solutions that
              drive real results.
            </p>

            {/* Contact Info */}
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <Mail className='w-5 h-5 text-primary-400' />
                <a
                  href='mailto:inbox@icapture.agency'
                  className='text-gray-400 hover:text-white transition-colors duration-300'
                >
                  inbox@icapture.agency
                </a>
              </div>

              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-primary-400 mt-0.5' />
                <span className='text-gray-400'>
                  Level 4 130/144 Cleveland Street
                  <br />
                  Chippendale NSW 2008 Australia
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Navigation</h4>
            <ul className='space-y-3'>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className='text-gray-400 hover:text-white transition-colors duration-300'
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Connect</h4>
            <div className='space-y-3'>
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300'
                  >
                    <IconComponent className='w-5 h-5' />
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className='border-t border-gray-800 mt-12 pt-8'
        >
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='text-gray-400 text-sm'>
              We acknowledge the first peoples of Australia and pay our respects to the Traditional
              Owners of the lands where we work –– the Gadigal People of the Eora Nation.
            </div>

            <div className='flex items-center gap-6 text-sm text-gray-400'>
              <span>©{currentYear} iCapture Pty Ltd</span>
              <a href='#' className='hover:text-white transition-colors duration-300'>
                Legal Notice
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

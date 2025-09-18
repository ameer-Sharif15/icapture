'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function TestimonialsSection() {
  const currentTestimonial = {
    id: 2,
    quote:
      "[Supersolid's] method and approach was crucial. I can think of many more projects where this way of working could be applied.",
    author: 'Bianca Armatage',
    position: 'Head of Ministerial and Campaigns',
    company: 'ato',
  };

  return (
    <section className='py-20 bg-slate-900 relative overflow-hidden'>
      {/* Background texture */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]'></div>
      </div>

      <div className='relative z-10 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[600px]'>
            {/* Left Column - Testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              {/* Quote */}
              <div className='space-y-6'>
                <blockquote className='text-3xl lg:text-4xl font-bold text-white leading-tight'>
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Attribution */}
                <div className='flex items-center gap-4'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 border-blue-500'>
                    (ato)
                  </div>
                  <div>
                    <h4 className='text-xl font-semibold text-white'>
                      {currentTestimonial.author}
                    </h4>
                    <p className='text-slate-300'>{currentTestimonial.position}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className='flex items-center gap-6'>
                <div className='flex items-center gap-2'>
                  <button className='w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors'>
                    <ArrowLeft className='w-5 h-5 text-white' />
                  </button>
                  <button className='w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-600 transition-colors'>
                    <ArrowRight className='w-5 h-5 text-white' />
                  </button>
                </div>
                <span className='text-white text-lg'>02 — 02</span>
              </div>

              {/* Call to Action */}
              <div className='flex items-center gap-2 text-white hover:text-slate-300 transition-colors cursor-pointer'>
                {/* <ChevronUpRight className='w-5 h-5' /> */}
                <span className='text-lg'>See the case study</span>
              </div>
            </motion.div>

            {/* Right Column - Mobile Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className='flex justify-center lg:justify-end'
            >
              <div className='relative'>
                {/* Mobile Phone Frame */}
                <div className='w-64 h-[500px] bg-slate-800 rounded-[2.5rem] p-2 shadow-2xl'>
                  <div className='w-full h-full bg-slate-900 rounded-[2rem] overflow-hidden relative'>
                    {/* Notch */}
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10'></div>

                    {/* App Interface */}
                    <div className='w-full h-full bg-gradient-to-br from-blue-900 to-teal-900 relative'>
                      {/* App Header */}
                      <div className='flex items-center justify-between p-6 pt-12'>
                        <div className='flex items-center gap-2'>
                          <div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center'>
                            <div className='w-4 h-4 bg-blue-600 rounded'></div>
                          </div>
                          <span className='text-white font-bold text-sm'>myID</span>
                        </div>
                      </div>

                      {/* Welcome Text */}
                      <div className='px-6 py-8'>
                        <h2 className='text-2xl font-bold text-white mb-4'>Welcome to myID</h2>
                        <p className='text-slate-300 text-sm leading-relaxed'>
                          Your secure digital identity for government services. Access everything
                          you need with one simple login.
                        </p>
                      </div>

                      {/* Background Graphics */}
                      <div className='absolute bottom-0 right-0 w-32 h-32 opacity-20'>
                        <div className='w-full h-full bg-gradient-to-tr from-blue-400 to-teal-400 rounded-tl-full'></div>
                      </div>
                      <div className='absolute bottom-8 left-4 w-16 h-16 bg-blue-400 opacity-10 rounded-lg'></div>
                      <div className='absolute bottom-16 right-8 w-12 h-12 bg-teal-400 opacity-10 rounded-lg'></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse'></div>
                <div
                  className='absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full opacity-60 animate-pulse'
                  style={{ animationDelay: '1s' }}
                ></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

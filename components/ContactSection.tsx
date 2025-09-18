'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className='py-20 bg-gradient-to-br from-dark-900 to-dark-800 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-16'
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>Let's find your ROIdeas®</h2>

            <div className='space-y-4 mb-8'>
              <p className='text-xl text-gray-300'>Let's find your ROIdeas®</p>
              <p className='text-xl text-gray-300'>Let's find your ROIdeas®</p>
              <p className='text-xl text-gray-300'>Let's find your ROIdeas®</p>
            </div>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <Mail className='w-6 h-6 text-primary-400' />
                <a
                  href='mailto:inbox@icapture.agency'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  inbox@icapture.agency
                </a>
              </div>

              <div className='flex items-center gap-4'>
                <MapPin className='w-6 h-6 text-primary-400' />
                <span className='text-gray-300'>
                  Level 4 130/144 Cleveland Street
                  <br />
                  Chippendale NSW 2008 Australia
                </span>
              </div>
            </div>

            <div className='mt-12'>
              <p className='text-gray-400 text-sm leading-relaxed'>
                A supersolid is a special quantum state of matter that's both solid and fluid at the
                same time.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8'>
              <h3 className='text-2xl font-bold mb-6'>Tell us about your challenge</h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300'
                      placeholder='Your name'
                    />
                  </div>

                  <div>
                    <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-300 mb-2'>
                    Company
                  </label>
                  <input
                    type='text'
                    id='company'
                    name='company'
                    value={formData.company}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300'
                    placeholder='Your company'
                  />
                </div>

                <div>
                  <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none'
                    placeholder='Tell us about your challenge...'
                  />
                </div>

                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className='group w-full px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary-700'
                >
                  <span className='flex items-center justify-center gap-2'>
                    Send Message
                    <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

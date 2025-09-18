'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
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
    hidden: { y: 20, opacity: 0 },
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
    <section className='relative min-h-screen flex flex-col bg-[#1c1c1c] overflow-hidden'>
      {/* Dark textured b ackground */}

      <div className='relative z-10 flex-1 flex flex-col'>
        {/* Top left content */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='pt-8 px-6 lg:px-8 max-w-4xl'
        >
          <motion.h1
            variants={itemVariants}
            className='text-5xl font-bold text-white mb-8 leading-tight'
          >
            We’re a creative-owned agency that helps brands Capture hearts, minds, and markets.
          </motion.h1>

          <motion.div variants={itemVariants} className='mb-16'>
            <button className='group flex items-center gap-3 px-6 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105'>
              <span>See how we create outcomes</span>
              <ArrowUpRight className='w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300' />
            </button>
          </motion.div>
        </motion.div>

        {/* Main focal point - Large ICAPTURE text */}
        <div className='flex-1 flex  justify-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            className='text-center'
          >
            <h2 className='text-4xl md:mt-[6rem] md:text-9xl lg:text-[12rem] xl:text-[16rem] font-bold text-white tracking-tight leading-none'>
              ICAPTURE
            </h2>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white'
        >
          <span className='text-sm mb-2'>Scroll to explore</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className='w-5 h-5' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

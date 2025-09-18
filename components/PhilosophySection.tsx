'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function PhilosophySection() {
  const stats = [
    { value: '#1', label: 'in Sports on the App Store' },
    { value: '+162%', label: 'diverse stem cell donors' },
    { value: '11.6M', label: 'active monthly users' },
    { value: '2.8B', label: 'TikTok views globally' },
    { value: '$57M', label: 'startup funding secured' },
  ];

  return (
    <section className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden'>
      {/* Background texture */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[length:20px_20px]'></div>
      </div>

      <div className='relative z-10 px-4 sm:px-6 lg:px-8 py-20'>
        <div className=''>
          {/* Header */}
          <div className='mb-16 flex flex-row items-center justify-between flex-1'>
            <p className='text-lg text-slate-700'>Our Philosophy</p>
            <span className='text-sm text-slate-500'>IP Australia No. 2250905</span>
            <span className='text-sm text-slate-500'>Class 35</span>
          </div>

          <div className='space-y-12'>
            {/* ROIdeas Logo */}
            <div className='text-center lg:text-left'>
              <h2
                className='text-[3rem] md:text-[15rem] font-bold
                text-slate-900 mb-8'
              >
                ROIdeas®
              </h2>
            </div>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
            {/* Left Column */}
            <div className='space-y-8'>
              {/* Video Section */}
              <div className='relative'>
                <div className='relative'>
                  <div className='aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center relative overflow-hidden'>
                    {/* Video thumbnail background */}
                    <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20'></div>

                    {/* Circular animated text effect */}
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <div className='relative w-64 h-64'>
                        <div
                          className='absolute inset-0 animate-spin'
                          style={{ animationDuration: '20s' }}
                        >
                          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 text-slate-300 text-xs font-light opacity-30'>
                            COMING SOON
                          </div>
                          <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 text-slate-300 text-xs font-light opacity-30'>
                            Supersolid Agency Reel 2025
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Play button */}
                    <div className='relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg'>
                      <Play className='w-8 h-8 text-slate-900 ml-1' />
                    </div>

                    {/* Video info */}
                    <div className='absolute bottom-4 left-4 right-4 flex items-center justify-between text-slate-700'>
                      <span className='text-sm font-medium'>00:10</span>
                      <span className='text-sm font-medium'>PLAY REEL</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy Text */}
              <div className='space-y-6'>
                <p className='text-lg text-slate-700 leading-relaxed'>
                  This guiding philosophy is underpinned by a seamless agency structure and a highly
                  collaborative way of working that delivers creative excellence and effectiveness.
                </p>

                {/* About Button */}
                <div>
                  <button className='group flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors'>
                    <span>About Supersolid</span>
                    <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className='space-y-8'>
              {/* Large text blocks */}
              <div className='space-y-8'>
                <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 leading-tight'>
                  Supersolid's registered trademark is the unrivalled Return On Ideas we deliver for
                  our clients.
                </h2>

                <h3 className='text-4xl lg:text-5xl font-bold text-slate-900 leading-tight'>
                  We believe creativity is the most powerful and profitable investment any
                  organisation can make.
                </h3>
              </div>

              {/* ROIdeas highlights */}
              <div className='space-y-6'>
                <h4 className='text-2xl font-bold text-slate-900'>ROIdeas® highlights</h4>

                <div className='space-y-3'>
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                      className='text-lg text-slate-700'
                    >
                      <span className='font-bold'>{stat.value}</span> {stat.label}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { projects } from '@/projects';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedWork() {
  const featuredProjects = [
    {
      id: 1,
      title: 'TikTok',
      subtitle: 'Now You Know',
      category: 'Storytelling',
      // image: taibah,
      description:
        'Revolutionary social media campaign that captured the essence of modern storytelling',
    },
    {
      id: 2,
      title: 'Strength to Give',
      subtitle: "There's No One Like Me",
      category: 'Storytelling',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=faces',
      description: 'Empowering campaign that celebrates individual strength and community support',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className='py-32  bg-[#1c1c1c] relative overflow-hidden'>
      {/* Dark textured background */}
      <div className='absolute inset-0  w-full bg-[#1c1c1c]'></div>

      <div className=' px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mb-20'
        >
          <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8'>
            <div className='lg:w-2/3'>
              <h2 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight'>
                We Capture the spark that makes your brand unforgettable.
              </h2>
            </div>
            <div className='lg:w-1/3 lg:text-right'>
              <p className='text-white/70 text-lg font-medium'>• FEATURED WORK</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Work Grid - Two Column Layout */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-12'
        >
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className='group relative cursor-pointer'
              onClick={() => window.open(project.href, '_blank')}
            >
              {/* Project Image */}
              <div className='relative h-[500px] lg:h-[600px] overflow-hidden rounded-lg'>
                <img
                  src={project.image.src}
                  alt={`${project.title} - ${project.subtitle}`}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                  loading='lazy'
                />

                {/* Dark overlay */}
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300'></div>

                {/* Category Badge */}
                <div className='absolute top-6 left-6'>
                  <span className='px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-black border border-white/20'>
                    {project.category}
                  </span>
                </div>

                {/* Project Info Overlay */}
                <div className='absolute bottom-6 left-6 right-6'>
                  <div className='space-y-2'>
                    <h3 className='text-2xl lg:text-3xl font-bold text-black'>{project.title}</h3>
                    <h4 className='text-lg lg:text-xl font-medium text-black/80'>
                      {project.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16'
        >
          {featuredProjects.slice(2).map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className='group relative cursor-pointer'
            >
              {/* Project Image */}
              <div className='relative h-80 overflow-hidden rounded-lg'>
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                  loading='lazy'
                />

                {/* Dark overlay */}
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300'></div>

                {/* Category Badge */}
                <div className='absolute top-4 left-4'>
                  <span className='px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20'>
                    {project.category}
                  </span>
                </div>

                {/* Project Info Overlay */}
                <div className='absolute bottom-4 left-4 right-4'>
                  <div className='space-y-1'>
                    <h3 className='text-xl font-bold text-white'>{project.title}</h3>
                    <h4 className='text-base font-medium text-white/80'>{project.subtitle}</h4>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300'></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-20'
        >
          <button className='group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/90 hover:scale-105'>
            <span className='flex items-center gap-2'>
              See all work
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

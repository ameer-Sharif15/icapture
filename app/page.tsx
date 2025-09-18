'use client';

import FeaturedWork from '@/components/FeaturedWork';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(`${timeString}, SYD`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='min-h-screen bg-white'>
      {/* Time Display */}
      {/* <div className='fixed top-20 right-4 z-40 text-sm text-dark-600 font-mono'>{currentTime}</div> */}

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id='home'>
        <HeroSection />
      </section>

      {/* Featured Work */}
      <section id='work'>
        <FeaturedWork />
      </section>

      {/* Philosophy Section */}
      {/* <section id='about'>
        <PhilosophySection />
      </section> */}

      {/* Testimonials */}
      {/* <section>
        <TestimonialsSection />
      </section> */}

      {/* Contact */}
      {/* <section id='contact'>
        <ContactSection />
      </section> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}

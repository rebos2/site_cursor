'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen bg-[#4A3A4A]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
      
      <div className="container h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-archivo font-normal leading-tight mb-6">
              AI CODE AUDIT: FLAWLESS VULNERABILITY DETECTION
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Our AI auditor detects threats faster and more accurately than top professionals. No fatigue. No bias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Request a code audit
              </button>
              <button className="btn-secondary">
                Get access to the system
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            {/* Placeholder for hero image */}
            <div className="bg-white/10 rounded-lg aspect-video" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import Header from './Header';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white min-h-screen">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.pexels.com/photos/2272752/pexels-photo-2272752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-70"
        />
      </motion.div>
      <Header/>
      <div className="relative z-10 container mx-auto px-4 min-h-[80vh] flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-medium tracking-wider mb-4 text-gray-300">
              NEW COLLECTION 2025
            </h4>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            Step into <br />
            Your Style
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl font-semibold text-gray-300 mb-8 max-w-lg"
          >
            Discover our latest collection of premium sneakers.
            From classic designs to modern innovations, find your perfect pair.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4"
          >
            <Button size="lg" variant="default" className="group text-lg font-semibold">
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-lg font-semibold text-white border-white hover:bg-white hover:text-black">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

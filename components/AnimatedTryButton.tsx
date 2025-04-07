"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedTryButton = () => {
  const [showBanner, setShowBanner] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowBanner(true);
    
    // Auto-hide the banner after 3 seconds
    setTimeout(() => {
      setShowBanner(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 relative">
      <motion.button
        onClick={handleClick}
        className="inline-block bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try for Free
      </motion.button>

      <AnimatePresence>
        {showBanner && (
          <motion.div 
            className="absolute top-full left-0 mt-4 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-xl z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Not available in your area yet... Coming soon!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link href="#features" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all">
        Learn More
      </Link>
    </div>
  );
};

export default AnimatedTryButton;
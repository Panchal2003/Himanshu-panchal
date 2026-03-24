import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SplashScreen({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-premiumBlue to-blue-900"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-6"
          >
            <img 
              src="/logo.png" 
              alt="B Financial Logo" 
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
            />
          </motion.div>

          {/* Company Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-white text-center px-4"
          >
           B Financial Solutions
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-premiumGold text-sm sm:text-base font-medium mt-2 text-center"
          >
            (Shri Radhey Enterprises)
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/80 text-xs sm:text-sm mt-4 text-center px-4"
          >
            Personal Loan Solutions
          </motion.p>

          {/* Loading Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8"
          >
            <div className="flex gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                className="w-2 h-2 bg-premiumGold rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                className="w-2 h-2 bg-premiumGold rounded-full"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                className="w-2 h-2 bg-premiumGold rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SplashScreen;

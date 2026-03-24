import { motion } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = ['Home', 'About', 'Services', 'Documents', 'Contact'];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between h-16 sm:h-18 lg:h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl bg-gradient-to-br from-premiumGold to-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0">
            <span className="text-white font-bold text-base sm:text-lg">B</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-sm sm:text-base lg:text-lg text-gray-800">B Financial Solutions</span>
            <span className="text-[10px] sm:text-xs text-premiumGold font-medium">Shri Radhey Enterprises</span>
          </div>
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-gray-500 hover:text-premiumGold transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-premiumGold hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </nav>
          
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 rounded-full bg-gradient-to-r from-premiumGold to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            <Phone size={14} />
            Apply
          </a>

          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-gray-100"
        >
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block py-2.5 px-3 text-sm font-medium text-gray-600 hover:text-premiumGold hover:bg-amber-50 rounded-lg transition-colors"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 mt-4 rounded-xl bg-gradient-to-r from-premiumGold to-amber-400 px-4 py-2.5 text-sm font-semibold text-white shadow-md"
              onClick={() => setOpen(false)}
            >
              <Phone size={14} />
              Apply Now
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;

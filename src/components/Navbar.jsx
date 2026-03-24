import { motion } from 'framer-motion';
import { Home, User, Briefcase, FileText, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Services', href: '#services', icon: Briefcase },
  { label: 'Documents', href: '#documents', icon: FileText },
  { label: 'Contact', href: '#contact', icon: Phone },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-8 py-2 sm:py-3">
        <a href="#home" className="flex items-center gap-2 text-slate-900">
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-premiumGold flex items-center justify-center shadow-soft">
            <span className="text-premiumBlue font-bold text-xs sm:text-sm">B</span>
          </div>
          <div className="hidden lg:block">
            <p className="font-bold text-sm sm:text-base tracking-wide">B Financial Solutions</p>
            <p className="text-xs text-slate-500 hidden sm:block">Shri Radhey Enterprises</p>
          </div>
          <div className="lg:hidden">
            <p className="font-bold text-xs sm:text-sm tracking-wide">B Financial</p>
          </div>
        </a>

        <button
          className="block rounded-md p-1.5 sm:p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} className="sm:size-24" /> : <Menu size={20} className="sm:size-24" />}
        </button>

        <nav className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg lg:relative lg:top-auto lg:left-auto lg:right-auto lg:bg-transparent lg:border-none lg:shadow-none lg:flex lg:items-center ${open ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-0.5 sm:gap-1 p-3 sm:p-4 text-xs sm:text-sm text-slate-700 lg:flex-row lg:gap-3 xl:gap-4 2xl:gap-6 lg:p-0 lg:items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-1.5 sm:gap-2 hover:text-premiumGold transition-all duration-300 py-2 lg:py-0 text-xs sm:text-sm" onClick={() => setOpen(false)}>
                    <Icon size={14} className="sm:size-16" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="mt-3 sm:mt-4 lg:mt-0 ml-3 sm:ml-4 lg:ml-4 xl:ml-6 mb-3 sm:mb-4 lg:mb-0 inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-gradient-to-r from-premiumGold to-yellow-300 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-premiumBlue shadow-soft hover:scale-105 hover:shadow-glow transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            <Phone size={14} className="sm:size-16" />
            Apply Now
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;

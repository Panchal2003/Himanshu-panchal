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
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <a href="#home" className="flex items-center gap-2 sm:gap-3 text-slate-900">
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-premiumGold flex items-center justify-center shadow-soft">
            <span className="text-premiumBlue font-bold text-sm sm:text-lg">B</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-base sm:text-lg tracking-wide">B Financial Solutions</p>
            <p className="text-xs text-slate-500">Shri Radhey Enterprises</p>
          </div>
          <div className="sm:hidden">
            <p className="font-bold text-sm tracking-wide">B Financial</p>
          </div>
        </a>

        <button
          className="block rounded-md p-2 text-slate-700 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg lg:relative lg:top-auto lg:left-auto lg:right-auto lg:bg-transparent lg:border-none lg:shadow-none lg:flex lg:items-center ${open ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-1 p-4 text-sm text-slate-700 lg:flex-row lg:gap-4 xl:gap-6 lg:p-0 lg:items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-2 hover:text-premiumGold transition-all duration-300 py-2 lg:py-0 text-sm xl:text-base" onClick={() => setOpen(false)}>
                    <Icon size={16} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="mt-4 lg:mt-0 ml-4 lg:ml-6 mb-4 lg:mb-0 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-premiumGold to-yellow-300 px-4 sm:px-5 py-2 text-sm font-semibold text-premiumBlue shadow-soft hover:scale-105 hover:shadow-glow transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            <Phone size={16} />
            Apply Now
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;

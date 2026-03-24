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
      className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm overflow-hidden"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex items-center justify-between px-3 lg:max-w-7xl lg:mx-auto lg:px-8">
        <a href="#home" className="flex items-center gap-2 text-slate-900 shrink-0">
          <div className="h-8 w-8 rounded-full bg-premiumGold flex items-center justify-center shadow-soft">
            <span className="text-premiumBlue font-bold text-sm">B</span>
          </div>
          <div className="lg:hidden">
            <p className="font-bold text-sm tracking-wide">B Financial</p>
          </div>
          <div className="hidden lg:block">
            <p className="font-bold text-lg tracking-wide">B Financial Solutions</p>
            <p className="text-xs text-slate-500">Shri Radhey Enterprises</p>
          </div>
        </a>

        <button
          className="block rounded-md p-1.5 text-slate-700 lg:hidden shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg lg:relative lg:top-auto lg:left-auto lg:right-auto lg:bg-transparent lg:border-none lg:shadow-none lg:flex lg:items-center ${open ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-0 p-3 text-xs text-slate-700 lg:flex-row lg:gap-6 lg:p-0 lg:items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-1.5 hover:text-premiumGold transition-all duration-300 py-2 lg:py-0" onClick={() => setOpen(false)}>
                    <Icon size={14} />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="hidden lg:mt-0 lg:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-premiumGold to-yellow-300 px-5 py-2 font-semibold text-premiumBlue shadow-soft hover:scale-105 hover:shadow-glow transition-all duration-300 lg:ml-6 mt-4"
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

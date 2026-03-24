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
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
        <a href="#home" className="flex items-center gap-2 text-slate-900 md:gap-3">
          <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-premiumGold flex items-center justify-center shadow-soft shrink-0">
            <span className="text-premiumBlue font-bold text-base md:text-lg">B</span>
          </div>
          <div className="overflow-hidden">
            <p className="font-bold text-sm md:text-lg tracking-wide truncate">B Financial</p>
            <p className="text-xs text-slate-500 hidden md:block">Shri Radhey Enterprises</p>
          </div>
        </a>

        <button
          className="block rounded-md p-2 text-slate-700 md:hidden shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={`absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent md:border-none md:shadow-none md:flex md:items-center ${open ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-3 text-sm text-slate-700 md:flex-row md:gap-6 md:p-0 md:items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-2 hover:text-premiumGold transition-all duration-300 py-2.5 md:py-0 border-b border-slate-100 md:border-0" onClick={() => setOpen(false)}>
                    <Icon size={16} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="m-3 md:m-0 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-premiumGold to-yellow-300 px-4 py-1.5 font-semibold text-premiumBlue shadow-soft hover:scale-105 hover:shadow-glow transition-all duration-300 md:ml-6 text-sm"
            onClick={() => setOpen(false)}
          >
            <Phone size={14} />
            Apply Now
          </a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;

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
      <div className="mx-auto flex items-center justify-between p-4 w-[95%] sm:w-full md:max-w-7xl md:px-8">
        <a href="#home" className="flex items-center gap-3 text-slate-900">
          <div className="h-10 w-10 rounded-full bg-premiumGold flex items-center justify-center shadow-soft">
            <span className="text-premiumBlue font-bold text-lg">B</span>
          </div>
          <div>
            <p className="font-bold text-lg tracking-wide">B Financial Solutions</p>
            <p className="text-xs text-slate-500">Shri Radhey Enterprises</p>
          </div>
        </a>

        <button
          className="block rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg md:relative md:top-auto md:left-auto md:right-auto md:bg-transparent md:border-none md:shadow-none md:flex md:items-center ${open ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col gap-4 p-4 text-sm text-slate-700 md:flex-row md:gap-6 md:p-0 md:items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <a href={item.href} className="flex items-center gap-2 hover:text-premiumGold transition-all duration-300 py-2 md:py-0" onClick={() => setOpen(false)}>
                    <Icon size={16} />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-premiumGold to-yellow-300 px-5 py-2 font-semibold text-premiumBlue shadow-soft hover:scale-105 hover:shadow-glow transition-all duration-300 md:ml-6 md:mt-0"
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

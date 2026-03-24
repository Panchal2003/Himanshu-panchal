import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-6 py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-premiumGold flex items-center justify-center">
                <span className="text-premiumBlue font-bold text-[10px] sm:text-xs">B</span>
              </div>
              <h3 className="text-xs sm:text-sm lg:text-base font-bold text-white">B Financial Solutions</h3>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed">
              Your trusted partner for personalized loan and financial consulting services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-[11px] sm:text-xs lg:text-sm font-semibold text-white mb-2 sm:mb-3">Quick Links</h5>
            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs">
              <li><a href="#home" className="hover:text-premiumGold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-premiumGold transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-premiumGold transition-colors">Services</a></li>
              <li><a href="#documents" className="hover:text-premiumGold transition-colors">Documents</a></li>
              <li><a href="#contact" className="hover:text-premiumGold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-[11px] sm:text-xs lg:text-sm font-semibold text-white mb-2 sm:mb-3">Contact Info</h5>
            <ul className="space-y-1.5 sm:space-y-2 text-[10px] sm:text-xs">
              <li className="flex items-start gap-2">
                <Phone size={12} className="sm:size-13 text-premiumGold shrink-0 mt-0.5" />
                <span>8512045678</span>
              </li>

              <li className="flex items-start gap-2">
                <Mail size={12} className="sm:size-13 text-premiumGold shrink-0 mt-0.5" />
                <a href="mailto:shruhan1190@gmail.com" className="hover:text-premiumGold transition-colors break-all">
                 b.financial.solutaions.01@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={12} className="sm:size-13 text-premiumGold shrink-0 mt-0.5" />
                <span className="break-words">B 102, Gamma 1, Greater Noida, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 lg:mt-8 border-t border-slate-700 pt-4 sm:pt-5 text-center text-[10px] sm:text-xs text-slate-400">
          © {new Date().getFullYear()} Shri Radhey Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

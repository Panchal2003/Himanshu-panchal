import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-premiumGold flex items-center justify-center">
                <span className="text-premiumBlue font-bold text-sm">B</span>
              </div>
              <h3 className="text-xl font-bold text-white">B Financial Solutions</h3>
            </div>
            <p className="text-sm text-slate-400">
              Your trusted partner for personalized loan and financial consulting services. Empowering dreams with transparent solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4 text-lg font-semibold text-white">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-premiumGold transition">Home</a></li>
              <li><a href="#about" className="hover:text-premiumGold transition">About</a></li>
              <li><a href="#services" className="hover:text-premiumGold transition">Services</a></li>
              <li><a href="#documents" className="hover:text-premiumGold transition">Documents</a></li>
              <li><a href="#contact" className="hover:text-premiumGold transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="mb-4 text-lg font-semibold text-white">Contact Info</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-premiumGold shrink-0" />
                <span>8512045678</span>
              </li>

              <li className="flex items-start gap-2">
                <Mail size={16} className="text-premiumGold shrink-0" />
                <a href="mailto:shruhan1190@gmail.com" className="hover:text-premiumGold transition break-words">
                  shruhan1190@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-premiumGold shrink-0" />
                <span className="break-words">
                  B 120, Gamma 1 Greater Noida
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Shri Radhey Enterprises (B Financial Solutions). All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

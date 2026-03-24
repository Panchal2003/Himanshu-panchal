import { useEffect, useState } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Documents from './components/Documents';
import Owner from './components/Owner';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 420);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-inter overflow-x-hidden">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Services />
        <WhyChooseUs />
        <Documents />
        <Owner />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/918512045678"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex h-12 sm:h-14 w-12 sm:w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl transition hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={20} className="sm:size-22" />
      </a>

      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 flex h-10 sm:h-12 w-10 sm:w-12 items-center justify-center rounded-full bg-premiumGold text-premiumBlue shadow-xl transition hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} className="sm:size-18" />
        </button>
      )}
    </div>
  );
}

export default App;

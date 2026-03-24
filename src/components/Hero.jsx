import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield, Clock, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function Hero() {
  const slides = [
    { img: '/hero1.png', title: 'Personal Loans', desc: 'Quick approval for your needs' },
    { img: '/hero2.png', title: 'Business Growth', desc: 'Expand your business with ease' },
    { img: '/hero3.png', title: 'Home Loans', desc: 'Make your dream home a reality' },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((curr) => (curr + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => setIndex((curr) => (curr - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((curr) => (curr + 1) % slides.length);

  const stats = [
    { icon: Users, number: '5000+', label: 'Happy Customers' },
    { icon: TrendingUp, number: '50Cr+', label: 'Loans Disbursed' },
    { icon: Shield, number: '100%', label: 'Secure Process' },
    { icon: Clock, number: '24hr', label: 'Fast Approval' },
  ];

  const scrollRef = useRef(null);

  // Auto scroll on mobile
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPos = 0;

    const autoScroll = () => {
      if (window.innerWidth < 768) {
        scrollPos += 1;
        if (scrollPos >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-br from-white via-blue-50/30 to-slate-50 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-premiumGold/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200/30 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-premiumGold/10 to-transparent blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full bg-premiumBlue/10 px-4 py-2 text-sm font-medium text-premiumBlue"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-premiumGold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-premiumGold"></span>
              </span>
              Trusted by 5000+ Customers
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
            >
              Your Dream Home, 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-premiumBlue to-blue-600"> Business Growth</span>
              <br/>Starts Here
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0"
            >
              Get instant loans with zero hidden charges. Quick approval, flexible EMIs, and dedicated support to help you achieve your financial goals.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { icon: '⚡', text: '2-Min Pre-Approval' },
                { icon: '🔒', text: '100% Secure' },
                { icon: '📋', text: 'Minimal Docs' },
                { icon: '💰', text: 'Best Interest Rates' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-slate-100">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-700">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a 
                href="#contact" 
                className="group relative inline-flex items-center gap-2 rounded-xl sm:rounded-2xl bg-gradient-to-r from-premiumBlue to-blue-700 px-4 py-2.5 sm:px-8 sm:py-4 font-bold text-white shadow-xl shadow-blue-500/30 transition-all hover:shadow-blue-500/50 hover:-translate-y-1 text-sm sm:text-base"
              >
                Apply Now
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="https://wa.me/918512045678" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-emerald-500 px-3 py-2.5 sm:px-6 sm:py-4 font-bold text-white shadow-lg transition-all hover:bg-emerald-600 hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Gallery - Hidden on Mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden md:block"
          >
            {/* Main Image Card */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[300px] sm:h-[380px] lg:h-[450px]"
                >
                  <img
                    src={slides[index].img}
                    alt={slides[index].title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-12 right-6 p-6 text-right">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">{slides[index].title}</h3>
                    <p className="text-white/80 mt-1">{slides[index].desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg transition-all hover:bg-white hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-slate-900 shadow-lg transition-all hover:bg-white hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-3 w-3 rounded-full transition-all ${index === i ? 'bg-premiumGold w-8' : 'bg-white/60 hover:bg-white'}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Stats Cards - Positioned inside image bounds */}
            <div className="absolute -bottom-3 left-2 sm:left-4 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-premiumGold/20">
                  <TrendingUp className="h-4 w-4 sm:h-6 sm:w-6 text-premiumGold" />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-slate-900">50Cr+</p>
                  <p className="text-[9px] sm:text-xs text-slate-500">Loans Disbursed</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-2 right-2 sm:-top-4 sm:right-4 bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-emerald-100">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-2xl font-bold text-slate-900">5000+</p>
                  <p className="text-[9px] sm:text-xs text-slate-500">Happy Customers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Marquee on Mobile, Grid on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-lg border border-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-premiumGold/20 to-premiumGold/5">
                  <stat.icon className="h-7 w-7 text-premiumGold" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">{stat.number}</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Marquee - Infinite Scroll */}
          <div className="md:hidden overflow-hidden">
            <div className="animate-marquee flex gap-4 w-max">
              {/* First set */}
              {stats.map((stat, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 w-[160px] rounded-2xl bg-white p-4 text-center shadow-lg border border-slate-100"
                >
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-premiumGold/20">
                    <stat.icon className="h-6 w-6 text-premiumGold" />
                  </div>
                  <p className="text-xl font-bold text-slate-900">{stat.number}</p>
                  <p className="text-[10px] text-slate-500">{stat.label}</p>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {stats.map((stat, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 w-[160px] rounded-2xl bg-white p-4 text-center shadow-lg border border-slate-100"
                >
                  <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-premiumGold/20">
                    <stat.icon className="h-6 w-6 text-premiumGold" />
                  </div>
                  <p className="text-xl font-bold text-slate-900">{stat.number}</p>
                  <p className="text-[10px] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

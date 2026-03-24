import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

function Hero() {
  const slides = useMemo(
    () => [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80',
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((curr) => (curr + 1) % slides.length);
    }, 2000); // 2 second auto slide
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setDirection(-1);
    setIndex((curr) => (curr - 1 + slides.length) % slides.length);
  };
  const nextSlide = () => {
    setDirection(1);
    setIndex((curr) => (curr + 1) % slides.length);
  };

  return (
    <section id="home" className="relative bg-white pt-24 pb-6">
      <div className="absolute -top-12 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-premiumGold/30 via-blue-100/25 to-white blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="inline-flex items-center rounded-full bg-premiumGold/20 px-3 py-1 text-sm font-semibold text-premiumBlue">Trusted Lending Partner</p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
            Your Trusted Partner for All Types of Loans
          </h1>
          <p className="max-w-xl text-slate-600">
            Fast approval, minimal documentation, and reliable service backed by expert financial advice.
          </p>
          <div className="grid gap-2 text-sm text-slate-600 md:text-base">
            <p>• 2-minute pre-approval process</p>
            <p>• No hidden charges, full transparency</p>
            <p>• Dedicated financial advisor support</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-3">
            <a href="#contact" className="rounded-xl bg-premiumGold px-6 py-3 font-semibold text-premiumBlue shadow-sm transition hover:shadow-md hover:-translate-y-0.5">Apply Now</a>
            <a href="#about" className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">Learn More</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 p-0 shadow-soft h-[420px]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-white" />
          <AnimatePresence mode="wait">
            <motion.img
              key={slides[index]}
              src={slides[index]}
              alt={`Office slide ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover"
              variants={{
                enter: { opacity: 0, scale: 1.03 },
                center: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.98 },
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 flex items-center px-3">
            <button
              onClick={prevSlide}
              className="rounded-full bg-white/90 p-2 text-slate-900 shadow transition hover:bg-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-3">
            <button
              onClick={nextSlide}
              className="rounded-full bg-white/90 p-2 text-slate-900 shadow transition hover:bg-white"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setIndex(dotIdx)}
                className={`h-2.5 w-2.5 rounded-full ${index === dotIdx ? 'bg-premiumGold' : 'bg-white/70'}`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

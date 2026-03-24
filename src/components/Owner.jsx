import { motion } from 'framer-motion';

function Owner() {
  return (
    <section id="owner" className="bg-slate-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex flex-col items-center gap-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft md:flex-row md:items-start"
        >
          <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-premiumGold shadow-md md:mb-0">
            <img
              src="/image.png"
              alt="Himanshu Panchal"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full text-left md:mt-2">
            <h3 className="text-3xl font-bold text-premiumBlue">Himanshu Panchal</h3>
            <p className="mb-4 text-lg font-semibold text-premiumGold">Founder & Lead Financial Consultant</p>
            <p className="mb-6 max-w-xl text-slate-600">
              A seasoned financial strategist delivering trusted, transparent loan and investment consulting for individuals and businesses. Specialized in personalized eligibility planning, fast approvals, and sustainable financial outcomes.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-100 p-4">
                <h4 className="text-sm font-semibold text-slate-800">Success rate</h4>
                <p className="mt-1 text-2xl font-bold text-premiumBlue">98%</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-4">
                <h4 className="text-sm font-semibold text-slate-800">Clients onboarded</h4>
                <p className="mt-1 text-2xl font-bold text-premiumBlue">2,500+</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-4">
                <h4 className="text-sm font-semibold text-slate-800">Average approval</h4>
                <p className="mt-1 text-2xl font-bold text-premiumBlue">24 hrs</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-4">
                <h4 className="text-sm font-semibold text-slate-800">Document accuracy</h4>
                <p className="mt-1 text-2xl font-bold text-premiumBlue">99.9%</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-lg bg-premiumGold px-5 py-2 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="rounded-lg border border-premiumGold px-5 py-2 text-sm font-semibold text-premiumBlue transition hover:bg-premiumGold/10"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Owner;

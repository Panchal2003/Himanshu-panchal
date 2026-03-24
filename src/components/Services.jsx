import { motion } from 'framer-motion';
import { Home, Truck, Building, ShieldCheck, BookOpen } from 'lucide-react';

const services = [
  {
    title: 'Home Loan',
    icon: Home,
    description: 'Competitive rates for your dream home.',
    color: 'from-blue-50 to-blue-100',
    quickFact: '2 min pre-check',
    features: ['Low interest rates', 'Up to 20-year tenure', 'Minimal docs required'],
  },
  {
    title: 'Car Loan',
    icon: Truck,
    description: 'Flexible terms for new and used vehicles.',
    color: 'from-indigo-50 to-indigo-100',
    quickFact: '70% auto-approved',
    features: ['Instant approval', 'No prepayment charges', 'Easy EMIs'],
  },
  {
    title: 'Freehold Property Loan',
    icon: Building,
    description: 'Loan against premium freehold assets.',
    color: 'from-emerald-50 to-emerald-100',
    quickFact: 'High LTV for owners',
    features: ['High funding value', 'Flexible payout', 'No hidden fees'],
  },
  {
    title: 'Loan Against Property',
    icon: ShieldCheck,
    description: 'Low interest property backed loans.',
    color: 'from-amber-50 to-amber-100',
    quickFact: 'Best EMI options',
    features: ['Collateral-backed', 'Fixed rate', 'Fast disbursal'],
  },
  {
    title: 'Education Loan',
    icon: BookOpen,
    description: 'Support for higher education expenses.',
    color: 'from-teal-50 to-teal-100',
    quickFact: 'No co-applicant',
    features: ['Covers tuition + living', 'Low interest', 'Easy documentation'],
  },
  {
    title: 'Business Loan',
    icon: Building,
    description: 'Capital support with fast approval.',
    color: 'from-violet-50 to-violet-100',
    quickFact: '24-hour disbursal',
    features: ['Working capital', 'Expansion finance', 'Flexible tenure'],
  },
];

function Services() {
  return (
    <section id="services" className="bg-blue-50 py-12 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 text-center">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-premiumGold">What We Provide</p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">Comprehensive Loan Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm sm:text-base">
            Customized finance solutions built for individuals and businesses — fast approval, transparent process, and expert support.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-soft transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${service.color} p-4 sm:p-5`}>
                  <Icon size={24} className="sm:size-26 text-premiumBlue" />
                </div>
                <div className="rounded-2xl sm:rounded-3xl rounded-tl-none bg-white p-4 sm:p-6 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between">
                  <div>
                    <h3 className="mb-1.5 sm:mb-2 text-lg sm:text-xl font-bold tracking-tight text-premiumBlue border-l-4 border-premiumGold pl-2 sm:pl-3">
                      {service.title}
                    </h3>
                    <p className="mb-2 sm:mb-3 text-sm sm:text-base text-slate-700">{service.description}</p>
                    <ul className="mb-3 sm:mb-4 space-y-0.5 sm:space-y-1 text-xs sm:text-sm text-slate-600">
                      {service.features.map((feat, i) => (
                        <li key={i}>• {feat}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center rounded-full bg-premiumBlue px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-sm transition hover:bg-premiumGold hover:text-premiumBlue"
                    >
                      Learn More
                    </a>
                    <div className="mt-3 sm:mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-3 sm:px-4 py-2 sm:py-3">
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Quick facts</span>
                      <span className="rounded-full bg-premiumGold/20 px-2 sm:px-2.5 py-0.5 sm:py-1 text-xs font-semibold text-premiumGold">
                        {service.quickFact}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

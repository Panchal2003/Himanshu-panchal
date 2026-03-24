import { motion } from 'framer-motion';
import { CreditCard, FileText, Archive, MapPin } from 'lucide-react';

const docs = [
  {
    title: 'Aadhar / PAN Card',
    description: 'Government ID proof for identity verification and tax registration.',
    icon: CreditCard,
  },
  {
    title: 'Income Proof',
    description: 'Latest salary slips, Form 16, or income certificate for financial validation.',
    icon: FileText,
  },
  {
    title: 'Bank Statement',
    description: '3-6 months bank statements to confirm your cash flow and stability.',
    icon: Archive,
  },
  {
    title: 'Property Documents',
    description: 'Title deed, mutation, or NOC for the collateral property in your name.',
    icon: MapPin,
  },
];

function Documents() {
  return (
    <section id="documents" className="bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-premiumGold">Essential paperwork</p>
          <h2 className="text-4xl font-bold text-premiumBlue md:text-5xl">Documents Required</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            Submit the following documents to ensure a smooth application process. Each item is validated using secure, industry-standard checks.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {docs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex h-full flex-col items-center justify-between overflow-hidden rounded-2xl border border-white/20 bg-white p-6 text-center shadow-soft transition hover:scale-[1.03] hover:border-premiumGold hover:shadow-glow"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-premiumGold/20 via-white/20 to-premiumGold/10 text-premiumGold shadow-soft transition-transform duration-300 hover:scale-110 mx-auto">
                  <Icon size={28} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-premiumBlue">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
                <span className="mt-4 inline-flex items-center justify-center rounded-full bg-premiumGold/15 px-3 py-1 text-xs font-medium text-premiumGold mx-auto">
                  Required
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Documents;

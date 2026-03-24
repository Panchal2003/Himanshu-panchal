import { motion } from 'framer-motion';
import { Zap, Percent, FileText, Shield, Headphones } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Fast Loan Approval', description: 'Quick decision with minimal waiting time.', bgColor: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: Percent, title: 'Low Interest Rates', description: 'Competitive rates for all loan types.', bgColor: 'bg-green-50', iconColor: 'text-green-600' },
  { icon: FileText, title: 'Minimal Documentation', description: 'Simplified process with fewer requirements.', bgColor: 'bg-yellow-50', iconColor: 'text-yellow-600' },
  { icon: Shield, title: 'Trusted Service', description: 'Ethical and transparent financial advice.', bgColor: 'bg-purple-50', iconColor: 'text-purple-600' },
  { icon: Headphones, title: 'Customer Support', description: '24/7 support for client queries.', bgColor: 'bg-red-50', iconColor: 'text-red-600' },
];

function WhyChooseUs() {
  return (
    <section id="why" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Why Choose Us</h2>
        <div className="space-y-4">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`flex items-center rounded-lg p-4 shadow-sm transition hover:shadow-md ${f.bgColor}`}
            >
              <Icon size={32} className={`mr-4 ${f.iconColor}`} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="text-slate-600">{f.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Users, Award, TrendingUp, Heart } from 'lucide-react';

function About() {
  return (
    <section id="about" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-premiumGold">Who we are</p>
          <h2 className="text-4xl font-bold text-premiumBlue md:text-5xl">About B Financial Solutions</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Shri Radhey Enterprises brings 8+ years of expertise in financial services, helping individuals and businesses achieve their financial goals with trust and transparency.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <h3 className="mb-4 text-2xl font-bold text-premiumBlue">Our Mission</h3>
              <p className="text-slate-600">
                To democratize access to financial services by providing personalized, secure, and efficient loan solutions that empower our clients to build a better future.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: ShieldCheck, title: 'Trusted & Secure', desc: 'Protected approvals with transparent terms.', color: 'bg-premiumGold/20 text-premiumGold' },
                { icon: Clock, title: 'Fast Processing', desc: '2-minute pre-approval and quick disbursal.', color: 'bg-premiumBlue/20 text-premiumBlue' },
                { icon: Users, title: 'Dedicated Advisors', desc: 'Personalized guidance from certified specialists.', color: 'bg-emerald-100 text-emerald-600' },
                { icon: Award, title: 'Award Winning', desc: 'Recognized for excellence in customer service.', color: 'bg-purple-100 text-purple-600' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft hover:shadow-glow transition-shadow"
                  >
                    <div className={`rounded-lg p-2 ${item.color}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-premiumGold/20 text-premiumGold">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-premiumBlue">98% Success Rate</p>
                  <p className="text-sm text-slate-600">Client satisfaction and approval success</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <img
                src="/public/about1.png"
                alt="Finance illustration"
                className="h-64 w-full rounded-2xl object-cover"
              />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <Heart size={20} />
                </div>
                <h4 className="text-lg font-semibold text-premiumBlue">Why Choose Us?</h4>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Personalized loan solutions tailored to your needs</li>
                <li>• Transparent processes with no hidden fees</li>
                <li>• 24/7 support from experienced financial advisors</li>
                <li>• Quick approval and disbursement within hours</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

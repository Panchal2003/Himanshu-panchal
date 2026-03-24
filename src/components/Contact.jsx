import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-premiumGold">Get in touch</p>
          <h2 className="text-4xl font-bold text-premiumBlue md:text-5xl">Contact Us</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We are here to help you with personalized finance solutions. Reach us through any channel below and we will respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {[
              { icon: Phone, title: 'Phone', value: '8512045678' },
              { icon: MessageCircle, title: 'WhatsApp', value: '8512045678' },
              { icon: Mail, title: 'Email', value: 'shruhan1190@gmail.com', link: 'mailto:shruhan1190@gmail.com' },
              { icon: MapPin, title: 'Address', value: 'B 120, Gamma 1 Greater Noida' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-premiumGold/15 text-premiumGold">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-base font-medium text-premiumBlue hover:text-premiumGold">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-slate-700">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.264899832637!2d77.44925327574557!3d28.573713682460506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1946e531bee9%3A0xace54c7ddce9517f!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700834947104!5m2!1sen!2sin"
                className="h-48 w-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-4 text-2xl font-semibold text-premiumBlue">Send a Message</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Loan Type</label>
              <select
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30"
                required
              >
                <option value="">Select Loan Type</option>
                <option value="personal">Personal Loan</option>
                <option value="home">Home Loan</option>
                <option value="business">Business Loan</option>
                <option value="education">Education Loan</option>
                <option value="car">Car Loan</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <textarea
                className="h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30"
                placeholder="Describe your requirements"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-xl bg-gradient-to-r from-premiumGold to-yellow-300 px-4 py-2 text-base font-semibold text-premiumBlue shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Submit Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

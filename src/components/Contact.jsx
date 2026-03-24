import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-10 text-center">
          <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-widest text-premiumGold">Get in touch</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-premiumBlue">Contact Us</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm sm:text-base">
            We are here to help you with personalized finance solutions. Reach us through any channel below and we will respond within 24 hours.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
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
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-premiumGold/15 text-premiumGold shrink-0">
                    <Icon size={14} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold text-slate-900">{item.title}</h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm font-medium text-premiumBlue hover:text-premiumGold break-words"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-slate-700 break-words">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200 bg-white shadow-soft">
              <iframe
                title="Office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.264899832637!2d77.44925327574557!3d28.573713682460506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1946e531bee9%3A0xace54c7ddce9517f!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700834947104!5m2!1sen!2sin"
                className="h-40 sm:h-48 w-full border-0"
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
            className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-soft"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-premiumBlue">Send a Message</h3>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30 text-sm"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-slate-700">Email Address</label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30 text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-3 sm:mt-4">
              <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-slate-700">Phone Number</label>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30 text-sm"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div className="mt-3 sm:mt-4">
              <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-slate-700">Loan Type</label>
              <select
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30 text-sm"
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
            <div className="mt-3 sm:mt-4">
              <label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-medium text-slate-700">Message</label>
              <textarea
                className="h-24 sm:h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 sm:px-4 py-2 outline-none transition focus:border-premiumGold focus:ring-2 focus:ring-premiumGold/30 text-sm"
                placeholder="Describe your requirements"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 sm:mt-5 w-full rounded-xl bg-gradient-to-r from-premiumGold to-yellow-300 px-4 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-premiumBlue shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
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

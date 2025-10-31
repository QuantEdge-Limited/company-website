'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Security-First Commerce',
    description: 'PCI-DSS compliant architectures, tokenized payments, and end-to-end encryption to protect transactions and build trust.',
  },
  {
    title: 'Performance = Revenue',
    description: 'We optimize for speed — because every 100ms delay can cost you 1% in sales.',
  },
  {
    title: 'Full-Stack Ownership',
    description: 'From frontend UX to backend APIs and cloud infrastructure — we own the entire stack for seamless integration.',
  },
  {
    title: 'Scalable from Day One',
    description: 'Built to handle Black Friday traffic spikes, global expansion, and new product launches without breaking a sweat.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose Us for Commerce?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We don’t just build stores — we build revenue engines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
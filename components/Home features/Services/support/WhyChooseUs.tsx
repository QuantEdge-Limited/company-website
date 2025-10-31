'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Proactive, Not Reactive',
    description: 'We prevent issues before they disrupt your business — with predictive monitoring and maintenance.',
  },
  {
    title: 'Enterprise Expertise, SMB Pricing',
    description: 'Get the same level of care as Fortune 500 companies — without the enterprise price tag.',
  },
  {
    title: 'Single Point of Contact',
    description: 'No more juggling vendors. We manage everything — from your Wi-Fi to your cloud apps.',
  },
  {
    title: 'Transparent & Predictable',
    description: 'Flat-rate monthly pricing with no surprise fees. You always know what you’re paying for.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose Our Managed Services?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We become your trusted IT department — so you never have to worry about downtime again.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
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
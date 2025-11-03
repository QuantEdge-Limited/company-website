'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Engineer + Strategist',
    description: 'Unlike pure consultants, I’ve built and scaled systems myself, so my advice is grounded in real-world execution.',
  },
  {
    title: 'Vendor-Neutral Guidance',
    description: 'We recommend solutions based on your needs, not commissions or partnerships.',
  },
  {
    title: 'Focus on Adoption',
    description: 'Technology fails without people. We design for usability, training, and cultural fit from day one.',
  },
  {
    title: 'Measurable Outcomes',
    description: 'We define KPIs upfront thus reduced costs, faster time-to-market, higher user satisfaction; and track them.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why Partner With Us?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We bridge the gap between strategy and execution so your transformation actually happens.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
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
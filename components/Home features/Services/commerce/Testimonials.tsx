'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Chloe R.',
    role: 'Founder, Fashion Brand',
    quote: "Our new store loads in under 1s and converted 35% more visitors. Revenue doubled in 3 months.",
    avatar: 'C',
  },
  {
    name: 'Kwame B.',
    role: 'CTO, Fintech Startup',
    quote: "Their payment system handles 10K+ transactions/day with zero downtime and full PCI compliance.",
    avatar: 'K',
  },
  {
    name: 'Nadia H.',
    role: 'COO, Subscription Box Co.',
    quote: "The billing automation reduced failed payments by 60% and saved us 20+ hours/week in manual work.",
    avatar: 'N',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Built for Business Results
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our clients see real impact — higher sales, lower costs, and happier customers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{testimonial.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
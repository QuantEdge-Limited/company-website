'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Elena R.',
    role: 'Office Manager, Law Firm',
    quote: "Since they took over our IT, we’ve had zero downtime. Even our printers work better!",
    avatar: 'E',
  },
  {
    name: 'Victor M.',
    role: 'Founder, Marketing Agency',
    quote: "Their 24/7 monitoring caught a ransomware attempt at 2 AM. They stopped it before anyone woke up.",
    avatar: 'V',
  },
  {
    name: 'Grace T.',
    role: 'Operations Lead, Nonprofit',
    quote: "We saved 60% on IT costs by switching to their managed service — and got better support than before.",
    avatar: 'G',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Peace of Mind, Guaranteed
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Businesses of all sizes rely on us to keep their technology running — quietly, reliably, and affordably.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              // viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
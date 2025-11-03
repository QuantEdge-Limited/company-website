'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Marcus T.',
    role: 'CISO, Financial Services',
    quote: "Their pentest found a critical API flaw we’d missed for months. Fixed it before any breach occurred.",
    avatar: 'M',
  },
  {
    name: 'Aisha K.',
    role: 'CEO, HealthTech Startup',
    quote: "We passed our ISO 27001 audit on the first try — thanks to their clear roadmap and documentation.",
    avatar: 'A',
  },
  {
    name: 'Jordan P.',
    role: 'IT Director, E-commerce',
    quote: "After a ransomware scare, they rebuilt our entire security posture. We’ve had zero incidents since.",
    avatar: 'J',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Trusted by Security-Conscious Leaders
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          When your reputation and data are on the line, you need a partner who delivers real protection — not just promises.
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
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
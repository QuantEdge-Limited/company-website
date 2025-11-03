'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Isaiah M.',
    role: 'Founder, HealthTech Startup',
    quote: "Our app hit 4.9 stars on the App Store. User retention is 2x industry average — thanks to their UX focus.",
    avatar: 'I',
  },
  {
    name: 'Zoe L.',
    role: 'Product Lead, Retail Brand',
    quote: "They delivered our cross-platform app 3 weeks early. It handles 50K+ users with zero crashes.",
    avatar: 'Z',
  },
  {
    name: 'Rafael D.',
    role: 'CEO, Logistics Company',
    quote: "The offline-first mobile app lets our drivers work in remote areas — and sync data when back online. Game-changer.",
    avatar: 'R',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Loved by Users, Trusted by Businesses
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our apps don’t just work — they drive engagement, loyalty, and growth.
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
                <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
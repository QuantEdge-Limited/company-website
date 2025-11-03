'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Thomas W.',
    role: 'CEO, Manufacturing Co.',
    quote: "Their ERP roadmap saved us 6 months of failed vendor evaluations. We’re live in 4 months with full team adoption.",
    avatar: 'T',
  },
  {
    name: 'Fatima N.',
    role: 'Operations Director, Healthcare',
    quote: "They didn’t just implement a CRM; they redesigned our patient onboarding flow, cutting admin time by 50%.",
    avatar: 'F',
  },
  {
    name: 'George L.',
    role: 'CIO, Financial Services',
    quote: "Finally, a consultant who speaks both ‘business’ and ‘tech’. Their strategy got board approval on the first try.",
    avatar: 'G',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Trusted by Leaders
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Executives choose us because we deliver clarity, confidence, and results. We are not just slides.
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
                <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
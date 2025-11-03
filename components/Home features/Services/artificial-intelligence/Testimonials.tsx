'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Rachel M.',
    role: 'Head of Marketing, E-commerce',
    quote: "Their churn prediction model helped us reduce customer attrition by 22% in just 3 months.",
    avatar: 'R',
  },
  {
    name: 'Daniel O.',
    role: 'COO, Logistics Firm',
    quote: "The demand forecasting AI cut our inventory costs by 30% while improving on-time delivery.",
    avatar: 'D',
  },
  {
    name: 'Priya S.',
    role: 'Product Lead, SaaS Platform',
    quote: "The NLP chatbot handles 80% of support queries and our team can now focus on complex issues.",
    avatar: 'P',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Real Results, Real Impact
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Our clients don’t just get AI solutions; they get measurable improvements in efficiency, revenue, and customer experience.
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
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
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
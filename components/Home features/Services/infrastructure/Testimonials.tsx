'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'James R.',
    role: 'CTO, Logistics Company',
    quote: "They migrated our entire on-premise stack to AWS in 6 weeks with zero downtime. Our costs dropped by 40%.",
    avatar: 'J',
  },
  {
    name: 'Amina K.',
    role: 'DevOps Lead, SaaS Startup',
    quote: "Their Terraform modules and CI/CD pipeline cut our deployment time from hours to minutes.",
    avatar: 'A',
  },
  {
    name: 'Michael T.',
    role: 'IT Director, Financial Services',
    quote: "With their monitoring setup, we caught a critical security flaw before it became a breach.",
    avatar: 'M',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Trusted by Industry Leaders
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Businesses rely on us to keep their digital infrastructure running — securely and efficiently.
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
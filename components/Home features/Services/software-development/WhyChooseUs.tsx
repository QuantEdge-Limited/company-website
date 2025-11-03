"use client";
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Tailored Solutions',
    description: 'No one-size-fits-all. Every project is custom-built to meet your unique business needs and goals.',
  },
  {
    title: 'Full-Stack Expertise',
    description: 'From front-end to back-end, cloud to DevOps — we handle every layer of your software stack.',
  },
  {
    title: 'Scalable Architecture',
    description: 'We build systems that grow with you — modular, cloud-native, and ready for millions of users.',
  },
  {
    title: 'Security First',
    description: 'Security isn’t an afterthought — it’s baked into every line of code, every deployment, every decision.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why Choose Us?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We don’t just write code - we solve problems, drive innovation, and deliver measurable results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
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
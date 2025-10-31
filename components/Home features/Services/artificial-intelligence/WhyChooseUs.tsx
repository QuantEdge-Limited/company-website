'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Full-Stack AI Integration',
    description: 'We don’t just build models — we embed them into your apps, workflows, and dashboards for real-world impact.',
  },
  {
    title: 'Explainable & Ethical AI',
    description: 'Transparent models you can trust, with bias detection, fairness checks, and clear decision logic.',
  },
  {
    title: 'Scalable Cloud Architecture',
    description: 'Models deployed on AWS with auto-scaling, monitoring, and cost optimization built in.',
  },
  {
    title: 'Business-First Approach',
    description: 'We measure success by business outcomes — not just accuracy, but revenue, efficiency, and user satisfaction.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Why Partner With Us?
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We bridge the gap between data science and real-world business value.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
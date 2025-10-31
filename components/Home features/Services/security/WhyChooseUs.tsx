'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Builder + Defender Mindset',
    description: 'As a full-stack developer, I understand how systems are built — so I know exactly where they can break.',
  },
  {
    title: 'Cloud-Native Security',
    description: 'Deep AWS expertise ensures your cloud infrastructure follows security best practices from day one.',
  },
  {
    title: 'No Fear-Mongering',
    description: 'We provide clear, actionable insights — not alarmist reports. Security should enable business, not block it.',
  },
  {
    title: 'End-to-End Ownership',
    description: 'From code to cloud to compliance — we secure every layer of your digital ecosystem.',
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
          We don’t just find vulnerabilities — we build resilient systems that withstand real-world threats.
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
'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'AWS Certified Expertise',
    description: 'As an AWS Cloud Practitioner, I design architectures that are secure, scalable, and cost-optimized from day one.',
  },
  {
    title: 'Automation-First Mindset',
    description: 'We eliminate manual toil with Infrastructure as Code, CI/CD, and policy-as-code for consistency and speed.',
  },
  {
    title: 'Security Built In',
    description: 'From IAM policies to network isolation and encryption, security is embedded at every layer.',
  },
  {
    title: '24/7 Reliability',
    description: 'We implement monitoring, alerting, and disaster recovery plans to ensure your systems never go dark.',
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
          We don’t just manage servers — we engineer digital resilience.
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
'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Penetration Testing & Vulnerability Scanning',
    description: 'Identify and fix security gaps before attackers do — with manual and automated testing across web, mobile, and APIs.',
    icon: '🔍',
  },
  {
    title: 'Security Architecture & Zero Trust',
    description: 'Design secure-by-default systems using Zero Trust principles, least-privilege access, and micro-segmentation.',
    icon: '🛡️',
  },
  {
    title: 'Incident Response & Forensics',
    description: '24/7 readiness with playbooks, containment strategies, and post-breach analysis to minimize damage and prevent recurrence.',
    icon: '🚨',
  },
  {
    title: 'Compliance & Audits',
    description: 'Achieve and maintain GDPR, ISO 27001, NIST, or PCI-DSS compliance with documentation, controls, and training.',
    icon: '📜',
  },
];

export default function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
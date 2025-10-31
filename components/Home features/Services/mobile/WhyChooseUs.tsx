'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'User-Centric Design',
    description: 'We design for human behavior — not just screens. Every tap, swipe, and animation is crafted to delight.',
  },
  {
    title: 'Performance Obsession',
    description: '60 FPS animations, instant load times, and minimal battery drain — because users abandon slow apps.',
  },
  {
    title: 'Full App Lifecycle Support',
    description: 'From App Store submission to push notifications, analytics, and feature updates — we’ve got you covered.',
  },
  {
    title: 'Security Built In',
    description: 'Secure data storage, encrypted APIs, and biometric auth to protect user privacy and comply with regulations.',
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
          We don’t just code apps — we craft experiences that keep users coming back.
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
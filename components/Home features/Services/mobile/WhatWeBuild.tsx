'use client';

import { motion } from 'framer-motion';

const solutions = [
  {
    title: 'Native iOS Apps',
    description: 'High-performance apps built with Swift and SwiftUI — leveraging the full power of Apple’s ecosystem.',
    icon: '📱',
  },
  {
    title: 'Native Android Apps',
    description: 'Fast, responsive apps using Kotlin and Jetpack Compose — optimized for all device sizes and OS versions.',
    icon: '🤖',
  },
  {
    title: 'Cross-Platform Apps',
    description: 'Single codebase for iOS & Android using React Native or Flutter — with near-native performance and faster time-to-market.',
    icon: '🔄',
  },
  {
    title: 'Offline-First & Real-Time Apps',
    description: 'Apps that work seamlessly offline and sync data in real-time — perfect for field service, healthcare, and logistics.',
    icon: '🌐',
  },
];

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
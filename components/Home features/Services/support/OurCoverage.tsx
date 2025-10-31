'use client';

import { motion } from 'framer-motion';

const coverage = [
  { area: 'Network Infrastructure', status: 'Fully Managed' },
  { area: 'Servers & Workstations', status: 'Patched & Secured' },
  { area: 'Cloud Environments (AWS/Azure)', status: 'Monitored & Optimized' },
  { area: 'Email & Collaboration Tools', status: 'Supported & Secured' },
  { area: 'Security & Firewalls', status: 'Updated & Audited' },
  { area: 'Custom Business Applications', status: 'Maintained & Enhanced' },
];

export default function OurCoverage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Full Technology Coverage
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We don’t just fix problems — we manage your entire technology ecosystem.
        </p>
        <div className="space-y-4">
          {coverage.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
            >
              <span className="text-gray-800 font-medium">{item.area}</span>
              <span className="text-green-600 font-semibold">{item.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
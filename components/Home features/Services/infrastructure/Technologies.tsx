'use client';

import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaLinux } from 'react-icons/fa6';
import { SiAmazoncloudwatch, SiGithubactions, SiKubernetes, SiPrometheus, SiTerraform } from 'react-icons/si';

const techStack = [
  { name: 'AWS', logo: <FaAws /> },
  { name: 'Terraform', logo: <SiTerraform /> },
  { name: 'Docker', logo: <FaDocker /> },
  { name: 'Kubernetes', logo: <SiKubernetes /> },
  { name: 'GitHub Actions', logo: <SiGithubactions /> },
  { name: 'Prometheus', logo: <SiPrometheus /> },
  { name: 'CloudWatch', logo: <SiAmazoncloudwatch /> },
  { name: 'Linux', logo: <FaLinux /> },
];

export default function Technologies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Infrastructure Stack
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We build cloud-native, automated, and observable systems using industry-standard tools.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              // viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="text-5xl mb-3">{tech.logo}</div>
              <h3 className="font-medium text-gray-900">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { FaAws, FaPython } from 'react-icons/fa6';
import { RiBarChart2Fill } from 'react-icons/ri';
import { SiApachekafka, SiFoodpanda, SiPytorch, SiScikitlearn, SiTensorflow } from 'react-icons/si';

const techStack = [
  { name: 'Python', logo: <FaPython /> },
  { name: 'TensorFlow', logo: <SiTensorflow /> },
  { name: 'PyTorch', logo: <SiPytorch /> },
  { name: 'scikit-learn', logo: <SiScikitlearn /> },
  { name: 'Pandas', logo: <SiFoodpanda /> },
  { name: 'AWS SageMaker', logo: <FaAws /> },
  { name: 'Apache Kafka', logo: <SiApachekafka /> },
  { name: 'Power BI', logo: <RiBarChart2Fill /> },
];

export default function Technologies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our AI & Data Stack
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We combine open-source power with cloud scalability to build intelligent systems that learn, adapt, and deliver.
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
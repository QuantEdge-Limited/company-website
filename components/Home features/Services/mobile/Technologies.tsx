'use client';

import { motion } from 'framer-motion';
import { SiAwsamplify, SiFirebase, SiGraphql, SiKotlin, SiRedux, SiSwift } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaFlutter } from "react-icons/fa6";

const techStack = [
  { name: 'Swift', logo: <SiSwift className='text-orange-500' /> },
  { name: 'Kotlin', logo: <SiKotlin className='text-purple-500' /> },
  { name: 'React Native', logo: <TbBrandReactNative /> },
  { name: 'Flutter', logo: <FaFlutter className='text-cyan-400' /> },
  { name: 'Firebase', logo: <SiFirebase className='text-yellow-500' /> },
  { name: 'GraphQL', logo: <SiGraphql className='text-pink-500' /> },
  { name: 'AWS Amplify', logo: <SiAwsamplify className='text-purple-500' /> },
  { name: 'Redux', logo: <SiRedux className='text-violet-400' /> },
];

export default function Technologies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Mobile Tech Stack
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We choose the right tools for your goals — whether it’s native performance or cross-platform efficiency.
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
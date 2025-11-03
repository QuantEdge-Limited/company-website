"use client";
import { motion } from 'framer-motion';
import { FaAws, FaNode, FaPython, FaReact } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { SiMongodb, SiTypescript } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';


const techStack = [
  { name: 'React', logo: <FaReact className='text-cyan-500' /> },
  { name: 'Next.js', logo: <RiNextjsFill /> },
  { name: 'Node.js', logo: <FaNode className='text-green-500' /> },
  { name: 'TypeScript', logo: <SiTypescript className='text-blue-500' /> },
  { name: 'Python', logo: <FaPython className='text-cyan-700' /> },
  { name: 'AWS', logo: <FaAws className='text-amber-500' /> },
  { name: 'PostgreSQL', logo: <BiLogoPostgresql className='text-sky-500' /> },
  { name: 'MongoDB', logo: <SiMongodb className='text-green-500' /> },
];

export default function Technologies() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Our Tech Stack
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We leverage industry-leading technologies to build future-proof, scalable, and secure applications.
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
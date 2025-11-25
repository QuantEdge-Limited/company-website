"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* LEFT SIDE: CEO IMAGE + CEO ABOUT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/3 flex flex-col items-center gap-6"
          >
            {/* CEO AVATAR */}
            <motion.div
              className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-cyan-100 hover:ring-cyan-200 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src="/CEO.png"
                alt="CEO Samuel Mungai"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* CEO ABOUT */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-cyan-600 mb-2">Meet Our CEO</h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                Samuel Mungai is a Software Engineer and entrepreneur with a background in Economics. As founder and CEO of <span className="text-cyan-600 font-semibold">QuantEdge Limited</span>, he leads the company's mission to drive digital transformation across Africa.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: COMPANY ABOUT + LOGO */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-2/3 flex flex-col gap-6"
          >
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <img
                src="/BGlogo.png"
                alt="QuantEdge Logo"
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About <span className="text-cyan-600">QuantEdge</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              QuantEdge Limited is a premier technology solutions provider dedicated to transforming businesses through innovation. We specialize in custom software development, digital strategy, and enterprise solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              With a team of expert developers and strategists, we help organizations navigate the digital landscape and achieve their business objectives through scalable and robust technology.
            </p>

            {/* ICON HIGHLIGHTS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              {[
                { icon: Target, label: "Vision Driven" },
                { icon: Lightbulb, label: "Innovation First" },
                { icon: Users, label: "People Focused" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.08, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-6 rounded-2xl bg-gray-50 shadow-lg border border-gray-200 text-center hover:shadow-xl transition-all"
                >
                  <item.icon className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-800">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import React from "react";
import {
  Heart,
  Users,
  Target,
  TrendingUp,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import {
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import { teamMembers } from "@/constants";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function CultureTeamSection() {
  const culturalPillars = [
    {
      icon: Heart,
      title: "Innovation First",
      description:
        "We challenge assumptions and embrace creative problem-solving in everything we do.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description:
        "Our best work happens when diverse minds come together with shared purpose.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Target,
      title: "Continuous Growth",
      description:
        "We invest in our people's development and celebrate learning at every stage.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Human-Centered",
      description:
        "Technology serves people. We build with empathy, purpose, and social impact in mind.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const socialIcons = {
    linkedin: FaLinkedin,
    twitter: FaSquareXTwitter,
    github: FaGithub,
    dribbble: FaDribbble,
    instagram: FaSquareInstagram,
  };

  return (
    <section
      id="culture"
      className="py-10 bg-linear-to-b from-gray-50 to-white"
    >
      <div className="px-4 sm:px-8 lg:px-16 xl:px-24 w-full max-w-none">
        {/* Header */}
        <div className="text-center mb-8 md:mb-14">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-gray-900">
            Culture & Work Ethic
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-teal-500 mx-auto"></div>
        </div>

        {/* Core Identity & Quote */}
        <div>
          <div className="grid lg:grid-cols-2 gap-4 mb-8 md:mb-10">
            <div className="bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
                Core Identity
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                Founded in <strong>2025</strong> by{" "}
                <strong>Samuel Ngige Mungai</strong>, a software
                engineer and entrepreneur, <strong>QUANTEDGE</strong> was born
                from a simple idea, that technology should empower, not
                overwhelm. We bridge creativity and engineering to help African
                businesses thrive in a rapidly evolving digital world.
              </p>
            </div>

            <div className="bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-900">
                Our Story
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                From startups to enterprises, we partner with forward-thinking
                leaders to craft transformative digital solutions that drive
                growth, efficiency, and impact — shaping a smarter, more
                connected future for Africa and beyond.
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-linear-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 flex items-center">
            <div className="relative">
              <svg
                className="absolute -top-2 -left-2 w-8 h-8 text-purple-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-700 italic text-sm md:text-base leading-relaxed pl-6">
                "We do not just build software; we challenge convention,
                reimagine possibilities, and design with purpose — turning
                visionary ideas into real, measurable impact."
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Pillars */}
        <div className="mb:8 md:mb-10">
          <h3 className="text-lg md:text-2xl font-bold text-center mb-5 md:mb-8 text-gray-900">
            Our Cultural Pillars
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {culturalPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-linear-to-br ${pillar.color} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-2 text-gray-900">
                        {pillar.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div id="team">
          <div className="text-center mb-10 space-y-3">
            <div className="inline-block px-5 py-2 bg-linear-to-r from-blue-100 to-teal-100 rounded-full">
              <span className="bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent font-semibold text-sm">
                Meet The Team
              </span>
            </div>
            <h3 className="text-lg md:text-2xl font-bold text-gray-900">
              The Minds Behind QUANTEDGE
            </h3>
            <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
              A diverse group of experts driving innovation forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Avatar Section */}
                <div className="p-6 pb-4 flex flex-col items-center">
                  <div className="relative">
                    {/* <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        fill
                      />
                    </div> */}
                    <Avatar className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-offset-2 ring-blue-100 group-hover:ring-blue-200">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full"
                      />
                      <AvatarFallback className=" text-black font-semibold">
                        {member.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-linear-to-br from-blue-600 to-teal-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <h4 className="text-lg font-bold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-blue-600 font-medium text-sm">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-sm text-center leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="px-6 pb-6 flex justify-center gap-3">
                  {member.social &&
                    Object.entries(member.social).map(([platform, url]) => {
                      const Icon =
                        socialIcons[platform as keyof typeof socialIcons];
                      return Icon ? (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                          aria-label={platform}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ) : null;
                    })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-16 bg-linear-to-r from-blue-600 to-teal-600 p-8 md:p-12 rounded-2xl text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Mission
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto opacity-95">
            Be part of a team that's transforming Africa through technology.
            We're always looking for passionate individuals who share our
            vision.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Explore Careers
          </button>
        </div> */}
      </div>
    </section>
  );
}

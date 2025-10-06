import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
} from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

import {
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";
import Link from "next/link";
import { teamMembers } from "@/constants";

const socialIcons = {
  linkedin: <FaLinkedin size={24} className="rounded-lg" />,
  twitter: <FaSquareXTwitter size={24} className="rounded-lg" />,
  dribbble: <FaDribbble size={24} />,
  github: <FaGithub size={24} className="rounded-lg" />,
  instagram: <FaSquareInstagram size={24} className="rounded-lg" />,
};

export default function TeamSection() {
  return (
    <>
      {/* Main team section with responsive gradient background and padding */}
      <section
        id="team"
        className="bg-gradient-to-r from-white via-blue-50/50 to-blue-50 
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
      >
        {/* Section header with responsive typography */}
        <div className="text-center mb-8 md:mb-12">
          {/* Badge/Tag with responsive sizing and spacing */}
          <div
            className="inline-block px-3 sm:px-4 md:px-6 py-2 sm:py-3 
                          bg-gradient-to-r from-blue-100 to-rose-100 backdrop-blur-lg 
                          rounded-full text-xs sm:text-sm md:text-base text-center 
                          font-medium border border-white/30 mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 
                           bg-clip-text text-transparent">Meet</span>
          </div>

          {/* Main heading with responsive font sizes */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                         font-bold mb-4 md:mb-6 "
          >
            Our Team
          </h2>

          {/* Subtitle with responsive typography */}
          <p
            className="text-sm sm:text-base md:text-lg text-gray-700 
                        max-w-2xl mx-auto px-4"
          >
            A diverse group of experts driving innovation forward
          </p>
        </div>

        {/* Team members grid with responsive layout */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-20 
                        max-w-7xl mx-auto"
        >
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1
                         border-2 border-blue-200/50 bg-white backdrop-blur-sm"
            >
              {/* Card header with avatar and basic info */}
              <CardHeader className="flex flex-col items-center space-y-4 p-4 md:p-6 flex-shrink-0">
                {/* Avatar with responsive sizing */}
                <Avatar
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                                  ring-4 ring-blue-100/5"
                >
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback
                    className="bg-gradient-to-r from-blue-200 to-purple-200 
                                            text-white font-semibold text-lg"
                  >
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                {/* Member name and title */}
                <div className="text-center space-y-1">
                  <h3
                    className="text-base sm:text-lg md:text-xl font-semibold 
                                text-gray-900 leading-tight"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-xs sm:text-sm md:text-base text-blue-600 
                               font-medium"
                  >
                    {member.title}
                  </p>
                </div>
              </CardHeader>

              {/* Card content with member description */}
              <CardContent className="flex-grow p-4 md:p-6 pt-0">
                <CardDescription
                  className="text-xs sm:text-sm md:text-base 
                                           text-center text-gray-600 
                                           leading-relaxed"
                >
                  {member.description}
                </CardDescription>
              </CardContent>

              {/* Card footer with social media links */}
              <CardFooter
                className="flex justify-center space-x-3 sm:space-x-4 
                                    p-4 md:p-6 pt-0 flex-shrink-0"
              >
                {Object.entries(member.social).map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    aria-label={platform}
                    className="hover:text-blue-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialIcons[platform as keyof typeof socialIcons] ||
                      platform}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Open positions section with responsive design */}
        <div
          className="flex flex-col items-center text-center space-y-4 md:space-y-6 
                        max-w-3xl mx-auto px-4"
        >
          {/* Open positions heading */}
          <h2
            className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                         text-gray-900 leading-tight"
          >
            Open Positions
          </h2>

          {/* Open positions subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg text-gray-600 
                        leading-relaxed max-w-xl mx-auto"
          >
            Explore exciting career opportunities with us today
          </p>

          {/* CTA Button with responsive sizing */}
          <Button
            className="h-10 sm:h-12 md:h-14 
                            px-4 sm:px-6 md:px-8 
                            text-xs sm:text-sm md:text-base 
                            rounded-xl border border-neutral-500 
                            bg-gradient-to-r from-[#34156e] to-[#340cac] 
                            text-white font-medium shadow-lg 
                            hover:shadow-xl hover:opacity-90 
                            transition-all duration-300 
                            hover:scale-105 transform
                            focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            View Roles
          </Button>
        </div>
      </section>
    </>
  );
}
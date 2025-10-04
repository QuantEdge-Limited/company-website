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
      <section
        id="team"
        className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
                   px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
      >
        <div className="text-center mb-8 md:mb-12">
          <div
            className="inline-block px-3 sm:px-4 md:px-6 py-2 sm:py-3 
                          bg-gradient-to-r from-blue-100 to-purple-100 backdrop-blur-lg 
                          rounded-full text-xs sm:text-sm md:text-base text-center 
                          font-medium border border-blue-200/50 mb-4 shadow-sm"
          >
            <span
              className="bg-gradient-to-r from-blue-600 to-purple-600 
                           bg-clip-text text-transparent font-semibold"
            >
              Meet Our Team
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                         font-bold mb-4 md:mb-6 text-slate-900"
          >
            Our Team
          </h2>

          <p
            className="text-sm sm:text-base md:text-lg text-slate-600 
                        max-w-2xl mx-auto px-4"
          >
            A diverse group of experts driving innovation forward
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                        gap-6 md:gap-8 mb-12 md:mb-20 
                        max-w-7xl mx-auto"
        >
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="group flex flex-col h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2
                         bg-gradient-to-br from-white to-slate-50/50 border-slate-200/60"
            >
              <CardHeader className="flex flex-col items-center space-y-4 p-6 md:p-8 flex-shrink-0">
                <Avatar
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 
                                  ring-4 ring-blue-500/20 group-hover:ring-blue-500/40 
                                  transition-all duration-300"
                >
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback
                    className="bg-gradient-to-br from-blue-500 to-indigo-600 
                                            text-white font-bold text-2xl"
                  >
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>

                <div className="text-center space-y-2">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-bold 
                                text-slate-900 leading-tight group-hover:text-blue-600
                                transition-colors duration-300"
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm sm:text-base md:text-lg text-blue-600 
                               font-semibold"
                  >
                    {member.title}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex-grow p-6 md:p-8 pt-0">
                <CardDescription
                  className="text-sm sm:text-base 
                                           text-center text-slate-600 
                                           leading-relaxed"
                >
                  {member.description}
                </CardDescription>
              </CardContent>

              <CardFooter
                className="flex justify-center gap-4
                                    p-6 md:p-8 pt-0 flex-shrink-0"
              >
                {Object.entries(member.social).map(([platform, url]) => (
                  <Link
                    key={platform}
                    href={url}
                    aria-label={platform}
                    className="text-slate-600 hover:text-blue-600 transition-all duration-300 
                               hover:scale-110 transform"
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

        <div
          className="flex flex-col items-center text-center space-y-6 
                        max-w-3xl mx-auto px-4"
        >
          <h2
            className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                         text-slate-900 leading-tight"
          >
            Open Positions
          </h2>

          <p
            className="text-base sm:text-lg md:text-xl text-slate-600 
                        leading-relaxed max-w-xl mx-auto"
          >
            Explore exciting career opportunities with us today
          </p>

          <Button
            className="h-12 sm:h-14 md:h-16 
                            px-6 sm:px-8 md:px-10 
                            text-sm sm:text-base md:text-lg 
                            rounded-xl 
                            bg-gradient-to-r from-blue-600 to-indigo-600 
                            hover:from-blue-700 hover:to-indigo-700
                            text-white font-semibold shadow-lg 
                            hover:shadow-2xl 
                            transition-all duration-300 
                            hover:scale-105 transform
                            focus:outline-none focus:ring-4 focus:ring-blue-500/50"
          >
            View Roles
          </Button>
        </div>
      </section>
    </>
  );
}
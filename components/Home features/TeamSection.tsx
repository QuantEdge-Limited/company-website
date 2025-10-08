import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
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
        className="bg-gradient-to-r from-white via-blue-50/40 to-rose-50/70
             px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 md:py-24"
      >
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-2 sm:px-5 sm:py-2.5
                    bg-gradient-to-r from-blue-100 to-rose-100
                    backdrop-blur-md border border-black/10 rounded-full
                    text-sm font-medium mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-rose-500 bg-clip-text text-transparent font-semibold">
              Meet
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            Our Team
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            A diverse group of experts driving innovation forward
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((m) => (
            <Card
              key={m.name}
              className="bg-white/70 backdrop-blur-md border border-black/10
                   rounded-3xl overflow-hidden transition-all duration-300
                   hover:shadow-xl hover:-translate-y-2"
            >
              <CardHeader className="flex flex-col items-center space-y-4 p-6">
                <Avatar className="w-24 h-24 ring-4 ring-blue-100/30">
                  <AvatarImage
                    src={m.image}
                    alt={m.name}
                    className="object-cover object-center"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-blue-200 to-rose-200 text-white font-semibold">
                    {m.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {m.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm">{m.title}</p>
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-4 flex-grow">
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  {m.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center space-x-4 pb-6">
                {m.social &&
                  Object.entries(m.social).map(([platform, url]) => (
                    <Link
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={platform}
                      className={`text-gray-600 transition-colors duration-300 hover:${
                        platform === "linkedin"
                          ? "text-blue-700"
                          : platform === "twitter"
                          ? "text-black"
                          : platform === "github"
                          ? "text-gray-900"
                          : platform === "instagram"
                          ? "text-pink-500"
                          : "text-blue-600"
                      }`}
                    >
                      {socialIcons[platform as keyof typeof socialIcons]}
                    </Link>
                  ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

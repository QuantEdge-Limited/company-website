import React from "react";
import teamMembers from "@/constants/Team-members";
import { Card, CardContent, CardAction, CardFooter, CardDescription, CardHeader } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { socialLinks } from "@/constants";

export default function TeamSection() {


  return (
    <>
      <section id="team" className="py-[112px] px-[80px]">
        <div className="text-center mb-12">
          <p>Meet</p>
          <h2 className="text-3xl font-bold mt-4 mb-6">Our Team</h2>
          <p>A diverse group of experts driving innovation forward</p>

        </div>
        <div className="flex flex-wrap justify-center gap-6 my-[80px]">
          {teamMembers.map((member) => (
            <Card key={member.name} className="max-w-sm flex-1 min-w-[260px] max-w-[300px]">
              <CardHeader className="flex flex-col items-center space-y-4 p-6">
                  <Avatar className="w-[80px] h-[80px]">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.title}</p>
                  </div>
              </CardHeader>
              <CardContent>
                  <CardDescription className="text-sm text-center text-gray-600">{member.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center space-x-4">
                {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      {/* Use the Twitter/X icon from socialLinks */}
                      {(() => {
                        const linkedIn = socialLinks.find(link => link.name === "LinkedIn");
                        if (linkedIn && linkedIn.icon) {
                          const Icon = linkedIn.icon;
                          return <Icon className="w-6 h-6 " />;
                        }
                        return null;
                      })()}
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      {/* Use the Twitter/X icon from socialLinks */}
                      {(() => {
                        const twitterLink = socialLinks.find(link => link.name === "Twitter");
                        if (twitterLink && twitterLink.icon) {
                          const Icon = twitterLink.icon;
                          return <Icon className="w-6 h-6 " />;
                        }
                        return null;
                      })()}
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      {/* Use the Twitter/X icon from socialLinks */}
                      {(() => {
                        const githubLink = socialLinks.find(link => link.name === "GitHub");
                        if (githubLink && githubLink.icon) {
                          const Icon = githubLink.icon;
                          return <Icon className="w-6 h-6" />;
                        }
                        return null;
                      })()}
                    </a>
                  )}
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="font-bold text-2xl">Open Positions</h2>
          <p>Explore exciting career opportunities with us today</p>
          <Button variant="outline" className="rounded-full">View Roles</Button>
        </div>
      </section>
    </>
  );
}

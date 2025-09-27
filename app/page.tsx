"use client";

import CTASection from "@/components/CTASection";
import AboutSection from "@/components/Home features/AboutSection";
import HeroSection from "@/components/Home features/HeroSection";
import ServicesSection from "@/components/Home features/ServicesSection";
import TeamSection from "@/components/Home features/TeamSection";
import TestimonialSection from "@/components/Home features/TestimonialSection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* About */}
      <AboutSection />

      {/* Services */}
      <ServicesSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Team */}
      <TeamSection />

      {/* CTA */}
      <CTASection />
    </>
  );
}

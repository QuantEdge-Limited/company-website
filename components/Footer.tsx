import React from "react";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { Input } from "./ui/input";
import { footerLinks, socialLinks } from "@/constants";
import { PiMapPinArea, PiPhoneDuotone } from "react-icons/pi";
import { TbMail } from "react-icons/tb";
import { copyRightNotice } from "@/lib/copyRightYear";
import Link from "next/link";
import Image from "next/image";

/**
 * Props interface for the FooterLink component
 * @interface FooterLinkProps
 * @property {string} title - The section title for the footer links
 * @property {Array} items - Array of link objects with name and href properties
 */
type FooterLinkProps = {
  title: string;
  items: { name: string; href: string }[];
};

/**
 * FooterLink Component - Renders a section of footer links
 *
 * This component creates a structured list of links under a specific category.
 * It handles the rendering of navigation links in the footer with proper styling
 * and hover effects.
 *
 * @param {FooterLinkProps} props - The component props
 * @returns {JSX.Element} A footer link section
 */
function FooterLink({ title, items }: FooterLinkProps) {
  return (
    <div className="space-y-4">
      {/* Section Title - Responsive typography */}
      <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-white">
        {title}
      </h4>

      {/* Links List - Optimized spacing for mobile */}
      <ul className="space-y-2 sm:space-y-3">
        {items.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              target="_blank"
              className="block text-xs sm:text-sm text-white/70 hover:text-[#00F5D4] 
                          duration-300 hover:translate-x-1 
                         transform transition-transform"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Footer Component - Main footer section for QuantEdge Limited website
 *
 * This component provides a comprehensive footer with multiple sections:
 * 1. Newsletter subscription section
 * 2. Company information and contact details
 * 3. Navigation links organized by categories
 * 4. Social media links
 * 5. Copyright and legal links
 *
 *
 * @returns {JSX.Element} Complete footer component
 */
export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white relative overflow-hidden">
      {/* 
        NEWSLETTER SUBSCRIPTION SECTION
        Responsive grid that stacks on mobile and sits side-by-side on larger screens
      */}
      <section
        className="border-b border-white/10 py-8 sm:py-12 lg:py-16"
        aria-labelledby="newsletter-heading"
      >
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Newsletter Content - Left Side */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <h3
                id="newsletter-heading"
                className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight"
              >
                Stay Updated with{" "}
                <span className="gradient-text">Innovation</span>
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-white/60 max-w-md mx-auto lg:mx-0">
                Get the latest insights on technology trends, case studies, and
                industry updates delivered straight to your inbox.
              </p>
            </div>

            {/* Newsletter Form - Right Side */}
            <div className="space-y-3 sm:space-y-4 w-full max-w-md mx-auto lg:max-w-none">
              {/* Email Input and Subscribe Button */}
              <div className="flex flex-col lg:flex-row gap-2 sm:gap-3">
                <Input
                  placeholder="Enter your email address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 
                           focus:border-[#00F5D4] focus:ring-[#00F5D4]/20 flex-1 h-13 md:h-12 py-3 md:py-0
                           text-sm sm:text-base"
                  type="email"
                  aria-label="Email address for newsletter subscription"
                />
                <Button
                  className="h-10 md:h-12 px-4 sm:px-6 rounded-xl border border-neutral-500 
                           bg-gradient-to-r from-[#34156e] to-[#340cac] text-white 
                           text-xs sm:text-sm font-medium shadow-md hover:opacity-90 
                           transition-all duration-300 group whitespace-nowrap"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                  <FaArrowRight
                    size={14}
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300 
                             sm:inline hidden"
                  />
                </Button>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-neutral-400 text-center xs:text-left">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        MAIN FOOTER CONTENT SECTION
        Contains company info, contact details, and navigation links
      */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            {/* 
              COMPANY INFORMATION SECTION - Left Side
              Takes full width on mobile, 2 columns on large screens
            */}
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Company Logo and Name */}
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                {/* Logo Icon */}

                <Image
                  src="/BGlogo.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-14 h-14 md:w-28 md:h-28 rounded-full"
                />

                {/* Company Name - Responsive typography */}
                <span
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-white"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  QuantEdge Limited
                </span>
              </div>

              {/* Company Description */}
              <p
                className="text-sm sm:text-base leading-relaxed max-w-md mx-auto sm:mx-0 
                           text-white/60 text-center sm:text-left"
              >
                Transforming businesses through innovative technology solutions.
                We create cutting-edge digital experiences that drive growth and
                deliver measurable results.
              </p>

              {/* 
                CONTACT INFORMATION
                Icons and contact details with proper spacing
              */}
              <div className="space-y-2 sm:space-y-3">
                {/* Email Contact */}
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <TbMail size={16} className="text-[#00F5D4] sm:text-[18px]" />
                  <span className="text-xs sm:text-sm text-white/80">
                    quantedgelimited@gmail.com
                  </span>
                </div>

                {/* Phone Contact */}
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <PiPhoneDuotone
                    size={16}
                    className="text-[#00F5D4] sm:text-[18px]"
                  />
                  <span className="text-xs sm:text-sm text-white/80">
                    +254 720 042 710
                  </span>
                </div>

                {/* Physical Address */}
                <div className="flex items-center justify-center sm:justify-start space-x-3">
                  <PiMapPinArea
                    size={16}
                    className="text-[#00F5D4] sm:text-[18px]"
                  />
                  <span className="text-xs sm:text-sm text-white/80">
                    Mombasa Rd, Nairobi KE
                  </span>
                </div>
              </div>

              {/* 
                SOCIAL MEDIA LINKS
                Responsive grid of social media icons
              */}
              <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-4 pt-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/10 
                             hover:bg-gradient-to-r hover:from-[#1B9AAA] hover:to-[#00F5D4] 
                             flex items-center justify-center transition-all duration-300 
                             group hover:scale-110 transform"
                    aria-label={`Visit our ${
                      social.name || "social media"
                    } page`}
                  >
                    <social.icon
                      size={14}
                      className="text-white/80 group-hover:text-white sm:text-[18px]"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* 
              NAVIGATION LINKS SECTION - Right Side
              Responsive grid that stacks navigation categories
            */}
            <div className="sm:col-span-2 lg:col-span-3">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:gap-8">
                {Object.entries(footerLinks).map(([section, items]) => (
                  <FooterLink
                    key={section}
                    title={
                      // Convert camelCase to Title Case for display
                      section
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())
                    }
                    items={items}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        COPYRIGHT AND LEGAL SECTION
        Bottom footer with copyright notice and legal links
      */}
      <section className="border-t border-white/10 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div
            className="flex flex-col md:flex-row justify-between items-center 
                         space-y-3 sm:space-y-4 md:space-y-0 gap-4"
          >
            {/* Copyright Notice */}
            <p
              className="text-xs sm:text-sm text-center md:text-left text-white/80 
                         order-2 md:order-1"
            >
              {copyRightNotice()} QuantEdge Limited. All rights reserved.
              <span className="hidden sm:inline">
                {" "}
                Innovating the future of technology.
              </span>
            </p>

            {/* Legal Links */}
            <nav
              className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 
                         order-1 md:order-2"
              aria-label="Legal and privacy links"
            >
              <a
                href="#"
                className="text-xs sm:text-sm text-white/60 hover:text-[#00F5D4] 
                         transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-white/60 hover:text-[#00F5D4] 
                         transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-white/60 hover:text-[#00F5D4] 
                         transition-colors duration-300"
              >
                Cookie Settings
              </a>
            </nav>
          </div>
        </div>
      </section>
    </footer>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cyan-600 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">QUANTEDGE</h3>
          <p className="text-white/90 text-sm leading-relaxed">
            Transforming Africa through technology and innovation. We provide intelligent software solutions to drive growth and efficiency for businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="text-white/90 text-sm flex items-center gap-2">
            <Mail className="w-4 h-4 text-white" /> quantedgelimited@gmail.com
          </p>
          <p className="text-white/90 text-sm">+254 720 042 710</p>
          <p className="text-white/90 text-sm">Nairobi, Kenya</p>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="www.instagram.com/quantedge_limited">
              <Instagram className="w-6 h-6 text-white hover:text-white/90 transition-colors" />
            </Link>
            <Link href="https//:www.x.com/quantedge_ltd">
              <Twitter className="w-6 h-6 text-white hover:text-white/90 transition-colors" />
            </Link>
            <Link href="htps//:www.linkedin.com/quantedge-limited">
              <Linkedin className="w-6 h-6 text-white hover:text-white/90 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/30 pt-6 text-center text-white/80 text-sm">
        &copy; {new Date().getFullYear()} QuantEdge Limited. All rights reserved.
      </div>
    </footer>
  );
}

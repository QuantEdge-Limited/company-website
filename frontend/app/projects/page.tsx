"use client";
import React from "react";
import FaithConnect from "../../components/FaithConnect";
import InnControl from "../../components/InnControl";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-600 mb-12 text-center">
            Our Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <FaithConnect />
            <InnControl />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
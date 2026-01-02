import Image from "next/image";
import About from "@/components/frontpage/About"
import HeroSection from "@/components/frontpage/HeroSection"
import Reviews from "@/components/frontpage/Reviews"
import Services from "@/components/frontpage/Services"
import FAQ from "@/components/frontpage/FAQ"
import Contact from "@/components/frontpage/Contact"
import VisionProblemSection from "@/components/frontpage/VisionProblemSection";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <About/>
    <VisionProblemSection/>
    <Services/>
    <FAQ/>
    <Reviews/>
    <Contact/>
    </>
  );
}

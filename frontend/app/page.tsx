import Image from "next/image";
import About from "@/components/About"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import Reviews from "@/components/Reviews"
import Services from "@/components/Services"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import VisionProblemSection from "@/components/VisionProblemSection";
import Footer from "@/components/Footer"
export default function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <About/>
    <VisionProblemSection/>
    <Services/>
    <FAQ/>
    <Reviews/>
    <Contact/>
    <Footer/>
    </>
  );
}

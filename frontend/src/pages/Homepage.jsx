import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";  
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import AboutSection from "../components/AboutSection";
import OurProductsSection from "../components/OurProductsSection";
import OurStorySection from "../components/OurStorySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Homepage() {
  useEffect(() => {
  const state = location.state;
  if (state?.scrollTo) {
    const section = document.getElementById(state.scrollTo);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }
}, [location]);
  return (
    <div className="w-full min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />
      <HeroSection />  
      <AboutSection />   
      <OurProductsSection />
      <OurStorySection />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
      <WhatsAppButton />
    </div>
  );
}

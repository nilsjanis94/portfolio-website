'use client';

import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import ContactInfo from "@/components/sections/ContactInfo";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <TechStack />
        <Projects />
        <Skills />
        <Experience />
        <Blog />
        <ContactInfo />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

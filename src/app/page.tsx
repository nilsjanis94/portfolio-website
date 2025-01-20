'use client';

import { useState, useEffect } from 'react';
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
import { CookieConsent } from "@/components/ui/CookieConsent";
import { useKeyboardNav } from "@/hooks/useKeyboardNav";
import { ProjectFilter } from "@/components/sections/ProjectFilter";
import { ProjectModal } from "@/components/ui/ProjectModal";
import LoadingScreen from "@/components/ui/LoadingScreen";



export default function Home() {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useKeyboardNav();

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen pt-20 md:pt-24">
        <Hero />
        <TechStack />
        <div className="container mx-auto px-6">
          <ProjectFilter 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter}
          />
        </div>
        <Projects onProjectClick={handleProjectClick} />
        <Skills />
        <Experience />
        <Blog />
        <ContactInfo />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
      {<ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />}
    </>
  );
}

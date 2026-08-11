import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import MatrixRain from './components/MatrixRain';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'bio', 'projects', 'skills', 'achievements', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Trigger slightly earlier than center
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once initially to set the active section on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array, stabilized on mount

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0A0A0A] text-white flex flex-col selection:bg-white selection:text-black">
      {/* Initial Load Screen */}
      <Loader />

      {/* Site-wide Animated Matrix Rain Background */}
      <MatrixRain />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation Layer */}
      <Navbar activeSection={activeSection} />

      {/* Main Structural Layout */}
      <main className="flex-grow relative z-10">
        {/* Hero Frame */}
        <Hero />

        {/* Biography & Timeline Frame */}
        <Bio />

        {/* Selected Projects Showcase Grid */}
        <Projects />

        {/* Technical Armory Meters */}
        <Skills />

        {/* Milestones & Certifications Grid */}
        <Achievements />

        {/* Connection Form Section */}
        <Contact />
      </main>

      {/* Footer Branding Anchor */}
      <Footer />
    </div>
  );
}

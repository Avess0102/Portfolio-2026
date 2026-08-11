import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../portfolioData';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Bio', id: 'bio' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Milestones', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#222222] py-4 shadow-xl shadow-black/40'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name styled in minimal brutalist/artistic fashion */}
          <button
            id="nav-logo"
            onClick={() => handleScrollTo('home')}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="w-7 h-7 bg-white text-black flex items-center justify-center font-display font-bold text-xs uppercase group-hover:bg-slate-300 transition-colors">
              S
            </div>
            <div className="flex flex-col text-left">
              <span className="font-display font-bold text-xs tracking-[0.25em] text-white uppercase group-hover:text-slate-300 transition-colors">
                {portfolioData.personal.name}
              </span>
              <span className="font-mono text-[8px] text-[#666] tracking-[0.2em] uppercase">
                EST. 2023 &mdash; MUM
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative text-xs font-mono font-medium tracking-[0.15em] uppercase transition-colors hover:text-white cursor-pointer py-1.5 ${
                    activeSection === item.id ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Quick Stark Contact Button */}
            <button
              id="nav-cta-btn"
              onClick={() => handleScrollTo('contact')}
              className="px-4 py-2 bg-white hover:bg-transparent text-black hover:text-white text-[10px] font-mono font-bold tracking-[0.2em] uppercase transition-all border border-white cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                Contact
                <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger toggle */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-[#151515] rounded-none transition-colors focus:outline-none border border-[#222222]"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-[#0A0A0A] border-b border-[#222222] shadow-2xl md:hidden px-6 py-8 flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  id={`mobile-nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`text-left text-sm font-mono font-bold uppercase tracking-[0.15em] py-2.5 px-3 transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-[#151515] text-white border-l-2 border-accent pl-4'
                      : 'text-slate-400 hover:bg-[#151515]/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <hr className="border-[#222222]" />

            {/* Social icons in drawer */}
            <div className="flex items-center justify-around py-2">
              <a
                href={portfolioData.socials.find(s => s.platform === 'github')?.url || '#'}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#151515] text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-[#222222]"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.socials.find(s => s.platform === 'linkedin')?.url || '#'}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-[#151515] text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-[#222222]"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-3 bg-[#151515] text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-[#222222]"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

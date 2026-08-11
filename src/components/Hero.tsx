import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter, ArrowRight, Download, Terminal } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Hero() {
  const { personal, socials } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
  };

  const socialIconMap = {
    github: <Github className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
    twitter: <Twitter className="w-4 h-4" />,
    email: <Mail className="w-4 h-4" />,
    medium: <Terminal className="w-4 h-4" /> // fallback
  };

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Background elegant architectural line overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.07]">
        <div className="absolute left-1/4 inset-y-0 w-[1px] bg-white" />
        <div className="absolute right-1/4 inset-y-0 w-[1px] bg-white" />
        <div className="absolute top-1/3 inset-x-0 h-[1px] bg-white" />
        <div className="absolute bottom-1/3 inset-x-0 h-[1px] bg-white" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-10"
        >
          {/* Stark Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-1.5 border border-[#222222] bg-[#111111]/40 text-slate-300 text-[10px] font-mono uppercase tracking-[0.2em]"
          >
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-accent" />
            </span>
            <span>Active &mdash; Open to partnerships</span>
          </motion.div>

          {/* Huge Display Name & Monospaced Title */}
          <div className="space-y-6 max-w-4xl">
            <motion.h1
              variants={itemVariants}
              className="text-artistic-display text-white font-display select-none"
            >
              SAURABH<br />SAMBHE
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.35em] text-[#888888]"
            >
              {personal.title}
            </motion.h2>
          </div>

          {/* Minimal Stark Narrative description */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed font-sans font-light"
          >
            {personal.subtitle} {personal.bioSummary}
          </motion.p>

          {/* Flat, monochrome primary / secondary buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2"
          >
            <button
              id="hero-work-btn"
              onClick={handleScrollToProjects}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-accent text-black hover:text-white border border-white hover:border-accent font-mono font-bold uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              View Work
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              id="hero-resume-btn"
              href={personal.resumeUrl}
              download="Saurabh_Sambhe_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#111111] hover:bg-white text-slate-300 hover:text-black border border-[#222222] hover:border-white font-mono font-bold uppercase tracking-[0.15em] text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download CV
            </a>
          </motion.div>

          {/* Core tech list - simple non-pill tags */}
          <motion.div
            variants={itemVariants}
            className="pt-4 flex flex-wrap justify-center items-center gap-2 text-[10px] text-slate-400 font-mono tracking-wider"
          >
            <span className="text-[#666] uppercase tracking-[0.2em] font-bold mr-1">STACK:</span>
            {["Angular", ".NET", "TypeScript", "MS SQL", "Next.js", "RAG / LLM Agents"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-[#111111]/80 border border-[#222222] text-[#888]"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Social Icons with monochrome style */}
          <motion.div
            variants={itemVariants}
            className="pt-2 flex items-center justify-center gap-3"
          >
            {socials.map((social) => {
              const platformKey = social.platform.toLowerCase() as keyof typeof socialIconMap;
              return (
                <a
                  id={`hero-social-${social.platform}`}
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className="p-3 bg-transparent border border-[#222222] hover:border-accent text-slate-500 hover:text-accent transition-all duration-300"
                >
                  <span className="sr-only">{social.label}</span>
                  <div>
                    {socialIconMap[platformKey] || <Terminal className="w-4 h-4" />}
                  </div>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Stark Simple Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none hidden sm:block">
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-5 h-8 border border-[#222222] flex justify-center p-1"
        >
          <div className="w-1 h-1.5 bg-white" />
        </motion.div>
      </div>
    </section>
  );
}

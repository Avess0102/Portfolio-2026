import { Github, Linkedin, Mail, Twitter, ArrowUp, Terminal } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Footer() {
  const { socials, personal } = portfolioData;

  const socialIconMap = {
    github: <Github className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
    twitter: <Twitter className="w-4 h-4" />,
    email: <Mail className="w-4 h-4" />,
    medium: <Terminal className="w-4 h-4" />
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="footer" className="border-t border-[#1a1a1a] py-12 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#1a1a1a]">
          
          {/* Brand layout info */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center font-mono font-bold text-black text-xs border border-white">
              S
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-white uppercase tracking-wider">{personal.name}</p>
              <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">{personal.title}</p>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center gap-2">
            {socials.map((social) => {
              const platformKey = social.platform.toLowerCase() as keyof typeof socialIconMap;
              return (
                <a
                  id={`footer-social-${social.platform}`}
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  title={social.label}
                  className="p-2.5 rounded-none bg-[#111111] hover:bg-white border border-[#222222] hover:border-white text-slate-400 hover:text-black transition-all duration-200"
                >
                  <span className="sr-only">{social.label}</span>
                  {socialIconMap[platformKey] || <Terminal className="w-4 h-4" />}
                </a>
              );
            })}
          </div>

          {/* Back to top scroll button */}
          <div>
            <button
              id="footer-back-to-top"
              onClick={handleScrollToTop}
              className="p-2.5 rounded-none bg-black hover:bg-[#111111] text-slate-400 hover:text-white border border-[#222222] transition-all flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Legal copyrights notes */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-400 transition-colors">React + Tailwind v4 + Motion</span>
            <span>&bull;</span>
            <span className="text-slate-500">Available globally</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

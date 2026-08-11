import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Sparkles, Star, Calendar, ArrowRight } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Bio() {
  const { personal, experience, education } = portfolioData;
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null);

  return (
    <section id="bio" className="py-24 relative overflow-hidden border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <p className="font-mono text-xs font-bold text-white tracking-[0.25em] uppercase">
            01 . GET TO KNOW ME
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Biography &amp; <span className="text-accent">Career</span>
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto md:mx-0 mt-4" />
        </div>

        {/* Layout: Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Biography Narrative & Quick Facts */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg font-light">
              <p className="font-medium text-white text-lg sm:text-xl leading-normal">
                {personal.subtitle}
              </p>
              {personal.detailedBio.map((paragraph, index) => (
                <p key={index} className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Facts Bento Grid (Flat, Stark Boxes) */}
            <div className="bg-[#111111] rounded-none p-6 border border-[#222222] grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] block">Based in</span>
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs sm:text-sm">{personal.location}</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] block">Specialty</span>
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs sm:text-sm">Angular, .NET &amp; Gen AI</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] block">Experience</span>
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Star className="w-3.5 h-3.5 text-white" />
                  <span className="text-xs sm:text-sm">3.5+ years</span>
                </div>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em] block">Email</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-white hover:text-slate-300 font-medium text-xs sm:text-sm underline underline-offset-4 decoration-[#444] block truncate"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline of Experience & Education */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Experience Sub-Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5">
                <Briefcase className="w-4 h-4 text-white" />
                <h4 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-white">Professional Journey</h4>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-[17px] before:w-[1px] before:bg-[#222222]">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className="relative pl-10"
                    onMouseEnter={() => setHoveredExperience(exp.id)}
                    onMouseLeave={() => setHoveredExperience(null)}
                  >
                    {/* Square Indicator Node */}
                    <div
                      className={`absolute left-[17px] top-2 w-2 h-2 border transition-all duration-300 -translate-x-1/2 z-10 ${
                        exp.current
                          ? 'bg-accent border-accent scale-110'
                          : hoveredExperience === exp.id
                          ? 'bg-white border-white scale-110'
                          : 'bg-black border-[#444444]'
                      }`}
                    />

                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div>
                          <h5 className="font-bold text-white text-xs tracking-wider uppercase">
                            {exp.role}
                          </h5>
                          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{exp.company}</p>
                        </div>
                        <span
                          className={`inline-flex items-center gap-1 text-[9px] font-mono px-2.5 py-0.5 rounded-none border max-w-fit uppercase tracking-widest ${
                            exp.current
                              ? 'text-accent bg-accent/10 border-accent/40'
                              : 'text-slate-400 bg-[#111111] border-[#222222]'
                          }`}
                        >
                          <Calendar className="w-2.5 h-2.5" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="space-y-1.5 text-xs text-slate-400 list-none font-light">
                        {exp.description.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <ArrowRight className="w-3 h-3 mt-0.5 text-white flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Sub-Section */}
            <div className="space-y-6 pt-4 border-t border-[#1a1a1a]">
              <div className="flex items-center space-x-2.5">
                <GraduationCap className="w-4 h-4 text-white" />
                <h4 className="font-mono font-bold text-xs uppercase tracking-[0.2em] text-white">Education &amp; Credentials</h4>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-y-1 before:left-[17px] before:w-[1px] before:bg-[#222222]">
                {education.map((edu) => (
                  <div key={edu.id} className="relative pl-10">
                    <div className="absolute left-[17px] top-2 w-2 h-2 border bg-black border-[#444444] -translate-x-1/2 z-10" />

                    <div className="space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <div>
                          <h5 className="font-bold text-white text-xs tracking-wider uppercase">
                            {edu.degree}
                          </h5>
                          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{edu.institution}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[9px] font-mono text-slate-400 px-2.5 py-0.5 rounded-none bg-[#111111] border border-[#222222] max-w-fit uppercase tracking-widest">
                          <Calendar className="w-2.5 h-2.5 text-[#666]" />
                          {edu.period}
                        </span>
                      </div>
                      {edu.description && (
                        <p className="text-xs text-slate-500 leading-relaxed font-sans font-light">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

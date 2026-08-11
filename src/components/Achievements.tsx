import { motion } from 'motion/react';
import { Code, Database, Brain, Languages, GraduationCap, ShieldCheck, Lightbulb, type LucideIcon } from 'lucide-react';
import { portfolioData } from '../portfolioData';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Database,
  Brain,
  Languages,
  GraduationCap,
  ShieldCheck,
  Lightbulb,
};

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-24 relative border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <p className="font-mono text-xs font-bold text-white tracking-[0.25em] uppercase">
            04 . THE RECEIPTS
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Milestones &amp; <span className="text-accent">Certifications</span>
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto md:mx-0 mt-4" />
        </div>

        {/* Achievement Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
          {achievements.map((item, index) => {
            const Icon = iconMap[item.iconName] || Code;
            return (
              <motion.div
                id={`achievement-card-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                className="group bg-[#0A0A0A] p-6 space-y-4 hover:bg-[#111111] transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[#111111] border border-[#222222] text-white group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-white uppercase tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { Layers, Server, Cpu, Wrench, Shield, Check } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'DevOps & Tools' | 'Specialized'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'DevOps & Tools', 'Specialized'];

  const categoryIconMap = {
    'All': <Layers className="w-3.5 h-3.5" />,
    'Frontend': <Layers className="w-3.5 h-3.5" />,
    'Backend': <Server className="w-3.5 h-3.5" />,
    'DevOps & Tools': <Wrench className="w-3.5 h-3.5" />,
    'Specialized': <Cpu className="w-3.5 h-3.5" />,
  };

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return skills.filter(s => s.category !== 'Soft Skills');
    }
    return skills.filter(s => s.category === activeCategory);
  }, [skills, activeCategory]);

  const softSkills = useMemo(() => {
    return skills.filter(s => s.category === 'Soft Skills');
  }, [skills]);

  return (
    <section id="skills" className="py-24 relative border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center md:text-left mb-16 space-y-3">
          <p className="font-mono text-xs font-bold text-white tracking-[0.25em] uppercase">
            03 . MY ARMORY
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Technical Skills &amp; <span className="text-accent">Proficiencies</span>
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto md:mx-0 mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Panel: Category Selectors & Soft Skills */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h4 className="font-mono font-bold text-xs text-white uppercase tracking-wider">
                Select Discipline
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                Explore specialized engineering competencies and tools by choosing a discipline category.
              </p>
            </div>

            {/* Category Buttons list */}
            <div className="flex flex-col space-y-2">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    id={`skill-cat-btn-${cat}`}
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`flex items-center justify-between p-3.5 rounded-none text-[10px] font-mono uppercase tracking-[0.15em] border transition-all text-left cursor-pointer ${
                      isSelected
                        ? 'bg-white border-white text-black font-bold'
                        : 'bg-[#111111] border-[#222222] hover:bg-[#151515] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5">
                      {categoryIconMap[cat as keyof typeof categoryIconMap] || <Cpu className="w-3.5 h-3.5" />}
                      <span>{cat === 'All' ? 'Technical Stack' : cat}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Soft Skills Section */}
            <div className="space-y-4 pt-6 border-t border-[#1a1a1a]">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-white" />
                <h4 className="font-mono font-bold text-xs text-white uppercase tracking-wider">
                  Professional Attributes
                </h4>
              </div>
              <div className="grid grid-cols-1 gap-2">
                {softSkills.map((ss) => (
                  <div
                    key={ss.name}
                    className="flex items-center space-x-2.5 px-3.5 py-2.5 rounded-none bg-black border border-[#222222]"
                  >
                    <div className="p-0.5 text-white">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs text-slate-300 font-mono uppercase tracking-wider">{ss.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Skill bars */}
          <div className="lg:col-span-8 bg-[#111111] rounded-none border border-[#222222] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <h4 className="font-display font-extrabold text-sm tracking-wide text-white uppercase">
                {activeCategory === 'All' ? 'Full Technical Stack' : `${activeCategory} Proficiencies`}
              </h4>
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest">
                {filteredSkills.length} Core Tools
              </span>
            </div>

            {/* Grid layout of skill entries with pip-based proficiency indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredSkills.map((skill) => {
                const filledPips = Math.max(1, Math.round(skill.level / 20));
                return (
                  <div
                    key={skill.name}
                    id={`skill-entry-${skill.name}`}
                    className="flex items-center justify-between gap-3 px-4 py-3 bg-black border border-[#222222] hover:border-accent/50 transition-colors"
                  >
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold truncate">
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-1 flex-shrink-0" title={`${skill.level}%`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`w-1.5 h-3.5 ${i < filledPips ? 'bg-accent' : 'bg-[#222222]'}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Knowledge Note disclaimer */}
            <div className="pt-4 text-[10px] text-slate-500 leading-relaxed font-mono uppercase tracking-wider border-t border-[#222222]">
              * Proficiencies estimated based on successful project deployments and continuous testing metrics.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, Github, Filter, X, Check, Folder } from 'lucide-react';
import { portfolioData } from '../portfolioData';
import { Project } from '../types';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = new Set(projects.map(p => p.category));
    return ['all', ...Array.from(cats)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 text-center md:text-left">
            <p className="font-mono text-xs font-bold text-white tracking-[0.25em] uppercase">
              02 . SELECTED WORKS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
              Creative Projects <span className="text-accent">Showcase</span>
            </h2>
            <div className="h-[1px] w-12 bg-white mx-auto md:mx-0 mt-4" />
          </div>

          {/* Search bar input - Stark box */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Search className="w-3.5 h-3.5" />
            </div>
            <input
              id="project-search-input"
              type="text"
              placeholder="Search by title, tag, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-none bg-[#111111] border border-[#222222] text-white placeholder-slate-500 focus:outline-none focus:border-accent transition-all font-mono uppercase tracking-wider"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Badges - Stark & uppercase */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mb-10">
          <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono uppercase tracking-[0.15em] mr-2">
            <Filter className="w-3 h-3 text-white" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              id={`project-filter-${cat}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-none text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-white text-black border-white font-bold'
                  : 'bg-[#111111] hover:bg-[#1a1a1a] text-slate-400 hover:text-white border-[#222222]'
              }`}
            >
              {cat === 'all' ? 'All projects' : cat}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#111111]/30 rounded-none border border-dashed border-[#222222]">
            <Folder className="w-10 h-10 text-slate-600 mx-auto mb-4" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-300 mb-1">No projects match criteria</h3>
            <p className="text-xs text-slate-500 font-mono">Try checking for typos or resetting filter keys.</p>
          </div>
        )}

        {/* Project Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                id={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={`group flex flex-col h-full bg-[#111111] rounded-none border transition-all duration-300 overflow-hidden ${
                  project.featured ? 'border-accent/40 hover:border-accent' : 'border-[#222222] hover:border-white'
                }`}
              >
                {/* Image & Category tag banner */}
                <div className="relative aspect-video overflow-hidden bg-black border-b border-[#222222]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-550"
                  />
                  {project.featured && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-none bg-accent border border-accent text-[9px] font-mono font-bold text-black uppercase tracking-widest">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-none bg-black/90 border border-[#222222] text-[9px] font-mono text-white uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow space-y-5">
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-display font-bold text-sm tracking-wide text-white uppercase group-hover:text-slate-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-none bg-black border border-[#222222] text-[9px] font-mono text-slate-400 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-0.5 rounded-none bg-black border border-[#222222] text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#222222]">
                    <button
                      id={`project-more-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="text-[10px] font-mono font-bold uppercase tracking-widest text-white hover:underline underline-offset-4 decoration-[#444] cursor-pointer"
                    >
                      Case Study
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          id={`project-github-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="View Repository"
                          className="p-2 text-slate-400 hover:text-white rounded-none bg-black hover:bg-slate-900 border border-[#222222] hover:border-white transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          id={`project-demo-${project.id}`}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Launch Demo"
                          className="p-2 text-slate-400 hover:text-white rounded-none bg-black hover:bg-slate-900 border border-[#222222] hover:border-white transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Case Study Details Modal - Raw high-contrast screen styling */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                id="project-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/95"
              />

              {/* Modal Container */}
              <motion.div
                id="project-modal-content"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                className="relative bg-[#0A0A0A] border border-[#222222] w-full max-w-2xl rounded-none overflow-hidden shadow-2xl z-10 flex flex-col max-h-[85vh]"
              >
                {/* Header Banner Image */}
                <div className="relative aspect-video bg-black border-b border-[#222222]">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85"
                  />
                  
                  {/* Close button */}
                  <button
                    id="project-modal-close"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black hover:bg-white text-slate-400 hover:text-black border border-[#222222] hover:border-white transition-all cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <span className="absolute bottom-4 left-6 px-3 py-1 bg-black border border-[#222222] text-[9px] font-mono text-white uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Content body (Scrollable) */}
                <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
                  <div className="space-y-3">
                    <h3 className="font-display font-extrabold text-xl text-white uppercase tracking-wide">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-none bg-[#111111] border border-[#222222] text-[9px] font-mono text-slate-400 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <hr className="border-[#222222]" />

                  <div className="space-y-3">
                    <h4 className="font-mono font-bold text-[10px] text-white uppercase tracking-widest">
                      Executive Summary &amp; Scope
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-mono font-bold text-[10px] text-white uppercase tracking-widest">
                        Key Accomplishments
                      </h4>
                      <div className="grid grid-cols-1 gap-2.5">
                        {selectedProject.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed font-light">
                            <Check className="w-3.5 h-3.5 text-white mt-0.5 flex-shrink-0" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Modal Action Footer buttons */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-3 pt-4 border-t border-[#222222]">
                    {selectedProject.githubUrl && (
                      <a
                        id="modal-github-link"
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-none bg-[#111111] hover:bg-white text-slate-300 hover:text-black font-mono font-bold text-[10px] uppercase tracking-widest border border-[#222222] hover:border-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Explore Repo
                      </a>
                    )}
                    {selectedProject.demoUrl && (
                      <a
                        id="modal-demo-link"
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-none bg-white hover:bg-transparent text-black hover:text-white font-mono font-bold text-[10px] uppercase tracking-widest border border-white flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Launch Live Sandbox
                      </a>
                    )}
                  </div>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

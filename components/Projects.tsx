import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight, X, AlertCircle, CheckCircle2, Lightbulb } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", damping: 25, stiffness: 300 }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: { duration: 0.2 }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
          >
            Crafted with Purpose
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-bold font-poppins tracking-tight mb-8"
          >
            Featured <span className="text-slate-500 italic font-light">Showcase.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12 }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl mb-10 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-blue-500/10">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 blur-[2px] group-hover:blur-0"
                />

                {/* Floating Actions on Hover */}
                <div className="absolute top-8 right-8 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 z-20">
                  <a
                    href={project.githubUrl}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white hover:bg-white hover:text-slate-950 transition-all duration-300"
                    title="Source Code"
                  >
                    <Github size={22} />
                  </a>
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>

                <div className="absolute bottom-8 left-8">
                  <span className="text-blue-500 text-[10px] font-bold uppercase tracking-widest mb-2 block">Case Study Available</span>
                  <h3 className="text-3xl font-bold font-poppins text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="px-4">
                <p className="text-slate-400 font-light leading-relaxed max-w-lg mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-white/5 px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                    View Logic <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-[100] cursor-zoom-out"
            />
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-4 md:inset-10 lg:inset-20 bg-slate-900 border border-white/10 rounded-[3rem] z-[101] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-white z-[110] hover:scale-110 active:scale-95 transition-all"
              >
                <X size={24} />
              </button>

              {/* Left Column - Visuals */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"></div>
              </div>

              {/* Right Column - Content */}
              <div className="w-full md:w-1/2 p-8 md:p-16 overflow-y-auto custom-scrollbar">
                <div className="mb-12">
                  <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Project Detail</span>
                  <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">{selectedProject.title}</h2>
                  <p className="text-slate-400 text-lg leading-relaxed font-light">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.technicalDecisions && (
                  <div className="space-y-12">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest border-b border-white/5 pb-4">Technical & Product Decisions</h4>

                    {selectedProject.technicalDecisions.map((decision, dIdx) => (
                      <motion.div
                        key={dIdx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (dIdx * 0.1) }}
                        className="space-y-6 bg-white/[0.02] p-8 rounded-[2rem] border border-white/5"
                      >
                        <h5 className="text-xl font-bold text-blue-400">{decision.title}</h5>

                        <div className="space-y-4">
                          <div className="flex gap-4">
                            <div className="mt-1 text-slate-500"><AlertCircle size={18} /></div>
                            <div>
                              <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">The Problem</p>
                              <p className="text-slate-300 text-sm leading-relaxed">{decision.problem}</p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="mt-1 text-blue-500"><Lightbulb size={18} /></div>
                            <div>
                              <p className="text-blue-500 text-[10px] uppercase font-bold tracking-widest mb-1">The Solution</p>
                              <p className="text-slate-300 text-sm leading-relaxed">{decision.solution}</p>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="mt-1 text-emerald-500"><CheckCircle2 size={18} /></div>
                            <div>
                              <p className="text-emerald-500 text-[10px] uppercase font-bold tracking-widest mb-1">The Impact</p>
                              <p className="text-slate-300 text-sm leading-relaxed">{decision.impact}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap gap-8 items-center">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white hover:text-blue-500 font-bold transition-all group"
                  >
                    Launch Live Project <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  {selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-400 hover:text-white font-bold transition-all group"
                    >
                      View Source <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-poppins tracking-tight mb-8"
          >
            Featured <span className="text-slate-500 italic font-light">Selections</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 shadow-2xl mb-8">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                />
                
                {/* Floating Actions on Hover */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <a 
                    href={project.githubUrl} 
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
                    title="Source Code"
                  >
                    <Github size={20} />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="px-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-800 px-3 py-1 rounded-full group-hover:border-blue-500/30 group-hover:text-blue-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold font-poppins mb-3 tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 font-light leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center border border-white/5 rounded-full group-hover:bg-white group-hover:text-slate-950 transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
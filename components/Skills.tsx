
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, CATEGORY_ICONS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools'] as const;

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-poppins tracking-tight"
          >
            Technical <span className="text-slate-500 italic font-light">Proficiencies</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIdx * 0.1 }}
              className="p-8 rounded-[2rem] glass hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                  {CATEGORY_ICONS[category]}
                </div>
                <h3 className="text-xl font-bold font-poppins tracking-tight">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {SKILLS.filter(s => s.category === category).map((skill, sIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIdx * 0.1 + sIdx * 0.05 }}
                    className="px-4 py-2 rounded-xl bg-slate-800/40 border border-white/5 text-sm text-slate-300 font-medium hover:text-white hover:border-blue-500/20 transition-all cursor-default"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-16 items-center"
        >
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs"
              >
                The Story
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
                Crafting Digital Solutions with <span className="text-blue-500">Purpose</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              I am a Junior Software Developer with a deep-seated passion for technology and its power to solve real-world problems. My journey began with a curiosity about how things work under the hood, which led me to dive deep into Java and the world of enterprise application development.
            </p>
            
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              I thrive in collaborative environments where I can learn from experienced engineers while bringing my own fresh perspective to the table. Whether it's crafting an elegant backend architecture or building an intuitive frontend interface, I am committed to writing clean, maintainable, and efficient code.
            </p>

            <p className="text-slate-400 text-lg leading-relaxed font-light">
              My core philosophy: <span className="text-white font-semibold italic">"Code is for people, not just for machines."</span> I strive to build impact-driven tech that makes a difference in users' lives.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-6 bg-slate-800/30 border border-white/5 rounded-[2rem] hover:border-blue-500/20 transition-all group">
                <p className="text-blue-400 font-bold text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">20+</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Projects Built</p>
              </div>
              <div className="p-6 bg-slate-800/30 border border-white/5 rounded-[2rem] hover:border-cyan-500/20 transition-all group">
                <p className="text-cyan-400 font-bold text-3xl mb-1 group-hover:scale-110 transition-transform origin-left">A+</p>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Fast Learner</p>
              </div>
            </div>
          </div>

          <div className="flex-1 hidden md:block">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="./img/vivian.jpg" 
                  alt="About Vivian" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
                  }}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

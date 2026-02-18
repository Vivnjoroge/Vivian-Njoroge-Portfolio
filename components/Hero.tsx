
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';

const TypewriterText: React.FC<{ text: string; delay?: number; speed?: number }> = ({ text, delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <span className="relative">
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] bg-blue-500 ml-1 translate-y-[2px]"
      />
    </span>
  );
};

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  const headingPart: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] 
      } 
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 md:px-12 overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-600/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          {/* Status Badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ duration: 1.5, ease: "circOut", delay: 1 }}
              className="w-[1px] bg-gradient-to-b from-blue-500 to-transparent rounded-full"
            />
            <span className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.4em]">
              Available for new projects
            </span>
          </motion.div>

          <div className="relative mb-10">
            <motion.div 
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-6 md:-left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent origin-top hidden md:block"
            />
            
            <h1 className="text-6xl md:text-8xl font-bold font-poppins leading-[1.1] tracking-tighter">
              <div className="overflow-hidden block">
                <motion.span variants={headingPart} className="inline-block text-white">
                  Building the
                </motion.span>
              </div>
              <div className="overflow-hidden block">
                <motion.span 
                  variants={headingPart} 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
                >
                  future of web.
                </motion.span>
              </div>
            </h1>
          </div>

          <div className="text-slate-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light min-h-[5em]">
            <motion.p variants={fadeUp}>
              I’m <span className="text-white font-medium">
                <TypewriterText text="Vivian Njoroge" delay={1.8} />
              </span>.
            </motion.p>
            <motion.p 
              variants={fadeUp}
              className="mt-2"
            >
              <TypewriterText 
                text="A Software Developer dedicated to creating seamless digital experiences through modern architecture and clean design." 
                delay={3}
                speed={30}
              />
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-8 items-center">
            <Link 
              to="/projects" 
              className="group relative px-10 py-5 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              <span className="relative z-10 flex items-center gap-3 text-sm tracking-wider uppercase">
                Explore Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              to="/about" 
              className="group flex items-center gap-3 text-slate-300 hover:text-white font-medium transition-colors text-sm tracking-widest uppercase"
            >
              My Story
              <span className="w-12 h-[1px] bg-slate-700 group-hover:w-16 group-hover:bg-blue-500 transition-all duration-500"></span>
            </Link>
          </motion.div>
          
          <motion.div variants={fadeUp} className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 gap-12">
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Experience</span>
              <p className="text-white font-bold text-3xl tracking-tighter">20<span className="text-blue-500 text-xl ml-1">+</span></p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Projects Built</p>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-500 text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Location</span>
              <p className="text-white font-bold text-3xl tracking-tighter">KE<span className="text-blue-500 text-xl ml-1">/</span>NBO</p>
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">Remote Available</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          // Fix: Changed 'base' to 'ease' to correctly use Framer Motion timing function
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 1.2 }}
          className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-w-md mx-auto lg:ml-auto w-full group"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>
          
          <div className="w-full h-full overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl relative">
            <img 
              src="./img/vivian.jpg" 
              alt="Vivian Njoroge" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop";
              }}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute -bottom-8 -right-8 glass p-8 rounded-[2.5rem] border border-white/10 shadow-2xl z-20 max-w-[200px]"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Code size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight">Software Engineer</p>
                <p className="text-slate-400 text-[10px] uppercase tracking-widest leading-relaxed mt-2 font-semibold">Java • Vue • Node</p>
              </div>
              <div className="pt-4 border-t border-white/5">
                <div className="flex gap-1.5">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

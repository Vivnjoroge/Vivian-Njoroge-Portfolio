
import React from 'react';
import { ChevronUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 items-start">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold font-poppins tracking-tighter flex items-center gap-2">
              Vivian<span className="text-blue-500">.</span>
            </Link>
            <p className="text-slate-400 font-light leading-relaxed max-w-xs">
              Designing and developing professional digital products that prioritize quality and user experience.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Navigation</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
               <Link to="/" className="text-slate-300 hover:text-blue-500 transition-colors">Home</Link>
               <Link to="/about" className="text-slate-300 hover:text-blue-500 transition-colors">About</Link>
               <Link to="/projects" className="text-slate-300 hover:text-blue-500 transition-colors">Projects</Link>
               <Link to="/contact" className="text-slate-300 hover:text-blue-500 transition-colors">Contact</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">Socials</h4>
            <div className="flex gap-4">
              <a href="https://github.com" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:viviannjoroge91@gmail.com" className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/30 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © {currentYear} Vivian Njoroge — Nairobi, Kenya
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 glass rounded-full flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-all"
          >
            Back to Top <ChevronUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
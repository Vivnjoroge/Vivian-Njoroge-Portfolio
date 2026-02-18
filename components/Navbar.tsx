
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
      <nav 
        className={`max-w-5xl mx-auto flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto ${
          scrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl' 
          : 'bg-transparent border border-transparent'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link to="/" className="text-xl font-bold font-poppins tracking-tight flex items-center gap-2">
            VN<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`relative px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-full ${
                location.pathname === item.href 
                ? 'text-white' 
                : 'text-slate-400 hover:text-white'
              }`}
            >
              {location.pathname === item.href && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 bg-blue-600/20 border border-blue-500/30 rounded-full z-[-1]"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 flex items-center justify-center text-slate-300 bg-slate-800/50 rounded-full border border-white/5 focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-auto max-w-sm bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto"
          >
            <div className="flex flex-col p-8 gap-4 items-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-lg font-bold font-poppins ${
                    location.pathname === item.href ? 'text-blue-500' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
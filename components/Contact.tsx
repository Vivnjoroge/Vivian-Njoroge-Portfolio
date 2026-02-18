
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Send, CheckCircle2, ArrowUpRight, Copy, Check, Mail, ExternalLink, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContactProps {
  minimal?: boolean;
}

const Contact: React.FC<ContactProps> = ({ minimal = false }) => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 1500);
  };

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailWebUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=viviannjoroge91@gmail.com";

  if (minimal) {
    return (
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-12 md:p-20 rounded-[3rem] border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <MessageSquare size={120} className="text-blue-500" />
            </div>

            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
            >
              Get In Touch
            </motion.span>
            
            <h2 className="text-4xl md:text-6xl font-bold font-poppins mb-8 tracking-tighter">
              Let’s Connect <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Directly</span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              I'm ready to collaborate on your next project. Reach out via your preferred platform to discuss how we can build something amazing together.
            </p>

            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-white/5"
            >
              <span className="relative z-10 flex items-center gap-3 text-sm tracking-widest uppercase">
                Contact Me <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 relative bg-transparent">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-poppins mb-6"
          >
            Let’s Connect <span className="text-blue-500">Directly</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg mb-10 leading-relaxed"
          >
            I'm ready to collaborate on your next project. Reach out via your preferred platform.
          </motion.p>

          <div className="flex flex-col gap-4 mb-12">
            {SOCIAL_LINKS.map((link, idx) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                  <div 
                    className="w-14 h-14 flex items-center justify-center rounded-2xl bg-slate-900/80 transition-transform group-hover:scale-110"
                    style={{ color: link.color }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="text-slate-200 font-bold text-lg">{link.label}</p>
                    <p className="text-slate-500 text-sm font-mono">{link.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-end">
                    {link.label === 'Email' ? (
                      <>
                        <button 
                          onClick={() => copyEmail('viviannjoroge91@gmail.com')}
                          className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all font-medium text-xs ${
                            copied 
                            ? 'bg-green-600/20 text-green-400' 
                            : 'bg-slate-700/30 hover:bg-slate-700/50 text-slate-300'
                          }`}
                          title="Copy Email"
                        >
                          {copied ? <Check size={14} /> : <Copy size={14} />}
                          {copied ? 'Copied' : 'Copy'}
                        </button>
                        
                        <a
                          href={gmailWebUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-red-500/10 hover:bg-red-600 text-red-400 hover:text-white transition-all font-medium text-xs"
                          title="Open in Gmail Web"
                        >
                          <ExternalLink size={14} />
                          Gmail
                        </a>

                        <a
                          href={gmailWebUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white transition-all flex items-center justify-center"
                          title="Contact via Gmail"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      </>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white transition-all flex items-center justify-center"
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-[2rem] flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-slate-300 font-medium">Available for hire in Nairobi & Remote</span>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/20 p-8 md:p-10 rounded-[2.5rem] border border-slate-700/50 shadow-2xl backdrop-blur-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-bold font-poppins mb-2">Message me directly</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-900/60 border border-slate-700 rounded-2xl px-5 py-4 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="your@email.com"
                  className="w-full bg-slate-900/60 border border-slate-700 rounded-2xl px-5 py-4 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder="How can I help you today?"
                  className="w-full bg-slate-900/60 border border-slate-700 rounded-2xl px-5 py-4 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
            </div>
            
            <button 
              disabled={formState !== 'idle'}
              className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] ${
                formState === 'sent' 
                ? 'bg-green-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20'
              }`}
            >
              {formState === 'idle' && <>Send Message <Send size={20} /></>}
              {formState === 'sending' && <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>}
              {formState === 'sent' && <>Success! Message Sent <CheckCircle2 size={20} /></>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

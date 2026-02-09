import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Agence', href: '#agence' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-high py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="relative z-50 group">
            {/* Logo container - white pill for visibility on dark bg */}
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg transition-transform hover:scale-105 duration-300">
                <img 
                    src="https://i.imgur.com/vHqj2nL.png" 
                    alt="Generation Link" 
                    className="h-8 md:h-10 w-auto object-contain"
                />
            </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 bg-cyan-500 text-black font-bold uppercase text-xs tracking-wider hover:bg-cyan-400 transition-colors rounded-full"
          >
            Démarrer un projet
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-light text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                 href="#contact"
                 onClick={() => setIsOpen(false)}
                 className="mt-8 px-8 py-3 bg-cyan-500 text-black font-bold text-lg rounded-full"
              >
                Démarrer un projet
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
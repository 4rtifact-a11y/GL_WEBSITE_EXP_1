import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">
            Agence Créative 2025
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white mb-8 leading-tight font-['Space_Grotesk']"
        >
          LIEZ VOTRE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">IMAGINATION</span> <br />
          AVEC LA RÉALITÉ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed"
        >
          Generation Link transforme vos idées abstraites en expériences tangibles. 
          Une vision avant-gardiste du design graphique et digital.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 1 }}
           className="mt-12 flex justify-center gap-6"
        >
            <a href="#services" className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-cyan-400 transition-all duration-300 rounded-sm">
                Nos Expertises
            </a>
            <a href="#contact" className="px-8 py-4 border border-zinc-700 text-white font-bold text-sm tracking-widest uppercase hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 rounded-sm glass">
                Contact
            </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface SubItem {
  title: string;
  desc: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  items: SubItem[];
  icon: React.ElementType;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, items, icon: Icon, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="h-full glass p-8 rounded-2xl hover:bg-zinc-900/60 transition-colors duration-500 border border-zinc-800/50 hover:border-cyan-500/30 overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute -right-12 -top-12 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
        
        <div className="relative z-10">
          <div className="mb-6 p-3 bg-zinc-950 w-fit rounded-xl border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
            <Icon size={32} className="text-zinc-300 group-hover:text-cyan-400 transition-colors duration-300" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk'] group-hover:text-cyan-400 transition-colors">{title}</h3>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">{description}</p>
          
          <div className="space-y-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group/item">
                <ChevronRight size={16} className="text-cyan-600 mt-1 shrink-0 group-hover/item:text-cyan-400 transition-colors" />
                <div>
                  <h4 className="text-zinc-200 text-sm font-semibold">{item.title}</h4>
                  <p className="text-zinc-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
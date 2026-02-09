import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServiceCard } from './components/ServiceCard';
import { Footer } from './components/Footer';
import { servicesData } from './data';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services Grid Section */}
        <section id="services" className="py-32 relative">
            {/* Background noise texture repeated */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6 font-['Space_Grotesk']"
                    >
                        NOS DOMAINES <br/>
                        <span className="text-zinc-600">D'EXPERTISE</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        viewport={{ once: true }}
                        className="h-1 bg-cyan-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <ServiceCard 
                            key={service.id}
                            index={index}
                            title={service.title}
                            description={service.description}
                            items={service.items}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>

        {/* Agency Intro Section */}
        <section id="agence" className="py-24 bg-zinc-900/20 border-y border-zinc-900 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />
             <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <h2 className="text-3xl md:text-5xl font-bold mb-8 font-['Space_Grotesk'] leading-tight">
                        Une vision <span className="text-cyan-400">avant-gardiste</span> du design.
                     </h2>
                     <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                        Chez Generation Link, nous ne suivons pas seulement les tendances, nous les anticipons. 
                        Notre approche fusionne créativité artistique et rigueur technique pour offrir des solutions 
                        qui marquent les esprits et durent dans le temps.
                     </p>
                     <ul className="space-y-4">
                        <li className="flex items-center text-zinc-300">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></span>
                            Designs pilotés par la donnée et l'émotion
                        </li>
                         <li className="flex items-center text-zinc-300">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></span>
                            Technologies créatives de pointe (IA, 3D)
                        </li>
                         <li className="flex items-center text-zinc-300">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></span>
                            Accompagnement 360° sur tous supports
                        </li>
                     </ul>
                </div>
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden glass relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
                            alt="Agency Studio" 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                        />
                        <div className="absolute bottom-0 left-0 p-8 z-20">
                             <div className="text-6xl font-bold text-white mb-2">10+</div>
                             <div className="text-sm uppercase tracking-widest text-zinc-300">Années d'expérience</div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;
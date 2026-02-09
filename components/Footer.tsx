import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-[#020202] border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-['Space_Grotesk']">
              Prêt à <span className="text-cyan-400">lier</span> votre projet ?
            </h2>
            <p className="text-zinc-400 mb-10 text-lg">
              Discutons de vos ambitions. Notre équipe est prête à transformer votre vision en réalité visuelle percutante.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:hello@generationlink.com" className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group">
                <div className="p-3 glass rounded-full group-hover:border-cyan-500/50">
                  <Mail size={20} className="text-cyan-400" />
                </div>
                <span className="text-lg">hello@generationlink.com</span>
              </a>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 glass rounded-full">
                  <Phone size={20} className="text-cyan-400" />
                </div>
                <span className="text-lg">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 glass rounded-full">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <span className="text-lg">Paris, France</span>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <a href="#" className="p-3 glass rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 glass rounded-lg hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500">Nom</label>
                  <input type="text" className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-zinc-500">Prénom</label>
                  <input type="text" className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500">Email</label>
                <input type="email" className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-zinc-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"></textarea>
              </div>
              <button className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest rounded-lg transition-colors">
                Envoyer
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
            <div className="mb-4 md:mb-0 bg-white/10 px-2 py-1 rounded inline-block">
                 <img src="https://i.imgur.com/vHqj2nL.png" alt="Logo footer" className="h-4 opacity-70" />
            </div>
            <p>&copy; {new Date().getFullYear()} Generation Link. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
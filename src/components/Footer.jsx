import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const footerLinks = [
  { name: "HOME", path: "/" },
  { name: "MENU", path: "/menu" },
  { name: "GALLERY", path: "/gallery" },
  { name: "CAREER", path: "/career" },
  { name: "CONTACT", path: "/contact" },
  { name: "RESERVATION", path: "/reservation" }
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900/60 pt-16 pb-8 flex flex-col items-center justify-center text-center gap-10 bg-neutral-950">
      
      {/* लोगो - Hover आणि Click इफेक्टसह */}
      <motion.img
        src="https://www.babareeba.club/assets/logo-Bybhg_qO.png"
        alt="Babareeba Main Logo"
        className="h-24 sm:h-32 object-contain cursor-pointer"
        
        // Hover: थोडा मोठा होतो आणि ब्राइटनेस वाढते
        whileHover={{ 
          scale: 1.1, 
          filter: "brightness(1.5) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))" 
        }}
        
        // Click: आकुंचन पावतो
        whileTap={{ scale: 0.9 }}
        
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      />

      <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-[0.18em] text-white uppercase font-light select-none">
        BA BA REEBA
      </h2>

      {/* फुटर लिंक्स */}
      <div className="w-full max-w-3xl flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[11px] sm:text-xs font-medium tracking-[0.25em] text-neutral-400">
        {footerLinks.map((link, idx) => (
          <Link 
            key={idx} 
            to={link.path} 
            className="hover:text-amber-500 transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* सोशल मीडिया */}
      <div className="flex items-center justify-center gap-5">
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-11 h-11 rounded-full border border-neutral-900 flex items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500/30 transition-all duration-300 group"
        >
          <FiInstagram className="text-base group-hover:scale-110 transition-transform" />
        </a>
        <a 
          href="https://whatsapp.com" 
          target="_blank" 
          rel="noreferrer" 
          className="w-11 h-11 rounded-full border border-neutral-900 flex items-center justify-center text-neutral-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all duration-300 group"
        >
          <FaWhatsapp className="text-base group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* कॉपीराईट आणि इतर लिंक्स */}
      <div className="w-full border-t border-neutral-900/30 pt-8 flex flex-col items-center justify-center gap-3 text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
        <p>&copy; 2026 BA BA REEBA. ALL RIGHTS RESERVED.</p>
        <p className="text-neutral-600 text-[9px]">
          DESIGNED BY <a href="#" className="underline text-neutral-400 hover:text-amber-500 transition-colors">PTS</a>
        </p>
        <div className="flex items-center gap-6 pt-1 text-[9px] text-neutral-600">
          <Link to="#" className="hover:text-neutral-400 transition-colors">PRIVACY & POLICY</Link>
          <Link to="#" className="hover:text-neutral-400 transition-colors">TERMS OF SERVICES</Link>
        </div>
      </div>
    </footer>
  );
}
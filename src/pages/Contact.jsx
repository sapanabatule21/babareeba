import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiChevronDown } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions = [
    {
      title: 'Find Us',
      content: '18th Floor, Boulevard Towers by Brahma Corp, Area, Camp, Pune, Maharashtra 411001'
    },
    {
      title: 'Opening times',
      content: 'Monday - Sunday: 12:00 PM - 01:30 AM'
    },
    {
      title: 'Dress code & Children',
      content: 'Smart Casuals / Party Wear preferred. Smart footwear mandatory. Management reserves right of admission.'
    },
    {
      title: 'Press & Media Enquiries',
      content: 'For media partnerships, private event buyouts, and press kits, contact us at: media@babareeba.club'
    }
  ];

  const footerLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MENU', path: '/menu' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CAREER', path: '/career' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'RESERVATION', path: '/reservation' }
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between pt-24 px-4 sm:px-8 select-none">
      
      {/* Contact Interactive Hub */}
      <div className="flex-grow flex flex-col md:flex-row justify-center items-start max-w-6xl mx-auto w-full pt-8 pb-16 gap-12 md:gap-16">
        
        {/* Left Side: Ambiance Showcase */}
        <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-square rounded-xl overflow-hidden shadow-2xl border border-neutral-900/60 relative group">
          <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply z-10" />
          <img 
            src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=800&q=80" 
            alt="Interior Lounge Tables at Ba Ba Reeba" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Right Side: Accordion Menu System */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-serif tracking-wide text-white mb-2">
              Contact Us
            </h1>
            <div className="w-12 h-0.5 bg-amber-500/60 mb-8" />
          </div>

          <div className="border-t border-neutral-900/80 divide-y divide-neutral-900/80">
            {accordions.map((item, idx) => (
              <div key={idx} className="py-4">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex justify-between items-center text-left text-base sm:text-lg font-serif tracking-wide text-neutral-200 hover:text-amber-400 transition-colors py-2 focus:outline-none"
                >
                  <span>{item.title}</span>
                  <FiChevronDown className={`text-sm transform transition-transform duration-300 ${
                    openAccordion === idx ? 'rotate-180 text-amber-500' : 'text-neutral-500'
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === idx ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                  <p className="text-xs sm:text-sm text-neutral-400 font-sans tracking-wide leading-relaxed pl-1">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Flagship Branch Section */}
      <section className="w-full border-t border-neutral-900/40 bg-neutral-950 py-16 text-center flex flex-col items-center justify-center relative z-20">
        <span className="text-[10px] tracking-[0.35em] font-bold text-amber-500 uppercase block mb-2">THE FLAGSHIP EXPERIENCE</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-widest uppercase mb-6">PUNE</h2>
        <a 
          href="https://maps.google.com/?q=Ba+ba+reeba+Pune" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-neutral-400 hover:text-amber-400 uppercase border-b border-neutral-800 pb-1 hover:border-amber-400 transition-all duration-300"
        >
          DISCOVER LOCATION →
        </a>
      </section>

      {/* Footer Branding Viewport matches Screenshot 2026-06-05 111218.png */}
      <footer className="w-full border-t border-neutral-900/60 pt-16 pb-8 flex flex-col items-center justify-center text-center gap-10">
        
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-[0.18em] text-white uppercase font-light select-none">
          BA BA REEBA
        </h2>

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

    </div>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // लिंक्स दाखवायच्या की लपवायच्या यासाठी स्टेट (सुरुवातीला true ठेवली आहे जेणेकरून मेनू दिसेल)
  const [showLinks, setShowLinks] = useState(true);

  return (
    <nav className="w-full bg-neutral-950 text-white fixed top-0 left-0 z-50 border-b border-neutral-900/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* १. लोगो (डावीकडे - हा नेहमी स्थिर राहील) */}
        <div className="flex items-center">
          <img 
            src="https://www.babareeba.club/assets/logo-Bybhg_qO.png" 
            alt="Logo" 
            className="h-12 object-contain"
          />
        </div>

        {/* २. नॅव्हिगेशन लिंक्स (मधोमध) */}
        {/* 'showLinks' true असेल तरच या लिंक्स दिसतील, false असल्यास गायब होतील */}
        <div className={`
          flex items-center gap-6 md:gap-8 mx-auto
          transition-all duration-300 ease-in-out
          ${showLinks ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'}
        `}>
         <Link to="/" className="hover:text-amber-500 font-serif tracking-[0.2em] text-sm md:text-base uppercase font-medium transition-colors" onClick={() => setShowLinks(false)}>Home</Link>
  <Link to="/menu" className="hover:text-amber-500 font-serif tracking-[0.2em] text-sm md:text-base uppercase font-medium transition-colors" onClick={() => setShowLinks(false)}>Menu</Link>
  <Link to="/reservation" className="hover:text-amber-500 font-serif tracking-[0.2em] text-sm md:text-base uppercase font-medium transition-colors" onClick={() => setShowLinks(false)}>Reservation</Link>
  <Link to="/gallery" className="hover:text-amber-500 font-serif tracking-[0.2em] text-sm md:text-base uppercase font-medium transition-colors" onClick={() => setShowLinks(false)}>Gallery</Link>
  <Link to="/career" className="hover:text-amber-500 font-serif tracking-[0.2em] text-sm md:text-base uppercase font-medium transition-colors" onClick={() => setShowLinks(false)}>Career</Link>
  <Link to="/contact" className="hover:text-amber-500 font-serif tracking-[0.2em] text-sm md:text-base uppercase font-medium transition-colors" onClick={() => setShowLinks(false)}>Contact</Link>
        </div>

        {/* ३. तुमचा प्रिमियम ग्रीड (चौरस) सिम्बॉल (उजवीकडे - हा देखील हलणार नाही) */}
        <div className="flex items-center">
          <button 
            onClick={() => setShowLinks(!showLinks)} // प्रत्येक क्लिकला लिंक्स दिसणार/लपणार
            className="flex flex-wrap w-6 h-6 justify-between content-between group cursor-pointer focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {/* तुमच्या ओरिजिनल डिझाईनसारखे ४ चौरस बनवले आहेत */}
            <span className="w-2.5 h-2.5 bg-neutral-400 group-hover:bg-white transition-colors rounded-sm" />
            <span className="w-2.5 h-2.5 bg-neutral-400 group-hover:bg-white transition-colors rounded-sm" />
            <span className="w-2.5 h-2.5 bg-neutral-400 group-hover:bg-white transition-colors rounded-sm" />
            <span className="w-2.5 h-2.5 bg-neutral-400 group-hover:bg-white transition-colors rounded-sm" />
          </button>
        </div>

      </div>
    </nav>
  );
}
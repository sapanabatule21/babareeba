import React from 'react';
import { FiDownload } from 'react-icons/fi';

export default function Menu() {
  const menuCategories = [
    {
      title: 'MEDITERRANEAN BRUNCH',
      desc: 'Mediterranean Falafel & Hummus Platter with pita and signature dips.',
      // 🆕 नवीन वर्किंग इमेज लिंक (Falafel/Brunch)
      bgImg: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80',
      btnLabel: 'DOWNLOAD MENU'
    },
    {
      title: 'SIGNATURE CHAATS',
      desc: 'Layered Paneer Tikka Stack topped with golden potato tresses.',
      // 🆕 नवीन वर्किंग इमेज लिंक (Paneer Tikka/Chaat style)
      bgImg: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80',
      btnLabel: 'DOWNLOAD MENU'
    },
    {
      title: 'ASIAN FUSION',
      desc: 'Tandoori Lollipop Chicken served over a vibrant, spiced gravy.',
      bgImg: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80',
      btnLabel: 'DOWNLOAD MENU'
    },
    {
      title: 'COCKTAILS & SPIRITS',
      desc: 'Artisan mixes and classic spirits for the perfect evening.',
      bgImg: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
      btnLabel: 'DOWNLOAD DRINKS'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 select-none">
      
      {/* Hero Header Section */}
      <div className="w-full h-[60vh] relative flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 bg-neutral-950/80 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1600&q=80" 
          alt="Menu Glass Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="relative z-20 space-y-3">
          <h1 className="text-5xl sm:text-7xl font-serif tracking-[0.2em] text-white uppercase font-light">
            OUR MENU
          </h1>
          <p className="text-xs tracking-[0.3em] text-amber-500 font-medium uppercase animate-pulse">
            See More
          </p>
        </div>
      </div>

      {/* Grid Categories Layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 min-h-[60vh] border-t border-neutral-900/60">
        {menuCategories.map((cat, idx) => (
          <div 
            key={idx} 
            className="relative group min-h-[420px] md:min-h-0 flex flex-col justify-end p-8 border-b md:border-b-0 md:border-r border-neutral-900/40 overflow-hidden"
          >
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-neutral-950/85 group-hover:bg-neutral-950/40 transition-all duration-700 z-10" />
            <img 
              src={cat.bgImg} 
              alt={cat.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
            />

            {/* Content */}
            <div className="relative z-20 space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif tracking-wide text-white leading-snug">
                {cat.title}
              </h3>
              {/* text नेहमी व्यवस्थित दिसण्यासाठी opacity सेट केली आहे */}
              <p className="text-xs text-neutral-300 font-sans tracking-wide leading-relaxed min-h-[40px] opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                {cat.desc}
              </p>
              <button className="w-full mt-4 flex items-center justify-center gap-2 bg-neutral-900/80 hover:bg-amber-600 border border-neutral-800 hover:border-amber-500 text-neutral-300 hover:text-neutral-950 py-3 text-[10px] tracking-widest uppercase font-bold transition-all duration-300">
                {cat.btnLabel} <FiDownload />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import PortfolioSection from './PortFolioSection';
import SignatureCrafts from './SignatureCrafts';
import TestimonialsSection from './TestimonialSection';
import Footer from '../components/Footer';
import CocktailSection from './CocktailSection';


const PLAYLIST = [
  {
    title: "Ba Ba Reeba Club Anthem",
    artist: "Ibiza Deep House Mix",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
    title: "Midnight Lounge Vibe",
    artist: "Liquid Neon & Jazz",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  },
  {
    title: "Velvet Pour Grooves",
    artist: "The Cocktail Club DJ",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
  },
  {
    title: "Neon Horizon Beats",
    artist: "Cyber Lounge Project",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  }
];

export default function Home() {
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const centerRef = useRef(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTapInteraction = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.src = PLAYLIST[currentTrackIndex].src;
      audioRef.current.load(); 
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play blocked:", err));
    } else {
      // जर आधीच चालू असेल, तर पुढच्या गाण्यावर जा (Next Song)
      const nextIndex = (currentTrackIndex + 1) % PLAYLIST.length;
      setCurrentTrackIndex(nextIndex);
      
      audioRef.current.src = PLAYLIST[nextIndex].src;
      audioRef.current.load();
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Next track blocked:", err));
    }

    // बॅकग्राउंड व्हिडिओ म्यूट ठेवू जेणेकरून गाण्याचा आवाज क्लिअर येईल
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

 
  const handleTrackEnded = () => {
    const nextIndex = (currentTrackIndex + 1) % PLAYLIST.length;
    setCurrentTrackIndex(nextIndex);
    if (audioRef.current) {
      audioRef.current.src = PLAYLIST[nextIndex].src;
      audioRef.current.load();
      audioRef.current.play().catch((err) => console.log(err));
    }
  };

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftColRef.current) observer.observe(leftColRef.current);
    if (rightColRef.current) observer.observe(rightColRef.current);
    if (centerRef.current) observer.observe(centerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-neutral-100 overflow-hidden select-none">
      
    
      <audio 
        ref={audioRef} 
        onEnded={handleTrackEnded}
        preload="auto"
      />

    
      <section className="relative w-full h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        
     
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-neutral-950 z-10" />
          
          <video
            ref={videoRef}
            src="https://www.babareeba.club/assets/Untitled%20design%20(9)-BgAm71Dn.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </div>

       
        <div className={`absolute top-24 left-6 sm:left-10 z-30 flex items-center gap-3 bg-black/80 border border-neutral-800 px-5 py-2.5 rounded-full backdrop-blur-md transition-all duration-500 ${isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="flex gap-1 items-end h-3 w-4 mb-0.5">
            <span className="w-0.5 bg-amber-500 animate-[bounce_1s_infinite_100ms]" style={{ height: '60%' }}></span>
            <span className="w-0.5 bg-amber-500 animate-[bounce_1s_infinite_300ms]" style={{ height: '100%' }}></span>
            <span className="w-0.5 bg-amber-500 animate-[bounce_1s_infinite_200ms]" style={{ height: '40%' }}></span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-400 font-sans font-bold">Now Playing</span>
            <span className="text-xs font-serif tracking-wide text-amber-400 font-medium">
              {PLAYLIST[currentTrackIndex].title} <span className="text-neutral-400 font-sans text-[10px]">by {PLAYLIST[currentTrackIndex].artist}</span>
            </span>
          </div>
        </div>

        <div className="relative z-20 text-center max-w-7xl mx-auto flex flex-col items-center justify-center h-full pt-12">
          <div className="mb-2 relative h-28 sm:h-36 w-auto cursor-pointer flex items-center justify-center">
            <img
              src="https://www.babareeba.club/assets/logo-Bybhg_qO.png"
              alt="Babareeba Main Logo"
              className="h-24 sm:h-32 object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            />
          </div>

          <h1 className="text-5xl sm:text-8xl md:text-[11rem] font-serif tracking-[0.05em] text-white uppercase font-normal leading-none mb-10 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            BA BA REEBA
          </h1>
          
          <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-sans text-neutral-100 max-w-md leading-relaxed text-center font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            THIS IS FOOD THAT MOVES YOU <br />
            <span className="inline-block mt-1">TO TASTE, TO TAP, TO TUNE IN</span>
          </p>
        </div>

        {/* 🎛️ FLOATING CORNER INTERACTION HUB (TAP TO CHANGE MUSIC) */}
        <div 
          onClick={handleTapInteraction}
          className="absolute bottom-8 left-6 sm:left-10 z-30 flex items-center justify-center group cursor-pointer"
        >
          <div className={`w-14 h-14 rounded-full bg-gradient-to-tr from-neutral-900 to-neutral-800 border ${isPlaying ? 'border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'border-neutral-700/50'} flex items-center justify-center shadow-2xl relative transition-all duration-300 active:scale-95`}>
            <div className={`w-5 h-5 rounded-full ${isPlaying ? 'bg-amber-500/30' : 'bg-amber-600/20'} border border-amber-600/40 flex items-center justify-center`}>
              <span className="text-[7px] font-bold text-amber-500 font-sans tracking-tighter uppercase">
                {isPlaying ? 'NEXT' : 'TAP'}
              </span>
            </div>
            {/* पल्स इफेक्ट */}
            <span className="absolute inset-0 rounded-full border border-amber-500/30 animate-ping pointer-events-none group-hover:block hidden" />
          </div>
          <span className="text-[9px] text-neutral-400 font-sans tracking-widest ml-3 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
            {isPlaying ? 'Tap to change track' : 'Tap to play vibe'}
          </span>
        </div>

        {/* SCROLL MOTIF */}
        <div className="absolute bottom-8 right-6 sm:right-10 z-30 flex items-center justify-center pointer-events-none">
          <div className="relative w-16 h-16 flex items-center justify-center">
            <svg className="absolute w-full h-full animate-spin-slow text-neutral-300 opacity-90" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text fill="currentColor" className="text-[7.5px] tracking-[0.18em] uppercase font-sans font-semibold">
                <textPath href="#circlePath" startOffset="0%">• scroll • explore • discover</textPath>
              </text>
            </svg>
            <span className="text-neutral-300 text-xs mt-1 animate-bounce">↓</span>
          </div>
        </div>
      </section>

      {/* 2. INFINITE TICKER-TAPE MARQUEE TEXT */}
     <section className="w-full bg-neutral-950 py-6 sm:py-8 flex overflow-x-hidden relative z-20">
  <div className="flex whitespace-nowrap animate-marquee text-4xl sm:text-6xl md:text-7xl font-serif tracking-widest uppercase text-neutral-900 font-bold opacity-50">
    <span 
      className="mx-12" 
      style={{ textShadow: "1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff" }}
    >
      MUSIC MAKES MY HEART GO BA BA REEBA •
    </span>
    <span 
      className="mx-12"
      style={{ textShadow: "1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff" }}
    >
      MUSIC MAKES MY HEART GO BA BA REEBA •
    </span>
  </div>
</section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="relative min-h-screen pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden z-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div ref={leftColRef} className="relative hidden lg:flex flex-col items-center justify-center transition-all duration-700" style={{ opacity: 0, transform: 'translateX(-40px)' }}>
              <div className="relative">
                <div className="w-56 h-72 overflow-hidden border border-white/10 shadow-2xl" style={{ transform: 'rotate(6deg)' }}>
                  <img src="https://www.babareeba.club/assets/about-left-BYj9N-z2.png" className="w-full h-full object-cover" alt="Interior left" />
                </div>
                <div className="absolute -bottom-12 -right-8 w-44 h-56 overflow-hidden border border-white/10 shadow-2xl" style={{ transform: 'rotate(-8deg)' }}>
                  <img src="https://www.babareeba.club/assets/about-right-C6fAZqk-.png" className="w-full h-full object-cover" alt="Interior right" />
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div ref={centerRef} className="text-center px-4 transition-all duration-700 space-y-6" style={{ opacity: 0 }}>
              <div className="flex justify-center mb-2">
                <img src="https://www.babareeba.club/assets/logo-Bybhg_qO.png" className="h-16 md:h-24 object-contain" alt="Logo" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white uppercase font-light">BA BA REEBA</h2>
              <p className="text-lg md:text-2xl font-serif font-light text-neutral-200 leading-relaxed max-w-xl mx-auto italic">
                isn't just a bar, it's a vault for those<br /> who live with intention.
              </p>
              <p className="text-neutral-400 leading-relaxed max-w-xl mx-auto text-xs md:text-sm font-sans tracking-widest">
                Every pour, every playlist, every piece of worn-in furniture is chosen with care. We're not about the noise or the rush—we're about presence.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="inline-flex items-center gap-3 border border-neutral-800 hover:border-amber-500 bg-neutral-900/60 hover:bg-amber-600 text-neutral-300 hover:text-neutral-950 px-8 py-4 rounded-sm text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-lg group">
                  Curious About Us? <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div ref={rightColRef} className="relative hidden lg:flex flex-col items-center justify-center transition-all duration-700" style={{ opacity: 0, transform: 'translateX(40px)' }}>
              <div className="relative">
                <div className="w-56 h-72 overflow-hidden border border-white/10 shadow-2xl" style={{ transform: 'rotate(-6deg)' }}>
                  <img src="https://www.babareeba.club/assets/about-right-C6fAZqk-.png" className="w-full h-full object-cover" alt="Detail right" />
                </div>
                <div className="absolute -bottom-12 -left-8 w-44 h-56 overflow-hidden border border-white/10 shadow-2xl" style={{ transform: 'rotate(8deg)' }}>
                  <img src="https://www.babareeba.club/assets/about-left-BYj9N-z2.png" className="w-full h-full object-cover" alt="Detail left" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <div className="-mt-32"> 
        <PortfolioSection />
      </div>

      {/* Cocktail Section */}
      <div>
        <CocktailSection />  
      </div>

      {/* Signature Crafts Section */}
      <div className="-mt-20"> 
        <SignatureCrafts/>
      </div>

      {/* Testimonials Section */}
      <div className="-mt-20"> 
        <TestimonialsSection/>
      </div>

      <Footer/>
    </div>
  );
} 
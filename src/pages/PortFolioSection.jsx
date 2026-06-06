'use client';
import React, { useEffect, useRef, useState } from 'react';

const portfolioImages = [
     { src: 'https://www.babareeba.club/assets/portfolio-7-RRYbMGga.png', alt: 'Portfolio image 5' },
  { src: 'https://www.babareeba.club/assets/portfolio-8-_OF5oWFU.png', alt: 'Portfolio image 6' },
  { src: 'https://www.babareeba.club/assets/portfolio-9-vQTu5WP1.png', alt: 'Portfolio image 7' },
  { src: 'https://www.babareeba.club/assets/portfolio-10-Davww4zy.png', alt: 'Portfolio image 8' },
  { src: 'https://www.babareeba.club/assets/portfolio-13-BV4lPzH2.jpeg', alt: 'Portfolio image 9' },
  { src: 'https://www.babareeba.club/assets/portfolio-2-B9bJUlp2.png', alt: 'Portfolio image 1' },
  { src: 'https://www.babareeba.club/assets/portfolio-3-nQa-6nt-.png', alt: 'Portfolio image 2' },
  { src: 'https://www.babareeba.club/assets/portfolio-5-BiZJQZAo.png', alt: 'Portfolio image 3' },
  { src: 'https://www.babareeba.club/assets/portfolio-6-CZBTzKit.png', alt: 'Portfolio image 4' },
  { src: 'https://www.babareeba.club/assets/portfolio-7-RRYbMGga.png', alt: 'Portfolio image 5' },
  { src: 'https://www.babareeba.club/assets/portfolio-8-_OF5oWFU.png', alt: 'Portfolio image 6' },
  { src: 'https://www.babareeba.club/assets/portfolio-9-vQTu5WP1.png', alt: 'Portfolio image 7' },
  { src: 'https://www.babareeba.club/assets/portfolio-10-Davww4zy.png', alt: 'Portfolio image 8' },
  { src: 'https://www.babareeba.club/assets/portfolio-13-BV4lPzH2.jpeg', alt: 'Portfolio image 9' },
  { src: 'https://www.babareeba.club/assets/portfolio-14-BegofFqj.jpeg', alt: 'Portfolio image 10' },
  { src: 'https://www.babareeba.club/assets/portfolio-15-B_G-D4qp.jpeg', alt: 'Portfolio image 11' },
   { src: 'https://www.babareeba.club/assets/portfolio-7-RRYbMGga.png', alt: 'Portfolio image 5' },
  { src: 'https://www.babareeba.club/assets/portfolio-8-_OF5oWFU.png', alt: 'Portfolio image 6' },
  { src: 'https://www.babareeba.club/assets/portfolio-9-vQTu5WP1.png', alt: 'Portfolio image 7' },
  { src: 'https://www.babareeba.club/assets/portfolio-10-Davww4zy.png', alt: 'Portfolio image 8' },
  { src: 'https://www.babareeba.club/assets/portfolio-13-BV4lPzH2.jpeg', alt: 'Portfolio image 9' },
  { src: 'https://www.babareeba.club/assets/portfolio-16-DcIR64pj.jpeg', alt: 'Portfolio image 12' }
];

const spreadDirections = [
  { x: -1.35, y: -0.95 },
  { x: 1.35,  y: -0.95 },
  { x: -1.35, y: 0.95 },
  { x: 1.35,  y: 0.95 },
  { x: -1.55, y: -0.1 },
  { x: 1.55,  y: 0.1 },
  { x: -0.65, y: -1.15 },
  { x: 0.65,  y: -1.15 },
  { x: -0.65, y: 1.15 },
  { x: 0.65,  y: 1.15 },
  { x: -1.45, y: 0.45 },
  { x: 1.45,  y: -0.45 }
];

export default function PortfolioSection() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = -rect.top;
      const totalScrollable = sectionHeight - viewportHeight;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = windowSize.width < 768;

  const dotAngles = [
    Math.PI / 2, Math.PI * 5 / 6, Math.PI / 6, Math.PI / 4,
    Math.PI * 3 / 4, Math.PI * 7 / 6, Math.PI / 2 + 0.01,
    Math.PI * 4 / 3, Math.PI / 8, Math.PI * 11 / 6, Math.PI * 3 / 2, Math.PI * 2 / 3
  ];

  return (
    <div ref={sectionRef} className="relative w-full bg-neutral-950 m-0 p-0 mb-0 pb-0" style={{ height: '140vh' }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <div className="absolute rounded-full border border-neutral-900/40 pointer-events-none z-0" style={{ width: '560px', height: '560px' }} />
        <div className="absolute rounded-full border border-neutral-900/40 pointer-events-none z-0" style={{ width: '500px', height: '500px' }} />
        <div className="absolute rounded-full border border-neutral-900/40 pointer-events-none z-0" style={{ width: '440px', height: '440px' }} />

        {dotAngles.map((angle, i) => {
          const r = i % 3 === 0 ? 260 : i % 3 === 1 ? 225 : 190;
          const x = Math.cos(angle) * r;
          const y = Math.sin(angle) * r;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-neutral-800 rounded-full pointer-events-none"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }} 
            />
          );
        })}

        <div className="text-white text-center font-serif font-extralight text-3xl md:text-5xl pointer-events-none z-50 max-w-3xl px-6 drop-shadow-[0_5px_30px_rgba(0,0,0,1)]">
          Good music. Great crowd. Perfect vibes.<br />
          <span className="text-xl md:text-2xl text-neutral-400 font-sans block mt-4 font-light tracking-wide">
            Just a glimpse of what awaits you inside
          </span>
        </div>

        {portfolioImages.map((img, i) => {
          const dir = spreadDirections[i] || { x: 0, y: 0 };
          const maxX = windowSize.width * 0.5;
          const maxY = windowSize.height * 0.5;

          const x = dir.x * maxX * scrollProgress;
          const y = dir.y * maxY * scrollProgress;

          const scale = 0.05 + scrollProgress * 0.85;
          const baseCardRotation = (i * 35) % 24 - 12; 
          const dynamicRotation = baseCardRotation + scrollProgress * 35; 
          const opacity = scrollProgress === 0 ? 0 : Math.min(scrollProgress * 5, 1);

          return (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className="absolute object-cover rounded-2xl pointer-events-none transition-transform duration-75 ease-out shadow-[0_30px_70px_rgba(0,0,0,0.9)] border border-white/10"
              style={{
                width: isMobile ? '120px' : '300px',
                height: isMobile ? '165px' : '410px',
                opacity: opacity,
                transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${dynamicRotation}deg)`,
                zIndex: 10 + i,
                transformOrigin: 'center center'
              }} 
            />
          );
        })}
      </div>
    </div>
  );
}
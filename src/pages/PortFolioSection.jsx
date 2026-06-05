'use client';
import React, { useEffect, useRef, useState } from 'react';

const portfolioImages = [
    { src: 'https://www.babareeba.club/assets/portfolio-2-B9bJUlp2.png' },
    { src: 'https://www.babareeba.club/assets/portfolio-3-nQa-6nt-.png' },
    { src: 'https://www.babareeba.club/assets/portfolio-5-BiZJQZAo.png' },
    { src: 'https://www.babareeba.club/assets/portfolio-6-CZBTzKit.png' },
    { src: 'https://www.babareeba.club/assets/portfolio-7-RRYbMGga.png' },
    { src: 'https://www.babareeba.club/assets/portfolio-8-_OF5oWFU.png' },
    { src: 'https://www.babareeba.club/assets/portfolio-9-vQTu5WP1.png' },
    { src: 'https://www.babareeba.club/assets/portfolio-10-Davww4zy.png' }
];

export default function PortfolioSection() {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const totalHeight = sectionRef.current.offsetHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(1, -rect.top / totalHeight));
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full h-[200vh] bg-neutral-950">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* 1. हे ते सर्कल्स आहेत जे तुम्हाला हवे आहेत */}
                <div className="absolute flex items-center justify-center pointer-events-none">
                    {[300, 500, 700].map((size, i) => (
                        <div
                            key={i}
                            className="absolute border border-neutral-800/50 rounded-full animate-[spin_20s_linear_infinite]"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`
                            }}
                        />
                    ))}
                </div>

                {/* 2. सेंटर टेक्स्ट */}
                <div className="text-center z-50 pointer-events-none mb-10">
                    <h2 className="text-3xl md:text-5xl font-serif text-white font-light">

                        Good music. Great crowd. Perfect vibes.
                        <br />
                        Just a glimpse of what awaits you inside
                    </h2>
                </div>

                {/* 3. इमेजेस स्प्रेड होण्याचे लॉजिक */}
                {portfolioImages.map((img, i) => {
                    const angle = (i / portfolioImages.length) * Math.PI * 2;
                    const radius = 350 * scrollProgress;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <img
                            key={i}
                            src={img.src}
                            className="absolute w-32 h-44 md:w-44 md:h-60 object-cover rounded-xl border border-white/10 shadow-2xl"
                            style={{
                                transform: `translate(${x}px, ${y}px) rotate(${scrollProgress * 45}deg) scale(${0.3 + (scrollProgress * 0.7)})`,
                                opacity: scrollProgress > 0.05 ? 1 : 0,
                                transition: 'transform 0.05s ease-out'
                            }}
                        />
                    );
                })}
            </div>
        </section>
    );
}
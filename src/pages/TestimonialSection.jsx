'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    image: "src/assets/raising-glass.jpg", 
    quote: "The vibe is just perfect. Sitting with friends and enjoying the view, it feels like a different world."
  },
  {
    image: "src/assets/image-2.jpg", 
    quote: "Sophistication at its best. A perfect spot for a night out with friends and incredible ambiance."
  },
  {
    image: "src/assets/lil_baba_reeba.jpg", 
    quote: "Great service and even better vibes. We had such a memorable night here, truly a must-visit!"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black py-20 text-white flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl md:text-6xl font-serif mb-16 tracking-widest text-center">WHAT THEY SAY'S</h2>

      <div className="relative w-full max-w-3xl px-6 h-[650px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={TESTIMONIALS[index].image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute w-full flex flex-col items-center"
          >
            
            <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl border border-white/10">
              <img
                src={TESTIMONIALS[index].image}
                alt="Client Review"
                className="w-full h-full object-cover"
              />
              
            </div>
            
            <div className="mt-8 text-center px-4">
              <h3 className="text-2xl font-serif text-white">{TESTIMONIALS[index].name}</h3>
              <p className="mt-3 text-lg font-light italic text-white/70">
                "{TESTIMONIALS[index].quote}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex gap-3 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-10 bg-yellow-500' : 'w-5 bg-white/30'}`} 
          />
        ))}
      </div>
    </section>
  );
}

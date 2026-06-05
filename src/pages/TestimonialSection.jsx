'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const TESTIMONIALS = [
  {
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&q=80", // टेबलवर बसून पार्टी करणारे गेस्ट्स
    quote: "The vibe is just perfect. Sitting at the table with the view, it feels like a different world."
  },
  {
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&q=80", // लाउंजचा प्रीमियम व्ह्यू
    quote: "Sophistication at its best. Loved the seating and the overall ambiance of the place."
  },
  {
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80", // रेस्टॉरंट/लाउंजमध्ये आनंदी गेस्ट्स
    quote: "Great service and even better views. A must-visit spot in the city!"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="bg-black py-20 text-white flex flex-col items-center justify-center min-h-screen cursor-pointer" onClick={nextSlide}>
      <h2 className="text-4xl md:text-6xl font-serif mb-16 tracking-widest">WHAT THEY SAY'S</h2>

      <div className="relative w-full max-w-2xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <img
              src={TESTIMONIALS[index].image}
              alt="Testimonial"
              className="w-full h-[400px] object-cover rounded-xl shadow-2xl mb-8"
            />
            <p className="text-xl md:text-2xl font-light italic text-center">
              "{TESTIMONIALS[index].quote}"
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
      
    </section>
  );
}
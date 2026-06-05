import React from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../hooks/useDocumentTitle';

const column1Images = [
 // 'https://images.unsplash.com/photo-1574966770774-c597a5e33f2d?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1486591978090-58e619d37fe7?auto=format&fit=crop&w=600&q=80',
];

const column2Images = [
  'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
];

const column3Images = [
  //'https://images.unsplash.com/photo-1505236858219-8359cc29e3a4?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&q=80',
];

export default function Gallery() {
  useDocumentTitle('Skyline & Bar Views');

  return (
    <div className="relative min-h-[calc(100vh-5rem)] bg-neutral-950 overflow-hidden px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[85vh] max-w-7xl mx-auto overflow-hidden relative rounded-md border border-neutral-900/60">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-neutral-950 via-neutral-950/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent z-20 pointer-events-none" />

        <div className="relative overflow-hidden h-full">
          <motion.div 
            animate={{ y: [0, -1000] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 24,
              ease: "linear"
            }}
            style={{ willChange: 'transform' }}
            className="space-y-4 pb-4 flex flex-col"
          >
            {[...column1Images, ...column1Images].map((url, index) => (
              <div key={`view1-${index}`} className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden relative border border-neutral-900/40 rounded-sm">
                <img 
                  src={url} 
                  alt="Skyline Luxury" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden h-full">
          <motion.div 
            animate={{ y: [-1000, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 27,
              ease: "linear"
            }}
            style={{ willChange: 'transform' }}
            className="space-y-4 pb-4 flex flex-col"
          >
            {[...column2Images, ...column2Images].map((url, index) => (
              <div key={`view2-${index}`} className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden relative border border-neutral-900/40 rounded-sm">
                <img 
                  src={url} 
                  alt="Rooftop Ambience" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative overflow-hidden h-full hidden md:block">
          <motion.div 
            animate={{ y: [0, -1000] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 21,
              ease: "linear"
            }}
            style={{ willChange: 'transform' }}
            className="space-y-4 pb-4 flex flex-col"
          >
            {[...column3Images, ...column3Images].map((url, index) => (
              <div key={`view3-${index}`} className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden relative border border-neutral-900/40 rounded-sm">
                <img 
                  src={url} 
                  alt="Night Experience" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ApplicationForm({ isOpen, onClose, jobTitle }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* बॅकग्राउंड ब्लर (Overlay) */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
          />
          
          {/* उजवीकडून येणारा स्लाइड पॅनेल */}
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-neutral-950 z-50 p-8 shadow-2xl border-l border-neutral-800 overflow-y-auto"
          >
            {/* क्लोज बटन */}
            <button onClick={onClose} className="text-white text-3xl mb-8">✕</button>
            
            {/* हेडिंग */}
            <div className="mb-8">
                <p className="text-amber-500 text-xs tracking-[0.2em] uppercase font-semibold mb-2">Applying for</p>
                <h2 className="text-4xl font-serif text-white">{jobTitle}</h2>
            </div>
            
            {/* फॉर्म फील्ड्स */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                  <div>
                      <label className="text-[10px] text-neutral-500 tracking-widest uppercase block mb-2">First Name</label>
                      <input type="text" className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:outline-none focus:border-neutral-600" />
                  </div>
                  <div>
                      <label className="text-[10px] text-neutral-500 tracking-widest uppercase block mb-2">Last Name</label>
                      <input type="text" className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:outline-none focus:border-neutral-600" />
                  </div>
              </div>

              <div>
                  <label className="text-[10px] text-neutral-500 tracking-widest uppercase block mb-2">Mobile Number</label>
                  <input type="text" className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:outline-none focus:border-neutral-600" />
              </div>

              <div>
                  <label className="text-[10px] text-neutral-500 tracking-widest uppercase block mb-2">Email Address</label>
                  <input type="email" className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:outline-none focus:border-neutral-600" />
              </div>
              
              <div>
                  <label className="text-[10px] text-neutral-500 tracking-widest uppercase block mb-2">Work Status</label>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-amber-600/70 py-3 text-white font-bold tracking-wider">Experienced</button>
                    <button className="flex-1 bg-neutral-900 border border-neutral-800 py-3 text-neutral-500">Fresher</button>
                  </div>
              </div>
              
              <div>
                  <label className="text-[10px] text-neutral-500 tracking-widest uppercase block mb-2">Years of Experience</label>
                  <input type="text" className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:outline-none focus:border-neutral-600" />
              </div>
              
              <div>
                  <label className="text-[10px] text-neutral-500 tracking-widest uppercase block mb-2">Previous Hotel / Bar Name</label>
                  <input type="text" className="w-full bg-neutral-900 border border-neutral-800 p-3 text-white focus:outline-none focus:border-neutral-600" />
              </div>
              
              <button className="w-full bg-white text-black py-4 font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors mt-4">
                SUBMIT DETAILS
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
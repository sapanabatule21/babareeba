'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Footer from '../components/Footer';
import ApplicationForm from "../components/ApplicationForm";

const jobOpenings = [
  { id: 'bartender', title: 'Head Bartender', department: 'BAR OPERATIONS', details: 'We are seeking an experienced Head Bartender to craft premium mixology experiences, design seasonal menus, and manage our high-volume rooftop bar setup with precision and flair.' },
  { id: 'mixologist', title: 'Mixologist', department: 'BAR OPERATIONS', details: 'Join our elite beverage team. You will focus on creating bespoke flavor profiles, infusing artisanal ingredients, and elevating tableside guest interaction.' },
  { id: 'manager', title: 'Bar Manager', department: 'MANAGEMENT', details: 'Looking for a seasoned operational leader to supervise floor staff, maintain luxury hospitality standards, curate vendor relationships, and oversee nightly execution.' },
  { id: 'server', title: 'Server', department: 'FRONT OF HOUSE', details: 'Seeking high-energy, well-spoken individuals to act as ambassadors for our luxury food and beverage portfolio, providing attentive, Michelin-standard service.' }
];

export default function Career() {
  useDocumentTitle('Careers');
  const [expandedRole, setExpandedRole] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');

  const toggleRole = (id) => setExpandedRole(expandedRole === id ? null : id);
  
  const openForm = (title) => {
    setSelectedJob(title);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col">
      <div className="flex-grow py-20 px-6 flex flex-col items-center">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif tracking-widest uppercase">Careers</h1>
          <div className="h-[1px] w-20 bg-amber-500/60 mx-auto mt-4" />
        </div>

        <div className="w-full max-w-3xl space-y-4">
          {jobOpenings.map((job) => {
            const isOpen = expandedRole === job.id;
            return (
              <div key={job.id} className="border-b border-neutral-800/80 bg-neutral-900/20 backdrop-blur-sm rounded-sm transition-colors duration-300 hover:bg-neutral-900/40">
                <button onClick={() => toggleRole(job.id)} className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none">
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif tracking-wide text-neutral-200">{job.title}</h3>
                    <p className="text-xs tracking-widest text-amber-500 font-semibold mt-1 uppercase">{job.department}</p>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }}><FiChevronDown className="text-neutral-400 text-xl" /></motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm text-neutral-400 space-y-4">
                        <p>{job.details}</p>
                        <button onClick={() => openForm(job.title)} className="text-xs font-semibold uppercase tracking-widest text-amber-400 border-b border-amber-400/30 pb-1">Apply Position</button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <ApplicationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} jobTitle={selectedJob} />
      <Footer />
    </div>
  );
}
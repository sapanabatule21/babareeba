import React, { useState } from 'react';
import { FiArrowRight, FiArrowLeft, FiX, FiCalendar } from 'react-icons/fi';

export default function Reservation() {
  const [step, setStep] = useState(1); // Step 1: Details, Step 2: Time Slots
  const [restaurant, setRestaurant] = useState('Ba Ba Reeba - Pune');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('2026-06-04');
  const [selectedTime, setSelectedTime] = useState(null);
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const handleReset = () => {
    setStep(1);
    setSelectedTime(null);
    setAcceptPolicy(false);
  };

  return (
    <div className="w-full min-h-[85vh] bg-neutral-950 flex items-center justify-center p-4 md:p-10 select-none">
      
      {/* Premium Card Background exact from Screenshot 2026-06-04 232609_3.png */}
      <div className="w-full max-w-4xl bg-[#dfa76e] text-neutral-900 rounded-xl p-6 sm:p-10 shadow-2xl relative transition-all duration-500">
        
        {/* Top Close Icon Button */}
        <button 
          onClick={handleReset}
          className="absolute right-6 top-6 text-2xl text-neutral-900 hover:scale-110 transition-transform focus:outline-none"
        >
          <FiX />
        </button>

        {/* ================= STEP 1: MAKE A RESERVATION ================= */}
        {step === 1 && (
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif tracking-wide mb-4 text-[#1a1a1a]">
              Make A Reservation
            </h1>
            <p className="text-sm sm:text-base text-neutral-800 font-sans leading-relaxed max-w-2xl mb-8">
              At Ba Ba Reeba, we craft unforgettable experiences, woven together with one purpose in mind - to be shared with you. We look forward to sharing this special evening with you!
            </p>

            <div className="space-y-6 max-w-3xl">
              {/* Restaurant Dropdown */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2">
                  Restaurant
                </label>
                <select 
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                  className="w-full bg-[#fdf8e6] text-neutral-900 border-none rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-neutral-900 font-medium appearance-none cursor-pointer text-sm sm:text-base"
                >
                  <option value="Ba Ba Reeba - Pune">Ba Ba Reeba - Pune</option>
                  <option value="Ba Ba Reeba - Mumbai">Ba Ba Reeba - Mumbai</option>
                </select>
              </div>

              {/* Guests & Date Row Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2">
                    Guests
                  </label>
                  <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#fdf8e6] text-neutral-900 border-none rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-neutral-900 font-medium appearance-none cursor-pointer text-sm sm:text-base"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-neutral-800 mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <input 
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#fdf8e6] text-neutral-900 border-none rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-neutral-900 font-medium cursor-pointer text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>

              {/* Action Button Trigger Step 2 */}
              <div className="flex justify-center pt-6">
                <button
                  onClick={() => setStep(2)}
                  className="bg-[#fdf8e6] hover:bg-white text-neutral-900 font-bold px-8 py-3 rounded-md flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  Continue <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: SELECT TIME ================= */}
        {step === 2 && (
          <div>
            <h1 className="text-3xl sm:text-4xl font-serif tracking-wide mb-6 text-[#1a1a1a]">
              Select Time
            </h1>

            {/* Current Selected Header Status Bar */}
            <div className="w-full bg-[#fdf8e6] rounded-md py-3 px-4 flex justify-between items-center text-xs sm:text-sm font-bold tracking-wide mb-6 text-neutral-900">
              <span>{restaurant}</span>
              <span>{date}</span>
            </div>

            <p className="text-xs uppercase tracking-wider font-bold text-neutral-800 mb-4">
              Available Time Slots
            </p>

            {/* Grid layout matching Screenshot 2026-06-04 232619_3.png */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  className={`py-3 text-xs sm:text-sm font-semibold rounded-md border transition-all ${
                    selectedTime === slot 
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-md' 
                      : 'bg-[#cf965e]/40 text-neutral-950 border-neutral-900/10 hover:bg-[#cf965e]/70'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            {/* Booking Policy Checkbox Component */}
            <div className="flex items-center gap-3 mb-8">
              <input 
                type="checkbox"
                id="policy"
                checked={acceptPolicy}
                onChange={(e) => setAcceptPolicy(e.target.checked)}
                className="w-5 h-5 accent-neutral-900 cursor-pointer rounded"
              />
              <label htmlFor="policy" className="text-xs sm:text-sm text-neutral-900 font-medium cursor-pointer">
                I accept the <span className="font-bold underline cursor-pointer">Booking Policy</span> <span className="text-neutral-700 font-normal">(Click to view details)</span>
              </label>
            </div>

            {/* Navigation Bottom Controls Actions Split */}
            <div className="flex justify-between items-center pt-4 border-t border-neutral-900/10">
              <button
                onClick={() => setStep(1)}
                className="bg-[#fdf8e6] hover:bg-white text-neutral-900 font-bold px-6 py-3 rounded-md flex items-center gap-2 transition-all text-sm"
              >
                <FiArrowLeft /> Back
              </button>

              <button
                disabled={!selectedTime || !acceptPolicy}
                onClick={() => alert(`Table Confirmed at ${selectedTime}! See you soon.`)}
                className={`px-8 py-3 rounded-md font-bold text-sm flex items-center gap-2 transition-all ${
                  selectedTime && acceptPolicy
                    ? 'bg-neutral-900 text-white shadow-lg hover:scale-105 cursor-pointer'
                    : 'bg-neutral-900/20 text-neutral-600 cursor-not-allowed'
                }`}
              >
                Continue <FiArrowRight />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
import React, { useState } from 'react';
import PopupForm from './PopupForm.jsx';
const MarqueeSection = () => {
  const [showPopup, setShowPopup] = useState(false);


  return (
    <div className="overflow-hidden bg-gray-100 py-3 flex justify-center">
      
      <div className="whitespace-nowrap  animate-marquee flex items-center" style={{ animation: 'marquee 15s linear infinite' }}>
          <span className="mr-2">Join Webinar on Crack Top 100 Universities with Pro SOP Tips</span>
        <button onClick={() => setShowPopup(true)}
          className="flex items-center text-zinc-100 hover:underline px-4 bg-red-600 rounded py-1"
        >
          Register Now
        </button>

        <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />


      </div>
    </div>
  );
};

export default MarqueeSection;

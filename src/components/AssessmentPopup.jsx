import React, { useState } from 'react';
import AssessmentPopup from './AssessmentPopup';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <button onClick={() => setShowPopup(true)} className="bg-indigo-600 text-white px-4 py-2 rounded">
        Free Assessment
      </button>

      <AssessmentPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default App;

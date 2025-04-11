import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center bg-gray-100 px-4 py-3 text-left font-medium text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${
          isOpen ? 'max-h-40 py-2' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;

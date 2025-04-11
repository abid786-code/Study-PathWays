import React from 'react';

const TestimonialCard = ({ image, name, course, university, text }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row w-full max-w-2xl">
      <div className="relative w-full md:w-1/2">
        <img src={image} alt={name} className="object-cover h-full w-full" />
        <button className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded text-sm">
          ▶ Watch video
        </button>
      </div>
      <div className="p-4 w-full md:w-1/2">
        <p className="text-sm text-gray-700 line-clamp-5">{text}</p>
        <p className="mt-3 font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{course}, {university}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

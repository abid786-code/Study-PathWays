import React from 'react';
import { GraduationCap, Clock, MapPin, Download, Heart } from 'lucide-react';

const CourseCard = ({ university, title, duration, country, type, image }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition relative bg-white">
      <img src={image} alt={university} className="w-full h-40 object-cover" />
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
        <Heart size={18} />
      </button>
      <div className="p-4 space-y-2">
        <h4 className="text-sm font-semibold text-red-600">{university}</h4>
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <GraduationCap size={16} /> {type}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={16} /> {duration}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} /> {country}
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex items-center gap-1 text-sm px-3 py-1 border rounded text-red-600 font-medium">
            <Download size={14} /> Syllabus
          </button>
          <button className="bg-red-600 text-white text-sm px-3 py-1 rounded hover:bg-red-700">
            Check Eligibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

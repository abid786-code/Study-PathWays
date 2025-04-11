import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import CourseCard from './CourseCard.jsx';
import Tver from '../assets/Tver.png';
import sevas from '../assets/sevas.png';
const courses = [
  {
    university: 'Chechen State Medical University',
    title: 'MBBS (General Medicine)',
    duration: '6 Years',
    country: 'Russia',
    type: 'Bachelor of Medicine',
    image: 'https://static.wixstatic.com/media/9cdbfb_9a531b7d6f264e1caf1200b16a23c729~mv2.jpg/v1/fill/w_635,h_292,al_c,q_80/Chechen%20State%20University%20Russia.jpg',
  },
  {
    university: 'Tver State Medical University',
    title: 'General Medicine (with Internship)',
    duration: '6 Years',
    country: 'Russia',
    type: 'Bachelor of Medicine',
    image: Tver,
  },
  {
    university: 'Tver State Medical University',
    title: 'Dentistry',
    duration: '5 Years',
    country: 'Russia',
    type: 'Bachelor of Dentistry',
    image: Tver,
  },
  {
    university: 'Tver State Medical University',
    title: 'Pharmacy',
    duration: '5 Years',
    country: 'Russia',
    type: 'Bachelor of Pharmacy',
    image: Tver,
  },
  {
    university: 'Tver State Medical University',
    title: 'Pediatrics',
    duration: '6 Years',
    country: 'Russia',
    type: 'Bachelor of Pediatrics',
    image: Tver,
  },
  {
    university: 'Sevastopol State University',
    title: 'General Medicine (Fully English Medium)',
    duration: '6 Years',
    country: 'Russia',
    type: 'Specialist Degree',
    image: sevas,
  },
  {
    university: 'Sevastopol State University',
    title: 'Medical Biophysics',
    duration: '5–6 Years',
    country: 'Russia',
    type: 'Specialist Degree',
    image: sevas,
  },
  {
    university: 'Sevastopol State University',
    title: 'Nursing',
    duration: '4 Years',
    country: 'Russia',
    type: 'Bachelor of Nursing',
    image: sevas,
  },
  {
    university: 'Tver State Medical University',
    title: '35 PhD Programs / 34 Residency Programs',
    duration: 'Varies',
    country: 'Russia',
    type: 'Postgraduate / Residency',
    image: Tver,
  },
];

const StudyAbroadSection = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent">
  Study Abroad Programs
</h2>

          <p className="text-gray-600 mt-1">Explore top medical courses from Russian universities</p>
        </div>
        <button className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm">
          <SlidersHorizontal size={16} /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700">
          View All Courses →
        </button>
      </div>
    </section>
  );
};

export default StudyAbroadSection;

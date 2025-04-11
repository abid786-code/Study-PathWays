import React from 'react';
import CounselingForm from './CounselingForm.jsx';
import herobg from '../assets/herobg.png'
const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center min-h-[90vh]" style={{ backgroundImage: `url(${herobg})` }}>
      <div className="bg-black/50 absolute inset-0" />
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-6 py-12 max-w-7xl mx-auto text-white gap-8">
        {/* Left content */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl font-bold">Study Abroad with Gulf Tech</h1>
          <p className="text-lg">Building Careers Globally</p>
          <div className="flex gap-8 text-pink-400 font-semibold text-lg">
            <div>
              <span className="text-pink-500 text-xl">80+</span><br />
              <span className="text-white text-sm">University Partners</span>
            </div>
            <div>
              <span className="text-pink-500 text-xl">10K+</span><br />
              <span className="text-white text-sm">Careers Transformed</span>
            </div>
          </div>
          <button className="bg-red-600 text-white px-5 py-3 rounded-md mt-4 font-medium hover:bg-red-700">
            Explore Courses →
          </button>
        </div>

        {/* Right form card */}
        <div className="bg-white text-black rounded-xl p-6 w-full max-w-md shadow-xl">
          <CounselingForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

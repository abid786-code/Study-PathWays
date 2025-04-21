import React from 'react';
import TestimonialCard from './TestimonialCard';
import t1 from '../assets/t1.mp4';
import t2 from '../assets/t2.mp4';

const testimonials = [
  {
    name: 'Anurag Singh',
    course: 'MBA 90 ECTS',
    university: 'IU Germany',
    video: t1,
    text: 'I always wanted to study abroad so I decided to apply for my Masters program but it did not work out due to budget, proper guidance. One day I saw an ad from upGrad and I immediately...',
  },
  {
    name: 'Varshitha M',
    course: 'MS Data Analytics',
    university: 'Clark University',
    video: t2,
    text: 'I\'m very thrilled to pursue my MS in Data Analytics at Clark University, USA. It was my dream and I was able to fulfill it. I chose this program and got 2 courses waived off...',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent">
        Growth and Success Stories
      </h2>
      <p className="text-gray-600 mb-8">Know the upGrad Abroad impact</p>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="rounded-lg shadow-md hover:shadow-xl transition-shadow bg-white p-4">
            <video 
              src={testimonial.video} 
              controls 
              muted 
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{testimonial.course} - {testimonial.university}</p>
            <p className="text-gray-700 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Anurag Singh',
    course: 'MBA 90 ECTS',
    university: 'IU Germany',
    image: '/images/anurag.jpg',
    text: 'I always wanted to study abroad so I decided to apply for my Masters program but it did not work out due to budget, proper guidance. One day I saw an ad from upGrad and I immediately...',
  },
  {
    name: 'Varshitha M',
    course: 'MS Data Analytics',
    university: 'Clark University',
    image: '/images/varshitha.jpg',
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
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

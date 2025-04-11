import React from 'react';
import FaqItem from './FaqItem.jsx';

const faqs = [
  {
    question: 'Which country is the best for studying abroad?',
    answer: 'It depends on your budget, course, and goals. For affordability, Russia and Germany are top choices.',
  },
  {
    question: 'Is 20 lakhs enough to study abroad?',
    answer: 'Yes, especially in countries like Russia, Ukraine, and parts of Europe where MBBS is budget-friendly.',
  },
  {
    question: 'What is the eligibility to study abroad?',
    answer: 'For MBBS: 50% in PCB (40% for SC/ST), NEET qualified, and age 17+. For other degrees, requirements vary.',
  },
  {
    question: 'Which is the cheapest country to study?',
    answer: 'Russia and Georgia are among the cheapest for medical education with quality infrastructure.',
  },
  {
    question: 'What are the questions that come to your mind when choosing to study abroad?',
    answer: 'Think of safety, total cost, recognition, language of instruction, and post-study opportunities.',
  },
];

const FaqSection = () => {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto bg-zinc-100">
      <h2 className="text-3xl font-semibold text-red-600 mb-6 text-center">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4 p-6">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} {...faq} />
        ))}
      </div>
     
    </section>
  );
};

export default FaqSection;

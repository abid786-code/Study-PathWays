import React from 'react';
import { motion } from 'framer-motion';

// Adjust these paths based on where your images actually are
import AboutHero from '../public/about-hero.jpg';
import CounselingImage from '../public/counseling.jpg';
import UniversityImage from '../public/university.jpg';
import StudentsImage from '../public/students.jpg';

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative h-64 md:h-96 w-full">
            <img
              src={AboutHero}
              alt="MedPath Consultants Team"
              className="rounded-xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-red-600/50 flex items-center justify-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white text-center px-4"
              >
                About Study Pathways
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About us.</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Focused on excellence for our students, we are well established with a reputation for great guidance and successful medical career placements.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With our roots in medical education consultancy, Study Pathways Consultants works with a wide network of universities, with top international medical school agreements and collaborations.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src={CounselingImage}
              alt="Student Counseling Session"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>

        {/* MBBS Specific Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <motion.div 
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <img
                src={UniversityImage}
                alt="International Medical University"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Study MBBS Abroad?</h3>
            <ul className="space-y-3">
              {[
                "Affordable tuition compared to private medical colleges in India",
                "Globally recognized degrees (WHO & MCI approved)",
                "English medium instruction available",
                "International exposure and diverse patient cases",
                "No donation or capitation fees"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            variants={fadeIn}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
              <img
                src={StudentsImage}
                alt="Happy Medical Students"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our MBBS Services</h3>
            <ul className="space-y-3">
              {[
                "University selection based on your budget and preferences",
                "Admission processing and documentation",
                "Visa assistance and travel guidance",
                "Pre-departure orientation programs",
                "Post-admission support during your studies"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 bg-gradient-to-r from-red-500 to-red-600 p-8 rounded-xl shadow-xl text-white"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Medical Education Expertise</h3>
          <p className="text-blue-100 mb-6">
            With over 15 years of experience in medical education consulting, we've helped thousands of students secure admissions in top medical universities across Russia, Ukraine, China, Philippines, Georgia, and more.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "5000+", label: "Students Placed" },
              { number: "50+", label: "Partner Universities" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <p className="text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
 </div>
    </section>
  );
};

export default AboutSection;

import student from '../assets/image.png'
const StudyAbroadSection = () => {
    return (
      <section className="bg-red-50 py-20 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div>
            <div className="text-sm text-gray-500 mb-2">
              <span>🏠</span> <span className="ml-2">Study Abroad Courses</span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Study Abroad Programs</h1>
            
            <p className="text-gray-700 text-base mb-6">
              Study Abroad Programs combine virtual learning with on-campus learning in the USA or Germany. 
              Get the best of both worlds and gain invaluable knowledge and cultural experience. 
              Enhance your qualifications and make the most of your study abroad journey.
            </p>
  
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-yellow-500 text-xl mr-3">💰</span>
                <span>Save up to 1/3rd of your degree cost</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 text-xl mr-3">✅</span>
                <span>No GRE/TOEFL required</span>
              </li>
              <li className="flex items-center">
                <span className="text-purple-600 text-xl mr-3">🎓</span>
                <span>Get Post Study Work visa in the USA or Germany</span>
              </li>
            </ul>
  
            <div className="bg-white  border--200 p-4 rounded-md shadow-sm mb-4">
              <span className="text-xs text-yellow-600 font-semibold uppercase mb-1 inline-block">⏱ Limited Time Offer</span>
              <p className="text-sm">
                Get a <span className="font-semibold text-red-600">Comprehensive Guide</span> on Studying in the US with a <span className="font-semibold text-orange-600">1:1 Counselling</span> for FREE
              </p>
              <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700">
                GET FREE COUNSELLING
              </button>
            </div>
  
            <p className="text-sm text-gray-500">📞 ENQUIRE: +91 97210 80912 </p>
          </div>
  
          {/* Right Image */}
          <div className="hidden md:flex justify-center relative">
            <div className='bg-red-600 h-full w-full absolute top-0 left-0 opacity-50 rounded-full'>

            </div>
            <div className="relative w-[320px] h-auto">
              <img
                src={student} // Replace with actual image path or URL
                alt="Graduate Student"
                className="relative z-10 max-w-4xl h-auto  object-cover"
              />
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default StudyAbroadSection;
  
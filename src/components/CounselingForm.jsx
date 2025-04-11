import React from 'react';

const CounselingForm = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-4 text-sm">
        <span role="img" aria-label="hat">🎓</span> <span className="font-medium">250+ courses</span>
        <span role="img" aria-label="globe">🌍</span> <span className="font-medium">9 countries</span>
      </div>
      <h2 className="text-xl font-semibold mb-4">International Degree Now in Your Budget</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter Full Name"
          className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
          required
        />
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
          required
        /> 
        <div className="flex">
          <span className="flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md text-sm"> +91</span>
          <input
            type="tel"
            placeholder=""
            className="w-full border rounded-r-md px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 flex justify-center items-center gap-2"
        >
          Book Your Free Counseling →
        </button>
        <p className="text-xs text-gray-500 mt-2">
          By submitting this form, you agree to the <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default CounselingForm;

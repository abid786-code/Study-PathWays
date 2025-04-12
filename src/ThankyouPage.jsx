import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center py-20 p-6">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full text-center p-8 space-y-6">
        <CheckCircle className="mx-auto h-16 w-16 text-red-600" />
        <h1 className="text-3xl font-bold text-gray-800">Thank You!</h1>
        <p className="text-gray-600">
          Your submission was successful. We'll get back to you shortly.
        </p>
       
        <Link to='/' className="mt-4 px-6 py-2  text-white rounded-lg hover:bg-red-700 transition">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;

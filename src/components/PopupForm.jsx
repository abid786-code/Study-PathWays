import { X } from 'lucide-react';
import popupimage from '../assets/popupimage.png';

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex justify-center items-center z-50 px-4">
      <div className="bg-white relative rounded-lg shadow-lg w-full max-w-5xl p-8 sm:p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute md:top-4 md:right-4 top-2 right-2 text-gray-500 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <img
            src={popupimage}
            alt="Study Abroad"
            className="hidden md:block w-1/2 h-auto rounded-lg shadow-lg"
          />

          <div className="flex-1 w-full">
            <h2 className="text-base sm:text-2xl font-semibold mb-2 text-center md:text-left flex flex-wrap items-center gap-2">
              Discover Your Study Abroad Eligibility
            </h2>
            <p className="md:text-sm text-xs text-gray-600 mb-4 text-center md:text-center text-wrap">
              Verify Your Number for a Free Session with Experts!
            </p>

            <form className="space-y-3 flex flex-col">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full border border-gray-300 rounded px-3 py-2"
                required
              />
              <div className="flex">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l text-gray-600 text-sm">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-r px-3 py-2"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                Continue →
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
              By submitting this form, you agree to the
              <a href="#" className="underline ml-1">Terms of Use</a> and
              <a href="#" className="underline ml-1">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;

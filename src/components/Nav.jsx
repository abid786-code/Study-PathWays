import React from "react";
import { ChevronDown, Phone } from "lucide-react";
import whitelogo from '../assets/redlogo.png'
const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      {/* Left Section: Logo + Explore */}
      <div className="flex items-center gap-4">
        <img src={whitelogo} alt="" className="w-52 rounded-2xl" />
      </div>

      {/* Middle Navigation */}
      <nav className="hidden md:flex gap-6 text-sm text-black font-medium">
        <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-1">
          Explore Courses <ChevronDown size={16} />
        </button>
        <div className="flex items-center gap-1 cursor-pointer">
          Countries <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Exams <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          Resources <ChevronDown size={14} />
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          More <ChevronDown size={14} />
        </div>
      </nav>

      {/* Right Section: Sign In + Contact */}
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1 text-red-600">
          <Phone size={16} /> <span>+91 9721080912 | +91 8382858683</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

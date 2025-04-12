import React, { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import whitelogo from "../assets/redlogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src={whitelogo} alt="Logo" className="w-40 md:w-52 rounded-2xl" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm text-black font-medium items-center">
          <Link to="/" className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center gap-1">
            Explore Courses
          </Link>
          <Link to="/about" className="hover:text-red-600">About Us</Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-red-600">
            <Phone size={16} />
            <span>+91 9721080912 | +91 8382858683</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden text-red-600">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <img src={whitelogo} alt="Logo" className="w-32" />
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} className="text-red-600" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-sm font-medium text-black">
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-red-600">
            About Us
          </Link>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md w-full">
            Explore Courses
          </button>
          <div className="text-red-600 mt-4">
            <Phone size={16} className="inline-block mr-2" />
            <span>+91 9721080912</span><br />
            <span>+91 8382858683</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen((prev) => {
      const newState = !prev;
      if (newState) {
        // Scroll to top when opening the mobile menu
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return newState;
    });
  };

  return (
    <>
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 sticky top-0 bg-white shadow-md z-50 font-[Manrope]">
        <h1 className="text-2xl font-extrabold text-blue-700">TEX</h1>

        <ul className="hidden sm:flex space-x-8 text-gray-700 font-semibold">
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition">Contact</Link></li>
          <li><Link to="/news" className="hover:text-blue-600 transition">News</Link></li>
        </ul>

        <button
          onClick={handleToggle}
          aria-label="Toggle Navigation"
          className="sm:hidden focus:outline-none text-gray-700"
        >
          {navOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </nav>

      {navOpen && (
        <div className="sm:hidden bg-white shadow-md border-t border-gray-200">
          <ul className="flex flex-col space-y-3 p-4 text-center text-gray-700 font-semibold">
            <li><Link to="/" onClick={() => setNavOpen(false)} className="block hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" onClick={() => setNavOpen(false)} className="block hover:text-blue-600">About</Link></li>
            <li><Link to="/contact" onClick={() => setNavOpen(false)} className="block hover:text-blue-600">Contact</Link></li>
            <li><Link to="/news" onClick={() => setNavOpen(false)} className="block hover:text-blue-600">News</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

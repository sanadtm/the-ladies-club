import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallary from "./pages/Gallery";
import ladieslogo from "./assets/ladieslogo.png";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#000000" : "#f3f4f6"; // black or
    document.body.style.color = darkMode ? "#ffffff" : "#000000"; // also update text color if
  }, [darkMode]);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>

      <div className="flex items-center justify-between gap-4 w-full">
        {/* Left group: logo + heading */}
        <div className="flex items-center gap-4">
          <img
            src={ladieslogo}
            height={50}
            width={60}
            className="mt-1 rounded border border-pink-500"
            style={{ marginTop: "10px", borderRadius: "6px" }}
            alt="Logo"
          />
          <h4 className="text-3xl font-bold">The Ladies Club</h4>
        </div>
        {/* Right item: Dark Mode button */}
         <button
          onClick={toggleTheme}
          className={`px-3 py-1 border rounded hover:scale-105 transition-transform duration-300 ${
            darkMode ? "bg-white text-black" : "bg-gray-800 text-white"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <nav className="p-4 flex flex-col items-center justify-center shadow-md sticky gap-10 top-0 bg-inherit z-50">
        <div className="flex gap-[2rem]">
          <Link
            to="/"
            className="hover:scale-105 transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            to="/gallary"
            className="hover:scale-105 transition-transform duration-300"
          >
            Gallary
          </Link>
          <Link
            to="/about"
            className="hover:scale-105 transition-transform duration-300"
          >
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Route Outlet */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
      </Routes>

      <footer className="w-full mt-12 py-6 bg-gray-100 dark:bg-black text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          © {new Date().getFullYear()} The Ladies Club™ — All rights reserved.
        </p>
      </footer>
    </div>
  );
}

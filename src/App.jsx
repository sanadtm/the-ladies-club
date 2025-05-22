import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
useEffect(() => {
  // Change the background color of the document body
  document.body.style.backgroundColor = darkMode ? '#000000' : '#f3f4f6'; // black or Tailwind's gray-100
  document.body.style.color = darkMode ? '#ffffff' : '#000000'; // also update text color if needed
}, [darkMode]);
  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}> 

      {/* <div className="hover:scale-105 transition-transform duration-300">Hover me!</div> */}
      {/* Navigation Bar */}  
   
  <button
    onClick={toggleTheme}
    className={`px-3 py-1 border rounded hover:scale-105 transition-transform duration-300 ${
    darkMode ? 'bg-white text-black' : 'bg-gray-800 text-white'
    }`}
  >
  {darkMode ? "Light Mode" : "Dark Mode"}
  </button>

    <nav className="p-4 flex flex-col items-center justify-center shadow-md sticky gap-10 top-0 bg-inherit z-50">
    <h1 className="text-3xl font-bold text-center mb-2">The Ladies Club</h1>
        <div className="flex gap-[2rem]">
          <Link to="/" className="hover:scale-105 transition-transform duration-300" >Home</Link>
          <Link to="/about" className="hover:scale-105 transition-transform duration-300">About</Link>
          <Link to="/projects" className="hover:scale-105 transition-transform duration-300">Projects</Link>
        </div>
      </nav>

      {/* Route Outlet */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </div>
  );
}

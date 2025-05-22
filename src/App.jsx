import React from "react";
import { useState } from "react";

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      {/* Navigation Bar */}
      <div className="hover:scale-105 transition-transform duration-300">Hover me!</div>
      <nav className="p-4 flex justify-between items-center shadow-md sticky top-0 bg-inherit z-50">
        <h1 className="text-xl font-bold">Sanad Thapa</h1>
        <div className="space-x-4">
          <button onClick={toggleTheme} className="px-3 py-1 border rounded">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center p-10 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to My World</h2>
        <video
          className="mx-auto rounded-lg shadow-lg"
          width="300"
          autoPlay
          muted
          loop
        >
          <source src="/intro-video.mp4" type="video/mp4" />
        </video>
        <p className="mt-4">I'm a passionate developer building modern web experiences.</p>
      </section>

      {/* Hover Feature */}
      <section className="p-10" id="about">
        <h3 className="text-2xl font-semibold mb-4">Hover to Discover</h3>
        <div className="flex gap-6 flex-wrap">
          {['React', 'Tailwind', 'Node.js', 'AI Enthusiast'].map((item) => (
            <div
              key={item}
              className="p-4 border rounded-lg hover:bg-indigo-100 transition duration-300 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery (Social Feed Mock) */}
      <section className="p-10 bg-gray-100" id="projects">
        <h3 className="text-2xl font-semibold mb-4">Photo Feed</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <img
              key={n}
              src={`/gallery/img${n}.jpg`}
              alt={`gallery ${n}`}
              className="rounded-lg shadow hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Forms Section */}
      <section className="p-10" id="contact">
        <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <form className="space-y-4 p-4 border rounded">
            <h4 className="text-lg font-bold">Quick Contact</h4>
            <input className="w-full border p-2" type="text" placeholder="Your Name" />
            <input className="w-full border p-2" type="email" placeholder="Your Email" />
            <textarea className="w-full border p-2" rows="3" placeholder="Your Message" />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded" type="submit">Send</button>
          </form>

          {/* Full Form */}
          <form className="space-y-4 p-4 border rounded">
            <h4 className="text-lg font-bold">Full Details</h4>
            <input className="w-full border p-2" type="text" placeholder="Full Name" />
            <input className="w-full border p-2" type="text" placeholder="Address" />
            <input className="w-full border p-2" type="text" placeholder="Driver's License #" />
            <input className="w-full border p-2" type="email" placeholder="Email" />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded" type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-600">© 2025 Sanad Thapa</footer>
    </div>
  );
}

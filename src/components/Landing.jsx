// src/pages/Landing.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-[Manrope] px-6 md:px-12 max-w-6xl mx-auto py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center text-center mb-20"
        data-aos="fade-up"
      >
        <div className="mb-8">
          <img
            src="/profile.jpg"
            alt="Titus Waweru"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-blue-600 shadow-lg object-cover mx-auto"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4 tracking-wide">
          Build Your Vision With <span className="text-blue-600">Clarity</span> and{' '}
          <span className="text-yellow-500">Power</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl italic">
          Creative technologist, GIS enthusiast, digital storyteller, and future-focused entrepreneur.
        </p>

        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl">
          Welcome to my digital space. I turn ideas into products and concepts into code. Whether it's a landing page, SaaS, or creative solution — this is where it begins.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
          <Link to="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition duration-300">
            🚀 Get Started
          </Link>
          <Link to="/about" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold shadow transition duration-300">
            👋 Learn More
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-20" data-aos="fade-up" data-aos-delay="100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'GIS & Mapping',
              desc: 'Creating precise geospatial data layers and visualizations.',
              icon: 'gis.jpg',
            },
            {
              title: 'Web Development',
              desc: 'Crafting responsive websites, portals, and SaaS platforms.',
              icon: 'webdev.jpg',
            },
            {
              title: 'Automation & Scripting',
              desc: 'Saving time with custom bots, APIs, and automations.',
              icon: 'code.jpg',
            },
            {
              title: 'Tech Training',
              desc: 'Helping youth and professionals level up with skills.',
              icon: 'training.jpg',
            },
            {
              title: 'Storytelling & Design',
              desc: 'Presenting data and concepts with clarity and style.',
              icon: 'story.jpg',
            },
            {
              title: 'Leadership',
              desc: 'Driving innovation, collaboration, and digital growth.',
              icon: 'leader.jpg',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-xl p-6 text-center transition-all"
              data-aos="fade-up"
              data-aos-delay={150 * (idx + 1)}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-[160px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Photo Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', '/gallery4.jpg'].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              className="rounded-xl shadow-md hover:shadow-lg transition duration-300 object-cover h-64 w-full"
              data-aos="zoom-in"
              data-aos-delay={100 * i}
            />
          ))}
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Ready to Collaborate or Learn Together?
        </h2>
        <p className="mb-6 text-gray-700">
          Let’s connect and build impactful digital solutions or empower others together.
        </p>
        <Link to="/contact">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition duration-300">
            📩 Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

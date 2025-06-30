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
    <div className="font-[Manrope] px-6 md:px-12 max-w-6xl mx-auto py-16 bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-20" data-aos="fade-up">
        <img
          src="/profile.jpg"
          alt="Titus Waweru"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-blue-600 shadow-lg object-cover mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 tracking-wide">
          Build Your Vision With <span className="text-blue-600">Clarity</span> & <span className="text-yellow-500">Power</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl italic">
          Creative technologist · GIS expert · Digital storyteller · Entrepreneur.
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl">
          I turn ideas into products and concepts into code. Whether it's a website, GIS dashboard, or a tech-driven story — this is where it begins.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition">
            🚀 Get Started
          </Link>
          <Link to="/about" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold shadow transition">
            👋 Learn More
          </Link>
        </div>
      </div>

      {/* What I Do Section */}
      <div className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">💡 What I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: 'GIS & Mapping', desc: 'Precise geospatial data, land planning, and analytics.', icon: 'gis.jpg' },
            { title: 'Web Development', desc: 'Fast, scalable websites and SaaS platforms.', icon: 'webdev.jpg' },
            { title: 'Automation & Scripting', desc: 'Saving time with custom APIs and scripts.', icon: 'code.jpg' },
            { title: 'Tech Training', desc: 'Empowering youth and professionals.', icon: 'training.jpg' },
            { title: 'Storytelling & Design', desc: 'Turning ideas into visual narratives.', icon: 'story.jpg' },
            { title: 'Leadership', desc: 'Leading teams, strategies, and impact.', icon: 'leader.jpg' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-xl p-6 text-center transition-all"
              data-aos="fade-up"
              data-aos-delay={150 * (i + 1)}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-[160px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">📸 Photo Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg'].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="rounded-xl shadow-md hover:shadow-lg transition object-cover h-64 w-full"
              data-aos="zoom-in"
              data-aos-delay={100 * i}
            />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Amazing</h2>
        <p className="mb-6 text-gray-700">
          Whether you're starting a project, exploring ideas, or seeking a mentor — I’m ready.
        </p>
        <Link to="/contact">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition">
            📩 Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
}

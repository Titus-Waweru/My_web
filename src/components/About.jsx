// src/pages/About.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-yellow-50 py-20 px-6 md:px-24 font-[Manrope] text-gray-900"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-12 text-center tracking-wide">
          About Me
        </h1>

        <p className="text-lg leading-relaxed mb-8 text-gray-800" data-aos="fade-up">
          Hi, I'm <strong>Titus Waweru</strong>, also known as <strong>TEX</strong> or{' '}
          <strong>Waweru wa Nyamû</strong>. I’m a GIS student, digital storyteller, and
          mission-driven tech entrepreneur with a heart for youth, faith, and Kenya.
        </p>

        <p className="text-lg leading-relaxed mb-8 text-gray-800" data-aos="fade-up">
          My journey blends creativity, leadership, and deep cultural storytelling. From leading
          the youth team at church to building{' '}
          <span className="text-yellow-600 font-semibold">LandLink</span>, I believe in
          solutions rooted in both faith and innovation.
        </p>

        <p className="text-lg font-semibold mb-4 text-gray-900" data-aos="fade-up">
          Things I love doing:
        </p>

        <ul
          className="list-disc pl-8 mb-10 space-y-3 text-gray-700 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li>🔹 Designing land & GIS platforms like surveyor-on-demand tools.</li>
          <li>🔹 Exploring AI, drones, and emerging tech for spatial data intelligence.</li>
          <li>🔹 Creating viral Kikuyu-Swahili series like <em>Chimp wa Siraki</em>.</li>
          <li>🔹 Blending Biblical wisdom, humor, and creative storytelling to educate and uplift.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-8 text-gray-800" data-aos="fade-up">
          Whether coding at night or worshiping at church, I strive to live with purpose,
          humility, and boldness. Every project, post, or pitch is a step toward building
          something eternal.
        </p>

        <blockquote
          className="bg-yellow-100 border-l-8 border-yellow-400 p-6 italic text-yellow-800 mt-12 rounded-lg shadow-md text-center text-xl font-semibold tracking-wide"
          data-aos="zoom-in"
        >
          “For I know the plans I have for you…” —{' '}
          <span className="text-yellow-900 font-bold">Jeremiah 29:11</span>
        </blockquote>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-5xl mx-auto mt-24" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Moments & Memories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['/gallery1.jpg', '/gallery2.jpg', '/gallery3.jpg', '/gallery4.jpg'].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Moment ${i + 1}`}
              className="rounded-xl shadow-md hover:shadow-lg transition duration-300 object-cover h-64 w-full"
              data-aos="zoom-in"
              data-aos-delay={100 * i}
            />
          ))}
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="text-center mt-24" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Let’s Build, Inspire, and Lead Together
        </h2>
        <p className="mb-6 text-gray-700">
          Whether it’s tech, training, or storytelling — I’m open to collaborations and conversations.
        </p>
        <a href="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition duration-300">
            💬 Reach Out
          </button>
        </a>
      </div>
    </section>
  );
}

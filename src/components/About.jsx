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
      {/* Bio Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10" data-aos="fade-up">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-12 text-center tracking-wide">
          About Me
        </h1>

        <p className="text-lg leading-relaxed mb-8 text-gray-800" data-aos="fade-up">
          Hey! I’m <strong>Titus Waweru</strong> — also known as <strong>TEX</strong> or <strong>Waweru wa Nyamû</strong>.
          I'm a GIS student, tech entrepreneur, and creative storyteller passionate about merging digital innovation
          with cultural and spiritual purpose.
        </p>

        <p className="text-lg leading-relaxed mb-8 text-gray-800" data-aos="fade-up">
          My work lives at the intersection of maps, messages, and mission. Whether I’m building a geospatial platform
          like <span className="text-yellow-600 font-semibold">LandLink</span> or producing a viral Kikuyu-Swahili episode of
          <em> Chimp wa Siraki</em>, I approach every project with faith, clarity, and purpose.
        </p>

        <p className="text-lg font-semibold mb-4 text-gray-900" data-aos="fade-up">
          Things I love doing:
        </p>

        <ul
          className="list-disc pl-8 mb-10 space-y-3 text-gray-700 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li>🔹 Designing GIS platforms & digital land tools.</li>
          <li>🔹 Using drones, AI, and tech for better decision-making.</li>
          <li>🔹 Creating viral, values-based storytelling content.</li>
          <li>🔹 Leading youth and building tech-for-good ventures.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-8 text-gray-800" data-aos="fade-up">
          I believe tech isn’t just about code — it’s about calling. And I’m here to build both products and people.
        </p>

        <blockquote
          className="bg-yellow-100 border-l-8 border-yellow-400 p-6 italic text-yellow-800 mt-12 rounded-lg shadow-md text-center text-xl font-semibold tracking-wide"
          data-aos="zoom-in"
        >
          “For I know the plans I have for you…” —{' '}
          <span className="text-yellow-900 font-bold">Jeremiah 29:11</span>
        </blockquote>

        {/* CV Download Button */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href="/TitusWaweru.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300"
          >
            📄 Download CV
          </a>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-5xl mx-auto mt-24" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">📸 Moments & Memories</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg', 'gallery4.jpg'].map((src, i) => (
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

      {/* Final CTA */}
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

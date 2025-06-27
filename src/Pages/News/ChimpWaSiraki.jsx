import React from 'react';

export default function ChimpWaSiraki() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-24 py-20 font-[Manrope] text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6 leading-tight">
          Behind the Scenes of <span className="text-yellow-600">“Chimp wa Siraki”</span>
        </h1>
        <p className="text-sm text-gray-500 mb-12">April 5, 2025</p>

        <img
          src="/Chimp_wa_siraki.jpg"
          alt="Chimp wa Siraki animated series"
          className="rounded-xl shadow-lg mb-12 w-full object-cover max-h-96"
          loading="lazy"
        />

        <p className="text-lg mb-8 leading-relaxed">
          What started as a simple, fun idea has blossomed into a cultural phenomenon — blending
          Kikuyu proverbs, biblical wisdom, and digital animation into the epic storytelling series: <em>Chimp wa Siraki</em>.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          Inspired by the Book of Sirach, this series uniquely fuses African creativity with deep truths and humor.
          Each episode is carefully scripted, voiced, and animated using a mix of cutting-edge AI tools alongside classic Adobe Premiere editing.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          Our goal is to educate, entertain, and preserve rich cultural knowledge for new generations — all through engaging digital storytelling.
          <strong>Chimp wa Siraki</strong> is more than just videos; it’s a bridge between tradition and technology.
        </p>

        <ul className="list-disc list-inside mb-12 space-y-3 text-lg text-gray-700">
          <li>💡 Kikuyu proverbs and cultural wisdom adapted for modern audiences.</li>
          <li>🎙️ Professional voice acting blended with authentic local dialects.</li>
          <li>🎨 Vibrant animation styles combining AI generation and handcrafting.</li>
          <li>📲 Viral reach through social media and community engagement.</li>
        </ul>

        <blockquote className="bg-yellow-50 border-l-8 border-yellow-400 p-6 italic text-yellow-800 rounded-lg shadow-md mb-12">
          “Preserving heritage through innovation — this is the heart of Chimp wa Siraki.”
        </blockquote>

        <p className="text-lg mb-12">
          Huge thanks to all the fans supporting the journey — stay tuned for more episodes and exciting new content! 🐒🔥
        </p>

        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition duration-300"
        >
          Join the Conversation
        </a>
      </div>
    </section>
  );
}

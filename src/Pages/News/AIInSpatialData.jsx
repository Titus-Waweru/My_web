import React from 'react';

export default function AIInSpatialData() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-24 py-20 font-[Manrope] text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
          Exploring the Power of <span className="text-yellow-600">AI</span> in Spatial Data Analysis
        </h1>
        <p className="text-sm text-gray-500 mb-12">May 15, 2025</p>

        <img
          src="/Ai_Image.jpg"
          alt="AI and spatial data visualization"
          className="rounded-xl shadow-lg mb-12 w-full object-cover max-h-96"
          loading="lazy"
        />

        <p className="text-lg mb-8 leading-relaxed">
          Artificial Intelligence (AI) is transforming the way we analyze, predict, and visualize geospatial data.
          By leveraging advanced machine learning techniques, we can unlock insights that were previously impossible to discover at scale.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          Techniques such as <strong>Random Forests</strong>, <strong>Convolutional Neural Networks (CNNs)</strong>, and
          deep learning enable the detection of land use changes, optimization of site selection, and monitoring of urban growth — all in real-time.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          Currently, I am working on integrating AI with drone imagery and satellite datasets to automate feature extraction,
          making surveyors' work faster, more accurate, and more efficient.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          <span className="font-semibold text-blue-700">Why this matters:</span> Spatial data analysis powered by AI has the potential to
          revolutionize land management, urban planning, agriculture, and environmental conservation across Kenya and beyond.
        </p>

        <ol className="list-decimal list-inside mb-12 space-y-3 text-lg text-gray-700">
          <li>Automated identification of land cover and usage patterns.</li>
          <li>Predictive modeling for natural disaster risks and resource allocation.</li>
          <li>Enhanced monitoring of infrastructure development and urban sprawl.</li>
          <li>Improved precision agriculture through detailed spatial insights.</li>
        </ol>

        <blockquote className="bg-yellow-50 border-l-8 border-yellow-400 p-6 italic text-yellow-800 rounded-lg shadow-md mb-12">
          “AI is not just the future of spatial data—it’s the compass guiding us through an increasingly complex world.”
        </blockquote>

        <p className="text-lg mb-12">
          The future is spatial. And AI is the compass guiding us toward smarter, more sustainable development. 🧭
        </p>

        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition duration-300"
        >
          Let’s Discuss AI & GIS
        </a>
      </div>
    </section>
  );
}

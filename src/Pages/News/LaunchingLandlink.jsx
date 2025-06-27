import React from 'react';

export default function LaunchingLandlink() {
  return (
    <section className="min-h-screen bg-white px-6 md:px-24 py-20 font-[Manrope] text-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
          Launching <span className="text-yellow-600">LandLink</span>: Connecting Kenyans to Licensed Surveyors
        </h1>
        <p className="text-sm text-gray-500 mb-12">June 20, 2025</p>

        <img
          src="/landlink.jpg"
          alt="LandLink platform preview"
          className="rounded-xl shadow-lg mb-12 w-full object-cover max-h-96"
          loading="lazy"
        />

        <p className="text-lg mb-8 leading-relaxed">
          I’m thrilled to announce the official launch of <strong>LandLink</strong>, Kenya’s first dedicated
          digital platform that directly connects landowners with <strong>licensed and verified surveyors</strong>.
          This platform eliminates the guesswork and unnecessary delays often experienced when accessing surveyor services.
        </p>

        <p className="text-lg mb-8 leading-relaxed">
          <span className="font-semibold text-blue-700">Why LandLink?</span> Because every plot matters, and landowners deserve
          a trustworthy, transparent, and efficient way to secure surveying services. Through LandLink, users can easily:
        </p>

        <ul className="list-disc list-inside mb-8 text-gray-700 space-y-3 text-lg">
          <li>Book licensed surveyors directly in their locality.</li>
          <li>Track survey progress with real-time updates and notifications.</li>
          <li>Access verified survey reports and documents digitally.</li>
          <li>Communicate seamlessly with surveyors via integrated messaging.</li>
        </ul>

        <p className="text-lg mb-8 leading-relaxed">
          We’re continuously working to roll out exciting new features including:
        </p>

        <ol className="list-decimal list-inside mb-12 space-y-3 text-lg text-gray-700">
          <li>Digital parcel visualization tools for intuitive land mapping.</li>
          <li>Seamless payment integration with <strong>M-Pesa</strong> and major mobile money providers.</li>
          <li>Collaboration with county land offices to streamline approvals.</li>
          <li>Secure document storage and sharing within the app.</li>
        </ol>

        <blockquote className="bg-yellow-50 border-l-8 border-yellow-400 p-6 italic text-yellow-800 rounded-lg shadow-md mb-12">
          “LandLink is more than an app — it’s a movement to empower Kenyans with land security and peace of mind.”
        </blockquote>

        <p className="text-lg mb-12">
          Join us in building Kenya <span className="font-bold text-blue-700">plot by plot</span>. Whether you’re a landowner,
          surveyor, or stakeholder, LandLink is here to make land surveying easier, safer, and transparent for everyone.
        </p>

        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl shadow-lg transition duration-300"
        >
          Reach Out & Get Started
        </a>
      </div>
    </section>
  );
}

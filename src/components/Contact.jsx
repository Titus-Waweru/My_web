import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-yellow-50 py-20 px-6 md:px-24 font-[Manrope] text-gray-800">
      {/* Page Heading */}
      <div className="text-center mb-16" data-aos="fade-down">
        <div className="text-5xl mb-4">📫</div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 tracking-wide mb-4">
          Let’s Connect
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Whether you're ready to build, brainstorm, or bless the timeline — I'm just one message away.
        </p>
        <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Form and Contact Box */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div
          className="bg-white rounded-3xl shadow-xl p-10"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition duration-300"
            >
              📤 Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Card */}
        <div
          className="bg-gradient-to-br from-yellow-100 to-blue-50 rounded-3xl shadow-lg p-10 text-gray-800"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold mb-6 text-blue-800">Reach Me Directly</h2>
          <ul className="space-y-4 text-lg">
            <li>
              📧 Email:{' '}
              <a
                href="mailto:tituswaweru631@gmail.com"
                className="text-blue-600 hover:underline"
              >
                tituswaweru631@gmail.com
              </a>
            </li>
            <li>
              📞 Phone:{' '}
              <a
                href="tel:+254745745186"
                className="text-blue-600 hover:underline"
              >
                +254 745 745 186
              </a>
            </li>
            <li>📍 Location: Nairobi, Kenya</li>
          </ul>

          <div className="mt-10">
            <p className="text-sm text-gray-600 italic">
              I typically respond within a day. Sundays are sacred, but I’ll get back to you right after. 🙏
            </p>
          </div>
        </div>
      </div>

      {/* Social + Website Footer Section */}
      <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-gray-300 text-center space-y-4">
        <p className="text-sm text-gray-500 font-medium">
          Visit our official site:{' '}
          <a
            href="https://www.landlink.co.ke"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline font-semibold"
          >
            www.landlink.co.ke
          </a>
        </p>

        <div className="flex justify-center space-x-6 text-blue-600">
          <a
            href="https://facebook.com/landlink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://linkedin.com/company/landlink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://twitter.com/landlink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-800"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} LandLink. All rights reserved.
        </p>
      </div>
    </section>
  );
}
